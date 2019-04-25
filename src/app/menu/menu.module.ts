import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';

@NgModule({
  declarations: [MenuComponent, CategoriaComponent, ProductoComponent, ModalProductoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
