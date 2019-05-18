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

  // variable que notificara si un producto esta habilitado o deshabilitado
  deshabilitado: boolean;

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
      this.producto = new Producto();
      this.deshabilitado = this.producto.deshabilitado;

      // esto evita que el formulario se cargue deshabilitado si se abrio un producto deshabilitado
      // se puede leer de este problema aqui: https://github.com/angular/angular/issues/22556
      setTimeout(() => {
        this.formProductos.enable();
        (this.formProductos.get('componente') as FormArray).enable();
      });
    });

    // Cuando clickean un producto obtengo la informacion del objeto
    this.menuService.producto.subscribe((param: Producto) => {
      this.producto = param;
      this.deshabilitado = this.producto.deshabilitado;
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
      componente: this.fb.array([
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
    console.log(producto);
    // si el producto se encuentra deshabilitado debemos deshabilitarlo
    if (this.producto.deshabilitado) {
      this.formProductos.disable();
      // (this.formProductos.get('componente') as FormArray).disable();
    } else {
      this.formProductos.enable();
      // (this.formProductos.get('componente') as FormArray).enable();
    }

    // limpiamos tdos los campos
    this.inicializarForm();

    // empezamos a llenar los campos
    this.formProductos.patchValue(producto);

    for (let i = 0; i < producto.componente.length; i++) {
      // agregamos el campo de categoria y llenamos la informacion
      this.addCategoria();

      // si el producto se encuentra deshabilitado debemos deshabilitar los subcontroles
      if (this.producto.deshabilitado) {
        (this.formProductos.get('componente') as FormArray).disable();
      } else {
        (this.formProductos.get('componente') as FormArray).enable();
      }

      this.formProductos.get('componente').patchValue(producto.componente);

      for (let j = 0; j < producto.componente[i].comp_ing.length; j++) {
        // agregamos el campo de ingrediente y llenamos la informacion
        this.addIngredientes(i);

        // si el producto se encuentra deshabilitado debemos deshabilitar los subcontroles
        if (this.producto.deshabilitado) {
          (this.formProductos.controls.componente as FormArray).at(i).get('comp_ing').disable();
        } else {
          (this.formProductos.controls.componente as FormArray).at(i).get('comp_ing').enable();
        }

        (this.formProductos.controls.componente as FormArray).at(i).get('comp_ing').patchValue(producto.componente[i].comp_ing);
      }
      // eliminamos un ingrediente para que no quede un campo nuevo para llenar
      this.deleteIngredientes(i);
    }
    // eliminamos una categoria para que no quede un campo nuevo para llenar
    this.deleteCategoria();
  }

  // metodo para agregar un FormArray de la categoria
  addCategoria() {
    const control = this.formProductos.controls.componente as FormArray;
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
    const control = this.formProductos.get('componente') as FormArray;
    control.removeAt(control.length - 1);
  }

  // metodo para agregar un FormArray de la ingrediente
  addIngredientes(i) {
    const control = (this.formProductos.controls.componente as FormArray).at(i).get('comp_ing') as FormArray;
    const fg = this.fb.group(
      new CompIng()
    );

    control.push(fg);
  }

  // metodo para eliminar un FormArray de ingrediente
  deleteIngredientes(ic) {
    // tslint:disable-next-line: no-string-literal
    const control = this.formProductos.get('componente')['controls'][ic].controls.comp_ing as FormArray;
    control.removeAt( control.length - 1 );
  }

  deshabilitar() {
    // TODO: crear una mejor forma de validacion (puede ser verificando el id)
    if (this.producto.nombre !== '') {
      if (this.producto.deshabilitado) {
        this.producto.deshabilitado = false;
      } else {
        this.producto.deshabilitado = true;
      }
      this.deshabilitado = this.producto.deshabilitado;
      this.patchForm(this.producto);
    } else {
      alert('NO PUEDES DESHABILITAR UN PRODUCTO QUE NO HA SIDO CREADO');
    }
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
