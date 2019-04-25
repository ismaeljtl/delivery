import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../mock-productos';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {

  // Mock para obtener las categorias que hay en la app
  categorias = PRODUCTOS;

  // Formulario productos
  formProductos = new FormGroup({
    nombre: new FormControl(''),
    categoriaProducto: new FormControl('Seleccione una opción'),
    estado: new FormControl('Seleccione una opción'),
    ingrediente: new FormGroup({
      categoriaIngrediente: new FormControl(''),
      tipo: new FormControl('Seleccione una opción'),
      nombre: new FormControl(''),
      precio: new FormControl(''),
      opciones: new FormControl(''),
      agotado: new FormControl('')
    }),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    // FIXME: Buscar como trabajar la ruta de file en angular
    foto: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formProductos.value);
  }

}
