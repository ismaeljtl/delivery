export class User {

    constructor(
        public id: number,
        public correo: string,
        public clave: string,
        public permiso: boolean,
        public saldo: number
      ) {  }

}
