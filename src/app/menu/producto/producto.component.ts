import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuComercio } from '../menu-comercio';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  // TODO: cambiar mocks por servicio HTTP
  // mock de productos
  public productos: MenuComercio[];

  // variable para filtrar segun la categoria que se haya clickeado
  public categoriaSeleccionada = '';

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.productos = this.menuService.getMockProductos();

    // Al iniciar el componente nos suscribimos a la funcion de menu.service, de esta
    // manera, al momento que ocurra un evento, el servicio nos lo informara
    this.menuService.categoriaSeleccionada.subscribe((param: string) => {
      this.categoriaSeleccionada = param;
    });
  }

  // Metodo para abrir el modal y cargar la informacion del objeto que se selecciono para editarlo.
  public openModalDetails(producto) {
    this.menuService.getmodalDetails(producto);
    $('#modalProducto').modal('show');
  }

}
