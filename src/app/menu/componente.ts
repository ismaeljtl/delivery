import { CompIng } from './comp-ing';

export class Componente {

    constructor(
        public id: string,
        public nombre: string,
        public tipo: string,
        public comp_ing: Array <CompIng>
    ) { }
}
