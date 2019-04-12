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

  // TODO: cambiar mocks por servicio HTTP
  // mmock de categorias categorias
  categorias = PRODUCTOS;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  // Metodo que elimina una categoria y sus elementos
  public deleteCategoria(arrayCategorias, categoriaSeleccionada) {
    const eliminar = confirm('¿Seguro que deseas eliminar esta categoria?');
    if (eliminar) {
      for (const item of arrayCategorias) {
        if (item.nombre === categoriaSeleccionada.nombre) {
          const elem = document.getElementById(item.nombre);
          elem.parentNode.removeChild(elem);
          arrayCategorias.splice(arrayCategorias.indexOf(item), 1);
        }
      }
    }
  }

  // cuando se clickea una categoria debemos filtrar los productos segun esta categoria
  // este metodo que retorna la categoria clickeada a menu.service
  public getCategoria(categoria: Categoria) {
    // console.log(categoria.nombre);
    this.menuService.levantarEvento(categoria.nombre);
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
  public agregarCategoria() {
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
  public abrirModal() {
    $('#exampleModal').on('shown.bs.modal', () => {
      $('#inputCategoria').trigger('focus');
    });
  }

}
