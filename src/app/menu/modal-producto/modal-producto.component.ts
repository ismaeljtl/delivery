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
  formProductos: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formProductos = this.fb.group({
      nombre: [''],
      categoriaProducto: ['Seleccione una opción'],
      estado: ['Seleccione una opción'],
      descripcion: [''],
      precio: [''],
      foto: [''],
      // arreglo de categorias
      categoria: this.fb.array([
        this.fb.group({
          nombreCategoria: [''],
          tipoSeleccion: ['Seleccione una opción'],
          // arreglo de ingredientes
          ingredientes: this.fb.array([
            this.fb.group({
              nombreIngrediente: [''],
              precio: [''],
              tipoSeleccion: ['Seleccione una opción'],
              agotado: [false]
            })
          ])
        })
      ])
    });
  }

  addCategoria() {
    const control = this.formProductos.controls.categoria as FormArray;
    const fg = this.fb.group({
      nombreCategoria: [''],
      tipoSeleccion: ['Seleccione una opción'],
      // arreglo de ingredientes
      ingredientes: this.fb.array([
        this.fb.group({
          nombreIngrediente: [''],
          precio: [''],
          tipoSeleccion: ['Seleccione una opción'],
          agotado: [false]
        })
      ])
    });

    control.push(fg);
  }

  deleteCategoria() {
    // tslint:disable-next-line: no-string-literal
    const control = this.formProductos.get('categoria') as FormArray;
    control.removeAt(control.length - 1);
  }

  addIngredientes(i) {
    const control = (this.formProductos.controls.categoria as FormArray).at(i).get('ingredientes') as FormArray;
    const fg = this.fb.group({
      nombreIngrediente: [''],
      precio: [''],
      tipoSeleccion: ['Seleccione una opción'],
      agotado: [false]
    });

    control.push(fg);
  }

  deleteIngredientes(ic) {
    // tslint:disable-next-line: no-string-literal
    const control = this.formProductos.get('categoria')['controls'][ic].controls.ingredientes as FormArray;
    // console.log(control.controls[ic].controls.ingredientes);
    control.removeAt( control.length - 1 );
  }

  onSubmit() {
    console.log(this.formProductos.value);
  }

}
