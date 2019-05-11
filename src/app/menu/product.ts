import { Componente } from './componente';

export class Product {

    constructor(
        public id: string,
        public categoria_id: string,
        public nombre: string,
        public descripcion: string,
        public estado: string,
        public precio: number,
        public componente: Array <Componente>
    ) { }
}
