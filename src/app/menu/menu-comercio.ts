import { Producto } from './producto';

export class MenuComercio {

    constructor(
        public id: string,
        public comercio_id: string,
        public nombre: string,
        public tipo: string,
        public productos: Array <Producto>
    ) { }
}
