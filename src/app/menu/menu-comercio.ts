import { Product } from './product';

export class MenuComercio {

    constructor(
        public id: string,
        public comercio_id: string,
        public nombre: string,
        public tipo: string,
        public products: Array <Product>
    ) { }
}
