import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public ejemplo(productos: Producto): Producto {
    console.log(productos);
    return productos;
  }
}
