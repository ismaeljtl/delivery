import { Injectable, EventEmitter } from '@angular/core';
import { Pedido } from './pedido';
import { PEDIDOS } from './mock-pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  // TODO: cambiar mocks por servicio HTTP
  // mock de pedidos
  public pedidos = PEDIDOS;

  // parametro de tipo eventEmitter para ue cuando ocurra un evento se realice cierta accion
  // con este objeto enviaremos el objeto del pedido seleccionado al componente de datos
  public pedidoEvent: EventEmitter<Pedido>;

  public filtroEvent: EventEmitter<String>;

  constructor() {
    // inicializamos la variable que servira para informar los eventos
    this.pedidoEvent = new EventEmitter<Pedido>();
    this.filtroEvent = new EventEmitter<string>();
  }

  levantarEvento(pedido: Pedido) {
    this.pedidoEvent.emit(pedido);
  }

  public levantarEventoGetFiltro(valor) {
    this.filtroEvent.emit(valor);
  }

  public calcMonto(pedido) {
    let monto = 0;

    for (const producto of pedido.producto_pedido) {
      monto += producto.precio;
    }

    return monto;
  }

  public setEstado(pedido, estado) {
    for (const p of this.pedidos) {
      if (p.id === pedido.id) {
        pedido.estado = estado;
      }
    }
  }

}
