import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // TODO: Hablar con gian y ramon sobre como tienen este servicio
  // Seria genial que me enviaran la respuesta de esta manera
  public ingredientes = [
    {
      categoria: 'Ingredientes',
      ingredientes: [
      {
        nombre: 'tomate',
        precio: '500'
      }, {
        nombre: 'cebolla',
        precio: '700'
      }
      ]
    }, {
      categoria: 'Tipo de masa',
      ingredientes: [
      {
        nombre: 'delgada',
        precio: '300'
      }, {
        nombre: 'gruesa',
        precio: '800'
      }
      ]
    }
  ];

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  // Metodo para navegar a la vista anterior
  public back() {
    this._location.back();
  }

  // Como un producto tiene mas de un ingrediente se deben poder tener en el formulario todos los ingredientes
  public agregarIngrediente() {

  }

}
