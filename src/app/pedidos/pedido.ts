import { Producto_Pedido } from './producto_pedido';

export class Pedido {

    constructor(
        public id: string,
        public factura: string,
        public observaciones: string,
        public estado: string,
        public alergias: boolean,
        public createdAt: string,
        public updatedAt: string,
        public cliente_username: string,
        public referencia: string,
        public direccion: string,

        public producto_pedido: Array <Producto_Pedido>
    ) {  }

}
