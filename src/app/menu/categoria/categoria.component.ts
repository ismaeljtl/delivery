import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  // variable para mostrar mensajes de error en el modal
  errorMsg = '';

  // variable del input del modal
  inputCategoria = '';

  // TODO: borrar estas categorias
  // categorias cargadas de antemano para testeo
  categorias = [
    'pizza',
    'hamburguesa',
    'sandwich'
  ];

  constructor() { }

  ngOnInit() {
  }

  // True si el item no existe en el arreglo de categorias; 
  // False si ya la categoria esta en el array de categorias
  public comprobarCategorias(item: string) {
    for (let index = 0; index < this.categorias.length; index++) {
      if (item.toUpperCase() === this.categorias[index].toUpperCase()) {
        return false;
      }
    }
    return true;
  }

  // Metodo para agregar nueva categoria
  public agregarCategoria(){
    if (this.inputCategoria !== '') {
      if (this.comprobarCategorias(this.inputCategoria)) {
        // agregamos categoria
        this.categorias.push(this.inputCategoria);
        // cerramos el modal
        $('#exampleModal').modal('hide');

        // y limpiamos los campos
        this.errorMsg = '';
        this.inputCategoria = '';
      } else {
        this.errorMsg = 'La categoria no puede repetirse.';
      }
    } else {
      this.errorMsg = 'La categoria no puede estar vacia.';
    }
  }

  // Metodo para abrir modal y colocar el input en modo 'focus'
  public abrirModal(){
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#inputCategoria').trigger('focus');
    });
  }

}
