import { Schema, model } from 'mongoose';

const schemaPedido = new Schema({
    nombreCliente: String,
    direccion: String,
    pedido: String,
    fechaEntrega: Date
});

export let pedidoSchema = model('schemaPedido', schemaPedido, 'pedidos' );
