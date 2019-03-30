import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, CategoriaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuModule { }
