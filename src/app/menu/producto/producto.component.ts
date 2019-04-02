import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { PRODUCTOS } from '../mock-productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos = PRODUCTOS;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // Funcion que inicializa los Tooltips (componente de bootstrap, buscar en la documentacion).
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  test() {
    console.log(this.productos[0].nombre);
  }

}
