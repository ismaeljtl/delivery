import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DatosProductoComponent } from './datos-producto/datos-producto.component';

@NgModule({
  declarations: [PedidosComponent, ListaProductosComponent, DatosProductoComponent],
  imports: [
    CommonModule
  ]
})
export class PedidosModule { }
