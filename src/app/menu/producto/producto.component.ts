import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { PRODUCTOS } from '../mock-productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  // TODO: cambiar mocks por servicio HTTP
  // mock de productos
  public productos = PRODUCTOS;

  // variable para filtrar segun la categoria que se haya clickeado
  public categoriaSeleccionada = '';

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // Funcion que inicializa los Tooltips (componente de bootstrap, buscar en la documentacion).
    $('[data-toggle="tooltip"]').tooltip();

    // Al iniciar el componente nos suscribimos a la funcion de menu.service, de esta
    // manera, al momento que ocurra un evento, el servicio nos lo informara
    this.menuService.categoriaSeleccionada.subscribe((param: string) => {
      this.categoriaSeleccionada = param;
    });
  }

  // Metodo para abrir el modal y cargar la informacion del objeto que se selecciono para editarlo.
  public openModal() {
    $('#modalProducto').modal('show');
  }

}
