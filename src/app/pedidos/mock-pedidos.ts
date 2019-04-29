import { Pedido } from './pedido';
import { Producto_Pedido } from './producto_pedido';
import { Componente } from './componente';
import { Ingrediente } from './ingrediente';

export const PEDIDOS: Pedido[] = [
    new Pedido(
        '5cbbffaed107ec0c2be7c74c',
        '123552168',
        'Esta es una observacion',
        'en preparacion',
        false,
        '2019-04-21T05:29:18.396Z',
        '2019-04-21T05:29:46.606Z',
        'gianmode',
        'Error',
        'Avenida paseo, los rosales, municipio libertador, caracas, distrito capital, Venezuela.',
        [
            new Producto_Pedido(
                '5c9ab538b13e55145f58858b',
                '5c9aa88baab17e1266863862',
                'Meat Lovers',
                'Carne, carne y carne',
                'activo',
                15000,
                1,
                [
                    new Componente(
                        '5c9ab538b13e55145f588592',
                        null,
                        'Ingredientes',
                        'seleccion mmultiple',
                        [
                            new Ingrediente(
                                '5c9ab1828d194d132c208798',
                                'carne de res',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2c84ca610132d1f17bf',
                                'Pepperoni',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2fa8d194d132c208799',
                                'Salchicha',
                                '5c96955113b7460dce2c8f1f'
                            )
                        ]
                    )
                ]
            )
        ]
    ),

    new Pedido(
        '5cbbffaed107ec0c2be7c74c',
        '123552168',
        '',
        'en envio',
        false,
        '2019-04-21T05:29:18.396Z',
        '2019-04-21T05:29:46.606Z',
        'ismaeljtl',
        'Error',
        'El Picacho, San Antonio de los altos, Miranda, Venezuela.',
        [
            new Producto_Pedido(
                '5c9ab538b13e55145f58858b',
                '5c9aa88baab17e1266863862',
                'Meat Lovers',
                'Carne, carne y carne',
                'activo',
                15000,
                1,
                [
                    new Componente(
                        '5c9ab538b13e55145f588592',
                        null,
                        'Ingredientes',
                        'seleccion mmultiple',
                        [
                            new Ingrediente(
                                '5c9ab1828d194d132c208798',
                                'carne de res',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2c84ca610132d1f17bf',
                                'Pepperoni',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2fa8d194d132c208799',
                                'Salchicha',
                                '5c96955113b7460dce2c8f1f'
                            )
                        ]
                    )
                ]
            ), 
            new Producto_Pedido(
                '5c9ab538b13e55145f58858b',
                '5c9aa88baab17e1266863862',
                'Meat Lovers',
                'Carne, carne y carne',
                'activo',
                20000,
                1,
                [
                    new Componente(
                        '5c9ab538b13e55145f588592',
                        null,
                        'Ingredientes',
                        'seleccion mmultiple',
                        [
                            new Ingrediente(
                                '5c9ab1828d194d132c208798',
                                'carne de res',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2c84ca610132d1f17bf',
                                'Pepperoni',
                                '5c96955113b7460dce2c8f1f'
                            ),
                            new Ingrediente(
                                '5c9ab2fa8d194d132c208799',
                                'Salchicha',
                                '5c96955113b7460dce2c8f1f'
                            )
                        ]
                    )
                ]
            )
        ]
    )
];
