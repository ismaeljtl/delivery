import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-datos-producto',
  templateUrl: './datos-producto.component.html',
  styleUrls: ['./datos-producto.component.css']
})
export class DatosProductoComponent implements OnInit {

  public pedido: Pedido = null;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    // Al iniciar el componente nos suscribimos a la funcion de menu.service, de esta
    // manera, al momento que ocurra un evento, el servicio nos lo informara
    this.pedidosService.pedidoEvent.subscribe((param: Pedido) => {
      this.pedido = param;
    });
  }

  public calcMonto(pedido) {
    return this.pedidosService.calcMonto(pedido);
  }

}
