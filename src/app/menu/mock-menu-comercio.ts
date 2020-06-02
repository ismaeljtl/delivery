import { MenuComercio } from './menu-comercio';
import { Producto } from './producto';
import { CompIng } from './comp-ing';
import { Componente } from './componente';

/* 
Menú del comercio
Nota: sin detalle de los ingredientes, sí tiene de cuáles está compuestos pero no el
nombre ni precio de esos ingredientes)
Ruta: http://localhost:5009/delivery/business/categoriesAndProducts/
5c96955113b7460dce2c8f1f
Parámetro: id del comercio
*/

export const MENUCOMERCIO: MenuComercio[] = [
    {
        id: '5c9aa88baab17e1266863862',
        comercio_id: '5c96955113b7460dce2c8f1f',
        nombre: 'Pizzas',
        tipo: 'normal',
        productos: [{
            id: '5c9ab538b13e55145f58858b',
            categoria_id: '5c9aa88baab17e1266863862',
            categoriaProducto: 'Pizzas',
            nombre: 'Meat Lovers',
            descripcion: 'Carne, carne y carne',
            estado: 'activo',
            precio: 15000,
            foto: '',
            deshabilitado: false,
            componente: [
                {
                    id: '5c9ab538b13e55145f588592',
                    nombreComponente: 'Ingredientes',
                    tipoComponente: 'seleccion multiple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f588595',
                            ingrediente_id: '5c9ab1828d194d132c208798',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Carne de res',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f588594',
                            ingrediente_id: '5c9ab2c84ca610132d1f17bf',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Pepperoni',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f588593',
                            ingrediente_id: '5c9ab2fa8d194d132c208799',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Salchicha',
                            precio: '300',
                            agotado: false
                        }
                    ]
                },
                {
                    id: '5c9ab538b13e55145f58858e',
                    nombreComponente: 'Tipo de masa',
                    tipoComponente: 'seleccion simple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f588591',
                            ingrediente_id: '5c9ab42c8da5a5145d3dd0b2',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Masa delgada',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f58858f',
                            ingrediente_id: '5c9ab47e8da5a5145d3dd0b3',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Masa gruesa',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f58858f',
                            ingrediente_id: '5c9ab47e8da5a5145d3dd0b3',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Cheese bites',
                            precio: '300',
                            agotado: false
                        }
                    ]
                },
                {
                    id: '5c9ab538b13e55145f58858c',
                    nombreComponente: 'Extras',
                    tipoComponente: 'seleccion multiple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f58858d',
                            ingrediente_id: '5c9ab4cab13e55145f58858a',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Extra de piña',
                            precio: '300',
                            agotado: false
                        }
                    ]
                }
            ]
        },
        {
            id: '5c9ab538b13e55145f58858b',
            categoria_id: '5c9aa88baab17e1266863862',
            categoriaProducto: 'Pizzas',
            nombre: 'Napolitana',
            descripcion: 'Carne, carne y carne',
            estado: 'activo',
            precio: 10000,
            foto: '',
            deshabilitado: false,
            componente: [
                {
                    id: '5c9ab538b13e55145f588592',
                    nombreComponente: 'Ingredientes',
                    tipoComponente: 'seleccion multiple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f588595',
                            ingrediente_id: '5c9ab1828d194d132c208798',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Carne de res',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f588594',
                            ingrediente_id: '5c9ab2c84ca610132d1f17bf',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Pepperoni',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f588593',
                            ingrediente_id: '5c9ab2fa8d194d132c208799',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Salchicha',
                            precio: '300',
                            agotado: false
                        }
                    ]
                },
                {
                    id: '5c9ab538b13e55145f58858e',
                    nombreComponente: 'Tipo de masa',
                    tipoComponente: 'seleccion simple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f588591',
                            ingrediente_id: '5c9ab42c8da5a5145d3dd0b2',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Masa delgada',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f58858f',
                            ingrediente_id: '5c9ab47e8da5a5145d3dd0b3',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Masa gruesa',
                            precio: '300',
                            agotado: false
                        },
                        {
                            id: '5c9ab538b13e55145f58858f',
                            ingrediente_id: '5c9ab47e8da5a5145d3dd0b3',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Cheese bites',
                            precio: '300',
                            agotado: false
                        }
                    ]
                },
                {
                    id: '5c9ab538b13e55145f58858c',
                    nombreComponente: 'Extras',
                    tipoComponente: 'seleccion multiple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f58858d',
                            ingrediente_id: '5c9ab4cab13e55145f58858a',
                            obligatorio: false,
                            preseleccionado: false,
                            nombre_ingrediente: 'Extra de piña',
                            precio: '300',
                            agotado: false
                        }
                    ]
                }
            ]
        }]
     },
     {
        id: '5c9aa89514b1de126b424cb6',
        comercio_id: '5c96955113b7460dce2c8f1f',
        nombre: 'Postres',
        tipo: 'normal',
        productos: [{
            id: '5c9ab6fa8da5a5145d3dd0bf',
            categoria_id: '5c9aa89514b1de126b424cb6',
            categoriaProducto: 'Postres',
            nombre: 'Lava Cake',
            descripcion: 'Lo rico de un postre sin lo peligroso de un volcán de verdad',
            estado: 'activo',
            precio: 15000,
            foto: '',
            deshabilitado: false,
            componente: [
                {
                    id: '5c9ab538b13e55145f588592',
                    nombreComponente: 'Ingredientes',
                    tipoComponente: 'seleccion multiple',
                    comp_ing: [
                        {
                            id: '5c9ab538b13e55145f588595',
                            ingrediente_id: '5c9ab1828d194d132c208798',
                            obligatorio: true,
                            preseleccionado: true,
                            nombre_ingrediente: 'Helado',
                            precio: '300',
                            agotado: false
                        }
                    ]
                }
            ]
        }]
     }
]

