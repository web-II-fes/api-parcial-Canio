import * as express from 'express';
import { pedidoSchema } from './../schemas/pedido';

const router = express.Router();

router.get('/pedido', async (req, res, next) => {
    
	pedidoSchema.find(function(err, pedido) {
		if (err){
      return err;
    } 
		res.send(pedido);
	});
});

router.get("/pedidoId/:id", async (req, res) => {
  let idPedido = req.params.id;
  try {
    let pedidos = await pedidoSchema.findById(idPedido);
    res.send(pedidos);
  } catch (err) {
    throw err;
  }
});


router.post('/pedido', async (req, res) => {
  try {
      const pedido = new pedidoSchema(req.body);
      let pedidoNuevo = await pedido.save();

      res.send(pedidoNuevo);
  } catch (err) {
      throw err;
  }
});



router.put('/pedido/:id', async (req, res, next) => {
  try {
      let pedido = await pedidoSchema.findByIdAndUpdate(req.params.id, req.body);

      res.send(pedido);
  } catch (err) {
      throw err;
  }
});


router.delete('/pedido/:_id', async (req, res, next) => {
  
    pedidoSchema.findByIdAndRemove(req.params._id, (err, pedido) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('Pedido eliminado: ', pedido);
  });
});


export = router;
