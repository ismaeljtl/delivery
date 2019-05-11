import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MENUCOMERCIO } from '../mock-menu-comercio';
import { Product } from '../product';
import { MenuService } from '../menu.service';
import { MenuComercio } from '../menu-comercio';
import { Componente } from '../componente';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {

  categorias: MenuComercio[];

  // Formulario productos
  formProductos: FormGroup;

  // valor seleccionados en el componente categoria
  categoria: string;
  // producto seleccionado luego de seleccionar una categoria
  producto: Product;

  constructor(private fb: FormBuilder, private menuService: MenuService) { }

  ngOnInit() {
    // Mock para obtener las categorias que hay en la app
    this.categorias = this.menuService.getMockProductos();

    this.menuService.producto.subscribe((param: Product) => {
      this.producto = param;
    });
    this.menuService.categoria.subscribe((param: string) => {
      this.categoria = param;
    });

    this.inicializarForm();
  }

  inicializarForm() {
    this.formProductos = this.fb.group({
      nombre: [''],
      categoriaProducto: ['Seleccione una opción'],
      estado: ['Seleccione una opción'],
      descripcion: [''],
      precio: [''],
      foto: [''],
      // https://www.techiediaries.com/angular-file-upload-progress-bar/
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
    // const producto = new MenuComercio(
    //   '',
    //   '',
    //   this.formProductos.get('categoriaProducto').value,
    //   'normal',
    //   [
    //     new Product(
    //       '',
    //       '',
    //       this.formProductos.get('nombre').value,
    //       this.formProductos.get('descripcion').value,
    //       this.formProductos.get('estado').value,
    //       this.formProductos.get('precio').value,
    //       [
    //         new Componente(
    //           '',
    //           this.formProductos.get('nombreCategoria').value,
    //           this.formProductos.get('tipoSeleccion').value,
    //           [
    //             for (const iterator of object) {
                  
    //             }
    //           ]
    //         )
    //       ]
    //     )
    //   ]
    // );

    console.log(this.formProductos.value);
  }

}
