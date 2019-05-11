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
