import { Injectable, EventEmitter } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // parametro de tipo eventEmitter para ue cuando ocurra un evento se realice cierta accion
  public categoriaSeleccionada: EventEmitter<string>;

  constructor() {
    // inicializamos la variable que servira para informar los eventos
    this.categoriaSeleccionada = new EventEmitter<string>();
  }

  // con este metodo enviamos la categoria recibida a otro componente a traves de un evento
  levantarEvento(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }

}
