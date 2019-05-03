import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PRODUCTOS } from '../mock-productos';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {

  // Mock para obtener las categorias que hay en la app
  categorias = PRODUCTOS;

  // Formulario productos
  formProductos = this.fb.group({
    nombre: [''],
    categoriaProducto: ['Seleccione una opción'],
    estado: ['Seleccione una opción'],
    ingredientes: this.fb.array([]),
    descripcion: [''],
    precio: [''],
    // FIXME: Buscar como trabajar la ruta de file en angular
    // Respuesta: https://stackoverflow.com/questions/48497409/resolve-c-fakepath-for-file-input-using-pure-javascript-or-angular2
    foto: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addIngrediente();
  }

  get ingredientesArray() {
    return this.formProductos.get('ingredientes') as FormArray;
  }

  addIngrediente() {
    let fg = this.fb.group({
      nombreCategoria: this.fb.control(''),
      tipo: this.fb.control('Seleccione una opción'),
      nombreIngrediente: this.fb.control(''),
      precio: this.fb.control(''),
      opciones: this.fb.control('Seleccione una opción'),
      agotado: this.fb.control(false)
    });
    this.ingredientesArray.push(fg);
  }

  deleteIngrediente() {
    this.ingredientesArray.removeAt(this.ingredientesArray.length - 1);
  }

  onSubmit() {
    console.log(this.formProductos.value);
  }

}
