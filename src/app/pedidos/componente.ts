import { Ingrediente } from './ingrediente';

export class Componente {

    constructor(
        public id: string,
        public  comp_ing: string,
        public nombre: string,
        public tipo: string,

        public ingredientes: Array <Ingrediente>
    ) {  }

}