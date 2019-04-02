import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../mock-productos';
import { MenuService } from '../menu.service';
import { Categoria } from '../categoria';

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

  // variable que contiene las categorias. (Luego vendran de un servicio)
  categorias = PRODUCTOS;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  // TODO: Remover este metodo. Sirve para probar la comunicacion entre componentes a traves de un servicio
  public log(productos) {
    this.menuService.ejemplo(productos);
  }

  // True si el item no existe en el arreglo de categorias;
  // False si ya la categoria esta en el array de categorias
  public comprobarCategorias(item: string) {
    for (const index of this.categorias) {
      if (item.toUpperCase() === index.nombre.toUpperCase()) {
        return false;
      }
    }
    return true;
  }

  // // Metodo para agregar nueva categoria
  public agregarCategoria(){
    if (this.inputCategoria !== '') {
      if (this.comprobarCategorias(this.inputCategoria)) {
        // agregamos la categoria
        this.categorias.push(new Categoria(this.inputCategoria, []) );
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

  // Metodo para abrir el modal y colocar el input en modo 'focus'
  public abrirModal(){
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#inputCategoria').trigger('focus');
    });
  }

}
