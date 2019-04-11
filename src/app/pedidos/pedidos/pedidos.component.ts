import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  // Metodo para navegar a la vista anterior
  public back() {
    this._location.back();
  }

}
