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

  errorMsg = '';

  categorias = [
    'pizza',
    'hamburguesa',
    'sandwich'
  ]

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  // Metodo para navegar a la vista anterior
  public back() {
    this._location.back();
  }

  // True si el item no existe en el arreglo de categorias; 
  // False si ya la categoria esta en el array de categorias
  public revisarCategorias(item: string) {
    for (let index = 0; index < this.categorias.length; index++) {
      if (item.toUpperCase() === this.categorias[index].toUpperCase()) {
        return false;
      }
    }
    return true;
  }

  // Metodo para agregar nueva categoria
  public registrarCategoria(categoria: string) {
    if (categoria !== '') {
      if (this.revisarCategorias(categoria)) {
        this.categorias.push(categoria);
        $('#exampleModal').modal('hide');
      } else {
        this.errorMsg = 'La categoria no puede repetirse.';
      }
    } else {
      this.errorMsg = 'La categoria no puede estar vacia.';
    }
  }

}
