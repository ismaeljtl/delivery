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

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  // Metodo para navegar a la vista anterior
  public back() {
    this._location.back();
  }

}
