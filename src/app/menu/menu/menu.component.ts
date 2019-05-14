import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import * as bootstrap from 'bootstrap';
import * as $ from 'jquery';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _location: Location, private menuService: MenuService) { }

  ngOnInit() {
  }

  // Metodo para navegar a la vista anterior
  public back() {
    this._location.back();
  }

  // se clickeo el boton de agregar producto, se informa al componente modal-producto de esto
  openModal() {
    this.menuService.openModal();
  }

}
