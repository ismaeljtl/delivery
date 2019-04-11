import { Categoria } from './categoria';
import { Producto } from './producto';

export const PRODUCTOS: Categoria[] = [
  new Categoria('Pizza', [
    new Producto('Margarita',
                  'disponible',
                  'Tomate y Queso',
                  'La pizza clasica de Italia',
                  15000.99,
                  ''),
    new Producto('Hawaiana',
                'disponible',
                'Tomate, Queso, Piña y Jamon',
                'La versión de pizza con queso y tomate tradicional pero con un agregado tropical: la piña',
                15000.00,
                ''),
    new Producto('Queso y Pepperoni',
                  'disponible',
                  'Tomate, Pepperoni y Queso',
                  'Una de las pizzas mas desgustadas de USA.',
                  15000.00,
                  ''),
    new Producto('Napolitana',
                  'disponible',
                  'Tomate, Pepperoni y Queso',
                  'Una de las pizzas mas desgustadas de USA.',
                  23000.50,
                  '')
    ] ),

    new Categoria('Hamburguesa', [
      new Producto('Hamburguesa con queso y tocineta',
                    'disponible',
                    'Carne, lechuga, tomate y queso',
                    'La hamburguesa clasica que todo el mundo conoce',
                    30000.00,
                    '')
    ])
];

/*
[
// tslint:disable-next-line: jsdoc-format
    {
        "_id": "5c9aa88baab17e1266863862",
        "comercio_id": "5c96955113b7460dce2c8f1f",
        "nombre": "Pizzas",
        "tipo": "normal",
        "products": [
            {
                "_id": "5c9ab538b13e55145f58858b",
                "categoria_id": "5c9aa88baab17e1266863862",
                "nombre": "Meat Lovers",
                "descripcion": "Carne, carne y carne",
                "estado": "activo",
                "precio": 15000,
                "componente": [
                    {
                        "comp_ing": [
                            {
                                "_id": "5c9ab538b13e55145f588595",
                                "ingrediente_id": "5c9ab1828d194d132c208798",
                                "obligatorio": true,
                                "preseleccionado": true
                            },
                            {
                                "_id": "5c9ab538b13e55145f588594",
                                "ingrediente_id": "5c9ab2c84ca610132d1f17bf",
                                "obligatorio": true,
                                "preseleccionado": true
                            },
                            {
                                "_id": "5c9ab538b13e55145f588593",
                                "ingrediente_id": "5c9ab2fa8d194d132c208799",
                                "obligatorio": true,
                                "preseleccionado": true
                            }
                        ],
                        "_id": "5c9ab538b13e55145f588592",
                        "nombre": "Ingredientes",
                        "tipo": "seleccion multiple"
                    },
                    {
                        "comp_ing": [
                            {
                                "_id": "5c9ab538b13e55145f588591",
                                "ingrediente_id": "5c9ab42c8da5a5145d3dd0b2",
                                "obligatorio": false,
                                "preseleccionado": false
                            },
                            {
                                "_id": "5c9ab538b13e55145f588590",
                                "ingrediente_id": "5c9ab462b13e55145f588589",
                                "obligatorio": false,
                                "preseleccionado": false
                            },
                            {
                                "_id": "5c9ab538b13e55145f58858f",
                                "ingrediente_id": "5c9ab47e8da5a5145d3dd0b3",
                                "obligatorio": false,
                                "preseleccionado": false
                            }
                        ],
                        "_id": "5c9ab538b13e55145f58858e",
                        "nombre": "Tipo de masa",
                        "tipo": "seleccion simple"
                    },
                    {
                        "comp_ing": [
                            {
                                "_id": "5c9ab538b13e55145f58858d",
                                "ingrediente_id": "5c9ab4cab13e55145f58858a",
                                "obligatorio": false,
                                "preseleccionado": false
                            }
                        ],
                        "_id": "5c9ab538b13e55145f58858c",
                        "nombre": "Extras",
                        "tipo": "seleccion multiple"
                    }
                ]
            }
        ]
    },
    {
        "_id": "5c9aa89514b1de126b424cb6",
        "comercio_id": "5c96955113b7460dce2c8f1f",
        "nombre": "Postres",
        "tipo": "normal",
        "products": [
            {
                "_id": "5c9ab6fa8da5a5145d3dd0bf",
                "categoria_id": "5c9aa89514b1de126b424cb6",
                "nombre": "Lava Cake",
                "descripcion": "Lo rico de un postre sin lo peligroso de un fucking volcán de verdad",
                "estado": "activo",
                "precio": 4000,
                "componente": []
            }
        ]
    }
]
 */