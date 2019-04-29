import { Componente } from './componente';

export class Producto_Pedido {

    constructor(
        public id: string,
        public categoria_id: string,
        public nombre: string,
        public descripcion: string,
        public estado: string,
        public precio: number,
        public cantidad: number,

        public componente: Array <Componente>
    ) {  }

}
