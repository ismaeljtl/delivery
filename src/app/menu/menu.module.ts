import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [MenuComponent, CategoriaComponent, ProductoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuModule { }
