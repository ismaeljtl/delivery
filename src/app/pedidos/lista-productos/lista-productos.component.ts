import { Component, OnInit } from '@angular/core';
import { PEDIDOS } from '../mock-pedidos';
import { Pedido } from '../pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  // TODO: cambiar mocks por servicio HTTP
  // mock de pedidos
  public pedidos = this.pedidosService.pedidos;

  public filtroSeleccionado = '';

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.pedidosService.filtroEvent.subscribe((param: string) => {
      this.filtroSeleccionado = param;
    });
  }

  // cuando se clickea una categoria debemos filtrar los productos segun esta categoria
  // este metodo que retorna la categoria clickeada a menu.service
  public getPedido(pedido: Pedido) {
    this.pedidosService.levantarEvento(pedido);
  }

  public calcMonto(pedido) {
    return this.pedidosService.calcMonto(pedido);
  }

  public setEstado(pedido, estado) {
    this.pedidosService.setEstado(pedido, estado);
  }

}
