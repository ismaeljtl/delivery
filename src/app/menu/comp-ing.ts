export class CompIng {

    constructor(
        public id: string,
        public ingrediente_id: string,
        public obligatorio: boolean,
        public preseleccionado: boolean,
        public nombre_ingrediente: string,
        public estado: string
    ) { }
}
