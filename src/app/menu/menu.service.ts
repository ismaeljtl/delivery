import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './product';
import { MENUCOMERCIO } from './mock-menu-comercio';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // parametro de tipo eventEmitter para ue cuando ocurra un evento se realice cierta accion
  // con este parametro podremos saber que categoria ha sido seleccionada
  public categoriaSeleccionada: EventEmitter<string>;

  public producto: EventEmitter <Product>;
  public categoria: EventEmitter <string>;

  constructor() {
    // inicializamos la variable que servira para informar los eventos
    this.categoriaSeleccionada = new EventEmitter<string>();
    this.producto = new EventEmitter<Product>();
    this.categoria = new EventEmitter<string>();
  }

  getMockProductos() {
    return MENUCOMERCIO;
  }

  // con este metodo enviamos la categoria recibida a otro componente a traves de un evento
  // En este caso, la informacion se la enviamos al componente producto
  getCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }

  getmodalDetails(producto, categoriaSeleccionada) {
    this.producto.emit(producto);
    this.categoria.emit(categoriaSeleccionada);
  }

}
