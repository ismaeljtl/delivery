import { Componente } from './componente';

export class Producto {

    public id: string = '';
    public categoria_id: string = '';
    categoriaProducto: string = '';
    public nombre: string = '';
    public descripcion: string = '';
    public estado: string = 'Seleccione una opción';
    public precio: number;
    public foto: string = '';
    public componente: Array <Componente>;

    // constructor(
    //     id: string,
    //     categoria_id: string,
    //     nombre: string,
    //     descripcion: string,
    //     estado: string,
    //     precio: number,
    //     componente: Array <Componente>
    // ) {
    //     this.id = id;
    //     this.categoria_id = categoria_id;
    //     this.nombre = nombre;
    //     this.descripcion = descripcion;
    //     this.estado = estado;
    //     this.precio = precio;
    //     this.componente = componente;
    // }
}
