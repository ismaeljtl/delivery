import { Producto } from './producto';

export class Categoria {

    constructor(
        public nombre: string,
        public productos: Array<Producto>
      ) {  }

}
