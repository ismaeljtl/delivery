import { Injectable, EventEmitter } from '@angular/core';
import { Producto } from './producto';
import { MENUCOMERCIO } from './mock-menu-comercio';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // variable de tipo eventEmitter para ue cuando ocurra un evento se realice cierta accion
  // con este parametro podremos saber que categoria ha sido seleccionada
  public categoriaSeleccionada: EventEmitter<string>;

  // variable con la que podremos enviar el objeto Producto desde el 
  // componente producto al componente modal-producto
  public producto: EventEmitter <Producto>;

  // variable que informara al componente modal-producto de que se clickeo el boton de agregar producto
  public modalOpened: EventEmitter <null>;

  constructor() {
    // inicializamos las variables que serviran para informar los eventos
    this.categoriaSeleccionada = new EventEmitter<string>();
    this.producto = new EventEmitter<Producto>();
    this.modalOpened = new EventEmitter<null>();
  }

  // metodo para agregar un producto al mock
  addProducto(prod) {
    for (const negocio of MENUCOMERCIO) {
      if (negocio.nombre === prod.categoriaProducto) {
        negocio.productos.push(prod);
      }
    }
  }

  // metodo para obtener el mock
  getMockProductos() {
    return MENUCOMERCIO;
  }

  // con este metodo enviamos la categoria recibida a otro componente a traves de un evento
  // En este caso, la informacion se la enviamos al componente producto
  getCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }

  // metodo con el que se podran obtener los detalles del producto en el modal para 
  // el componente modal-producto
  getmodalDetails(producto) {
    this.producto.emit(producto);
  }

  // metodo que informara al componente modal-producto de que se clickeo el boton de agregar producto
  openModal() {
    this.modalOpened.emit(null);
  }

}
