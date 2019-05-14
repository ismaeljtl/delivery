import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Producto } from '../producto';
import { MenuService } from '../menu.service';
import { MenuComercio } from '../menu-comercio';
import { CompIng } from '../comp-ing';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.component.html',
  styleUrls: ['./modal-producto.component.css']
})
export class ModalProductoComponent implements OnInit {

  // variable que contendra las categorias que hay en el mock
  categorias: MenuComercio[];

  // Formulario productos
  formProductos: FormGroup;

  // producto seleccionado luego de seleccionar una categoria
  producto: Producto;

  constructor(private fb: FormBuilder, private menuService: MenuService) { }

  ngOnInit() {
    // Mock para obtener las categorias que hay en la app
    this.categorias = this.menuService.getMockProductos();

    // al iniciar el componente debemos inicializar el formulario
    this.inicializarForm();

    // el boton de agregar (que abre el modal vacio) esta en el componente menu, por lo que
    // debemos suscribirnos a su evento y cuando haya un click limpiamos el formulario
    this.menuService.modalOpened.subscribe(() => {
      this.inicializarForm();
    });

    // Cuando clickean un producto obtengo la informacion del objeto
    this.menuService.producto.subscribe((param: Producto) => {
      this.producto = param;
      this.patchForm(param);
    });
  }

  // metodo que nos sirve para inicializar el formulario reactivo
  inicializarForm() {
    this.formProductos = this.fb.group({
      nombre: [''],
      categoriaProducto: ['Seleccione una opción'],
      estado: ['Seleccione una opción'],
      descripcion: [''],
      precio: [''],
      // https://www.techiediaries.com/angular-file-upload-progress-bar/
      foto: [''],
      // arreglo de categorias
      categoria: this.fb.array([
        this.fb.group({
          nombreComponente: [''],
          tipoComponente: ['Seleccione una opción'],
          // arreglo de ingredientes
          comp_ing: this.fb.array([
            this.fb.group(
              new CompIng()
            )
          ])
        })
      ])
    });
  }

  // metodo para cargar los valores del producto en el formulario del modal
  patchForm(producto: Producto) {
    // primero limpiamos tdos los campos
    this.inicializarForm();

    // empezamos a llenar los campos
    this.formProductos.patchValue(producto);
    for (let i = 0; i < producto.componente.length; i++) {
      // agregamos el campo de categoria y llenamos la informacion
      this.addCategoria();
      this.formProductos.get('categoria').patchValue(producto.componente);

      for (let j = 0; j < producto.componente[i].comp_ing.length; j++) {
        // agregamos el campo de ingrediente y llenamos la informacion
        this.addIngredientes(i);
        (this.formProductos.controls.categoria as FormArray).at(i).get('comp_ing').patchValue(producto.componente[i].comp_ing);
      }
      // eliminamos un ingrediente para que no quede un campo nuevo para llenar
      this.deleteIngredientes(i);
    }
      // eliminamos una categoria para que no quede un campo nuevo para llenar
    this.deleteCategoria();
  }

  // metodo para agregar un FormArray de la categoria
  addCategoria() {
    const control = this.formProductos.controls.categoria as FormArray;
    const fg = this.fb.group({
      nombreComponente: [''],
      tipoComponente: ['Seleccione una opción'],
      // arreglo de ingredientes
      comp_ing: this.fb.array([
        this.fb.group(
          new CompIng()
        )
      ])
    });

    control.push(fg);
  }

  // metodo para eliminar un FormArray de categoria
  deleteCategoria() {
    // tslint:disable-next-line: no-string-literal
    const control = this.formProductos.get('categoria') as FormArray;
    control.removeAt(control.length - 1);
  }

  // metodo para agregar un FormArray de la ingrediente
  addIngredientes(i) {
    const control = (this.formProductos.controls.categoria as FormArray).at(i).get('comp_ing') as FormArray;
    const fg = this.fb.group(
      new CompIng()
    );

    control.push(fg);
  }

  // metodo para eliminar un FormArray de ingrediente
  deleteIngredientes(ic) {
    // tslint:disable-next-line: no-string-literal
    const control = this.formProductos.get('categoria')['controls'][ic].controls.comp_ing as FormArray;
    control.removeAt( control.length - 1 );
  }

  // metodo para el submit
  onSubmit() {
    console.log(this.formProductos.value);
    this.menuService.addProducto(this.formProductos.value);
    this.formProductos.reset();
    this.inicializarForm();
    $('#modalProducto').modal('hide');
  }

}
