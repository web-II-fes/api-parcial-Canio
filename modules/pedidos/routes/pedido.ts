import * as express from 'express';
import { pedidoSchema } from './../schemas/pedido';
import { resolve } from 'path';

const router = express.Router();

router.get('/pedido', async (req, res, next) => {
    
	pedidoSchema.find(function(err, pedido) {
		if (err){
      return err;
    } 
		res.send(pedido);
	});
});

router.get("/pedido/:id", async (req, res) => {
  let idPedido = req.params.id;
  try {
    let pedidos = await pedidoSchema.findById(idPedido);
    res.send(pedidos);
  } catch (err) {
    throw err;
  }
});


router.post('/pedido', (req, res) => {
  
  const pedido = new pedidoSchema(req.body);
  pedido.save(function(err, pedido){
    if (err) {
      return err;
    }
    res.json(pedido);
  });
});



router.put('/pedido/:_id', (req, res, next) => {

    pedidoSchema.findByIdAndUpdate(req.params._id, req.body, { new : true}, (err, pedido) => {
    if (err){
      return err;
    }

    return res.send(pedido);
  });
});


router.delete('/pedido/:_id', (req, res, next) => {
  
    pedidoSchema.findByIdAndRemove(req.params._id, (err, pedido) => {
    if (err) {
      console.log('Error: ', err);
    }
    console.log('Pedido eliminado: ', pedido);
  });
});


export = router;
