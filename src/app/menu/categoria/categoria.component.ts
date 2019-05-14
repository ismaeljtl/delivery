import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Categoria } from '../categoria';
import { MenuComercio } from '../menu-comercio';

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
  categorias: MenuComercio[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.categorias = this.menuService.getMockProductos();
  }

  // Un usuario podria querer eliminar una categoria y todos sus elementos, por eso este metodo
  public deleteCategoria(arrayCategorias, categoriaSeleccionada) {
    // primero debemos saber si el usuario esta de acuerdo con eliminar la categoria
    const eliminar = confirm('¿Seguro que deseas eliminar esta categoria?');
    if (eliminar) {
      // Para eliminar la categoria debemos recorrer el Array de Categorias y eliminar el objeto completo
      for (const item of arrayCategorias) {
        // localizamos el objeto de la categoria a eliminar
        if (item.nombre === categoriaSeleccionada.nombre) {
          // Eliminamos su elemento HTML
          const elem = document.getElementById(item.nombre);
          elem.parentNode.removeChild(elem);
          // Eliminamos el objeto JS
          arrayCategorias.splice(arrayCategorias.indexOf(item), 1);
        }
      }
    }
  }

  // cuando se clickea una categoria debemos filtrar los productos segun esta categoria
  // este metodo que retorna la categoria clickeada a menu.service
  public getCategoria(categoria: Categoria) {
    // console.log(categoria.nombre);
    this.menuService.getCategoria(categoria.nombre);
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

  // TODO: este metodo no funcionara de esta manera con los servicios HTTP. 
  // // Metodo para agregar nueva categoria
  public agregarCategoria() {
    if (this.inputCategoria !== '') {
      if (this.comprobarCategorias(this.inputCategoria)) {
        // agregamos la categoria
        this.categorias.push( new MenuComercio('', '', this.toTitleCase(this.inputCategoria), 'normal', []) );
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

  // funcion para convertir strings a Title Case (ej. hola -> Hola)
  public toTitleCase(str) {
    return str.replace(
        /\w\S*/g, (txt: string) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

  // Metodo para abrir el modal y colocar el input en modo 'focus'
  public abrirModal() {
    $('#exampleModal').on('shown.bs.modal', () => {
      $('#inputCategoria').trigger('focus');
    });
  }

}
