import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PedidosService } from '../pedidos/pedidos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route = '';
  cantPedidos = 2;

  constructor(location: Location, router: Router) {
    // metodo para obtener la url de la app en el inicio y cada cambio de la ruta
    router.events.subscribe(val => {
      this.route = location.path();
    });
  }

  ngOnInit() {
  }

}
