import { MenuComercio } from './menu-comercio';
import { Product } from './product';
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
    new MenuComercio(
        '5c9aa88baab17e1266863862',
        '5c96955113b7460dce2c8f1f',
        'Pizzas',
        'normal',
        [
            new Product(
                '5c9ab538b13e55145f58858b',
                '5c9aa88baab17e1266863862',
                'Meat Lovers',
                'Carne, carne y carne',
                'activo',
                15000,
                [
                    new Componente(
                        '5c9ab538b13e55145f588592',
                        'Ingredientes',
                        'seleccion multiple',
                        [
                            new CompIng(
                                '5c9ab538b13e55145f588595',
                                '5c9ab1828d194d132c208798',
                                true,
                                true,
                                'Carne de res',
                                'disponible'
                            ),
                            new CompIng(
                                '5c9ab538b13e55145f588594',
                                '5c9ab2c84ca610132d1f17bf',
                                true,
                                true,
                                'Pepperoni',
                                'disponible'
                            ),
                            new CompIng(
                                '5c9ab538b13e55145f588593',
                                '5c9ab2fa8d194d132c208799',
                                true,
                                true,
                                'Salchicha',
                                'disponible'
                            )
                        ]
                    ),
                    new Componente(
                        '5c9ab538b13e55145f58858e',
                        'Tipo de masa',
                        'seleccion simple',
                        [
                            new CompIng(
                                '5c9ab538b13e55145f588591',
                                '5c9ab42c8da5a5145d3dd0b2',
                                false,
                                false,
                                'Masa delgada',
                                'disponible'
                            ),
                            new CompIng(
                                '5c9ab538b13e55145f588590',
                                '5c9ab462b13e55145f588589',
                                false,
                                false,
                                'Masa gruesa',
                                'disponible'
                            ),
                            new CompIng(
                                '5c9ab538b13e55145f58858f',
                                '5c9ab47e8da5a5145d3dd0b3',
                                false,
                                false,
                                'Cheese bites',
                                'agotado'
                            )
                        ]
                    ),
                    new Componente(
                        '5c9ab538b13e55145f58858c',
                        'Extras',
                        'seleccion multiple',
                        [
                            new CompIng(
                                '5c9ab538b13e55145f58858d',
                                '5c9ab4cab13e55145f58858a',
                                false,
                                false,
                                'Extra de piña',
                                'disponible'
                            )
                        ]
                    )
                ]
            ),
        ]
    ),
    new MenuComercio(
        '5c9aa89514b1de126b424cb6',
        '5c96955113b7460dce2c8f1f',
        'Postres',
        'normal',
        [
            new Product(
                '5c9ab6fa8da5a5145d3dd0bf',
                '5c9aa89514b1de126b424cb6',
                'Lava Cake',
                'Lo rico de un postre sin lo peligroso de un fucking volcán de verdad',
                'agotado',
                4000,
                []
            )
        ]
    )
];
