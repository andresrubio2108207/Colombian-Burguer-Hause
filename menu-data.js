window.CBH_MENU_DATA = {
  fallbackMenuItems: [
    // HAMBURGUESAS
    { id: 1, cat: 'hamburguesas', name: 'Burger Clásica', desc: 'Pan, carne, queso, tomate, lechuga', price: 11900, icon: '🍔' },
    { id: 2, cat: 'hamburguesas', name: 'Burger Callejera', desc: 'Pan, carne, queso, tocineta, papa ripio, bañada en salsa BBQ + papa francesa', price: 16500, icon: '🍔' },
    { id: 3, cat: 'hamburguesas', name: 'Burger Hawaiana', desc: 'Pan, carne, queso, lechuga, tomate, tocineta, tajada de piña + papas a la francesa', price: 16500, icon: '🍔' },
    { id: 4, cat: 'hamburguesas', name: 'Burger Super Queso', desc: 'Pan, carne, doble crema, queso cheddar, tocineta, salsa queso, tomate, lechuga + papa francesa', price: 17500, icon: '🍔' },
    { id: 5, cat: 'hamburguesas', name: 'Burger Mexicana', desc: 'Pan, carne, queso, guacamole, frijol refrito, jalapeño, tomate, lechuga, tocineta, tostacoes, lechuga + papa francesa', price: 18500, icon: '🍔' },
    { id: 6, cat: 'hamburguesas', name: 'Colombian Burger', desc: 'Pan, carne, queso, lechuga, tomate, tocineta, huevo frito, cebolla grille + papa a la francesa', price: 17500, icon: '🍔' },
    { id: 7, cat: 'hamburguesas', name: 'Burger Pollo', desc: 'Pan, filete de pollo a la plancha o apanado, queso, lechuga, tomate, tocineta + papa a la francesa', price: 17900, icon: '🍔' },
    { id: 8, cat: 'hamburguesas', name: 'Colombian Gaucha', desc: 'Pan, filete de pollo a la plancha o apanado, queso, lechuga, tomate, tocineta + papa a la francesa', price: 18900, icon: '🍔' },
    { id: 9, cat: 'hamburguesas', name: 'Colombian Filmington', desc: 'Pan, carne, tocineta, salsa de champiñones, lechuga, tomate + papa a la francesa', price: 18900, icon: '🍔' },
    { id: 10, cat: 'hamburguesas', name: 'Colombian Pork', desc: 'Pan, carne, 3 tocinetas, 2 quesos, lechuga, tomate + papa a la francesa', price: 18900, icon: '🍔' },
    { id: 11, cat: 'hamburguesas', name: 'Colombian Super House', desc: 'Pan, carne, tocineta, doble queso, lechuga, tomate + papa a la francesa', price: 21900, icon: '🍔' },
    { id: 12, cat: 'hamburguesas', name: 'Colombian Mix', desc: 'Pan, carne, pollo, queso, maíz tierno, lechuga, tomate + papa a la francesa', price: 21900, icon: '🍔' },
    { id: 13, cat: 'hamburguesas', name: 'Burger Criolla', desc: 'Doble carne desmechada bañada en salsa criolla de la casa, queso, maíz tierno, maduritos, tocineta, lechuga, tomate + papa a la francesa', price: 23900, icon: '🍔' },
    { id: 14, cat: 'hamburguesas', name: 'Burger Marinera', desc: 'Camarones, carne de res bañada en salsa marinera, doble tocineta, carne desmechada, cebolla morada, tajadas mango, queso mozarella, lechuga', price: 25900, icon: '🍔', image: './Images/Burguer marinera.jpeg' },
    // PERROS
    { id: 15, cat: 'perros', name: 'Perro Clásico', desc: 'Pan, salchicha americana, queso, papa ripio', price: 11900, icon: '🌭' },
    { id: 16, cat: 'perros', name: 'Perro Especial', desc: 'Pan, salchicha, queso, cebolla, tocineta, papa ripio + papa francesa', price: 13900, icon: '🌭' },
    { id: 17, cat: 'perros', name: 'Perro Criollo', desc: 'Pan, salchicha, carne desmechada, maíz, cebolla, queso, tocineta + papa francesa', price: 17900, icon: '🌭' },
    { id: 18, cat: 'perros', name: 'La Perra', desc: 'Salchicha americana, huevos codorniz, chorizo, queso, jamón, papa ripio, tocineta, lechuga, zanahoria, salsa showy', price: 20900, icon: '🌭' },
    // FAST FOOD
    { id: 19, cat: 'fast', name: 'Crispetas de Pollo', desc: 'Trozos pechuga apanado + papa francesa', price: 14900, icon: '⚡' },
    { id: 20, cat: 'fast', name: 'Super Alas', desc: 'Alitas apanadas en salsa picante o BBQ, ensalada + papa francesa', price: 18900, icon: '⚡' },
    { id: 21, cat: 'fast', name: 'Nuggets', desc: 'Pollo apanado + papa francesa', price: 14900, icon: '⚡' },
    { id: 22, cat: 'fast', name: 'Wrap', desc: 'Tortilla, queso, res o pollo en trozos, lechuga, maíz, tocineta, tomate', price: 19900, icon: '🌯' },
    // SALCHIPAPAS
    { id: 23, cat: 'salchipapas', name: 'Salchipapa', desc: 'Trozos de salchicha, papas y queso', price: 12900, icon: '🍟' },
    { id: 24, cat: 'salchipapas', name: 'Choripapa', desc: 'Trozos de chorizo, papas y queso', price: 12900, icon: '🍟' },
    { id: 25, cat: 'salchipapas', name: 'Salchipapa Especial', desc: 'Carne desmechada, pollo desmechado, chorizo, salchicha, huevos de codorniz, maíz tierno + papa', price: 20900, icon: '🍟' },
    { id: 26, cat: 'salchipapas', name: 'Colombian Fusion', desc: 'Salchicha, chorizo, queso + papa', price: 15900, icon: '🍟' },
    // PATACONES
    { id: 27, cat: 'patacones', name: 'Patacona', desc: 'Carne o pollo desmechado, maíz tierno, queso, ensalada, bechamel, champiñones + papa francesa', price: 18900, icon: '🟡' },
    { id: 28, cat: 'patacones', name: 'Patacona Mixta', desc: 'Carne desmechada, pollo desmechado, chorizo, salchicha, maíz tierno, queso + papa a la francesa', price: 20900, icon: '🟡', image: './Images/Patacona mixta.jpeg' },
    // MAICITOS
    { id: 29, cat: 'salchipapas', name: 'Maicitos de Pollo', desc: 'Maíz tierno, pollo en bechamel con champiñones gratinados, queso mozarella + papa frances', price: 15900, icon: '🌽' },
    { id: 30, cat: 'salchipapas', name: 'Maicitos Rancheros', desc: 'Maíz tierno, tocineta, chorizo, jamón, queso, salsa ranchera carne desmechada, pan frances', price: 16900, icon: '🌽' },
    // SANDWICHES
    { id: 31, cat: 'sandwiches', name: 'Sandwich Ropa Vieja', desc: 'Carne o pollo desmechado, lechuga, queso, tomate, salsa bechamel con champiñones + papa francesa', price: 20900, icon: '🥪' },
    { id: 32, cat: 'sandwiches', name: 'Sandwich Especial', desc: 'Pan, jamón, tocineta, chorizo, sanchicha, maíz, queso, lechuga, tomate + papas', price: 19900, icon: '🥪' },
    // RECOMENDADOS
    { id: 33, cat: 'recomendados', name: 'Churrasco', desc: 'Ensalada + papa a la francesa', price: 32900, icon: '🥩' },
    { id: 34, cat: 'recomendados', name: 'Costillas de Cerdo', desc: 'Ensalada + papa a la francesa', price: 32900, icon: '🥩' },
    { id: 35, cat: 'recomendados', name: 'Pincho de Pollo, Res o Mixto', desc: 'Ensalada + papa a la francesa', price: 20900, icon: '🍢' },
    { id: 36, cat: 'recomendados', name: 'Pechuga de Pollo', desc: 'Ensalada + papa a la francesa', price: 32900, icon: '🍗' },
    { id: 37, cat: 'recomendados', name: 'Ensalada Colombian House', desc: 'Trozos de pollo, lechuga, tomate, maíz tierno, queso, jamón, vinagreta, huevos codorniz', price: 18900, icon: '🥗' },
    { id: 38, cat: 'recomendados', name: 'Picada Colombian House', desc: 'Res, pollo, costilla, papa a la francesa, rollos jamón, queso, huevo codorniz, tomate, batavia, yucas, aros cebolla, chorizo, salchicha, tomate', price: 40900, icon: '🍱' },
    // BEBIDAS
    { id: 39, cat: 'bebidas', name: 'Limonadas en Vaso Personal', desc: 'Elige tu sabor para la presentación personal.', price: 7900, priceLabel: 'Desde $7.900', icon: '🍹', optionsLabel: 'sabor', options: [{ label: 'Natural', price: 7900 }, { label: 'Cerezada', price: 9900 }, { label: 'Hierbabuena', price: 9900 }, { label: 'Sandía', price: 9900 }, { label: 'Piña', price: 9900 }, { label: 'Coco', price: 10000 }] },
    { id: 40, cat: 'bebidas', name: 'Limonadas en Jarra', desc: 'Perfectas para compartir en la mesa.', price: 15900, priceLabel: 'Desde $15.900', icon: '🍹', optionsLabel: 'sabor', options: [{ label: 'Natural', price: 15900 }, { label: 'Cerezada', price: 18900 }, { label: 'Hierbabuena', price: 18900 }, { label: 'Sandía', price: 18900 }, { label: 'Piña', price: 18900 }, { label: 'Coco', price: 19900 }] },
    { id: 41, cat: 'bebidas', name: 'Tés', desc: 'Elige si lo prefieres de durazno o limón.', price: 5000, icon: '🍵', optionsLabel: 'sabor', options: ['Durazno', 'Limón'] },
    { id: 42, cat: 'bebidas', name: 'Gaseosas', desc: 'Selecciona la presentación que prefieras.', price: 3500, priceLabel: 'Desde $3.500', icon: '🥤', optionsLabel: 'presentación', options: [{ label: '250 ml', price: 3500 }, { label: '350 ml', price: 4500 }, { label: '400 ml', price: 5000 }, { label: '1.5 L', price: 9000 }] },
    { id: 43, cat: 'bebidas', name: 'Botella de Agua', desc: 'Agua embotellada personal.', price: 4500, icon: '💧' },
    { id: 44, cat: 'bebidas', name: 'Jugo Hit Personal', desc: 'Elige sabor: naranja piña, mango, mora o lulo.', price: 5000, icon: '🧃', optionsLabel: 'sabor', options: ['Naranja Piña', 'Mango', 'Mora', 'Lulo'] },
    { id: 45, cat: 'bebidas', name: 'Soda', desc: 'Bebida soda personal.', price: 5000, icon: '🥤' },
    { id: 46, cat: 'bebidas', name: 'Jugos Naturales en Vaso', desc: 'Elige si lo prefieres en agua o en leche. El sabor lo puedes indicar en observaciones.', price: 8900, priceLabel: 'Desde $8.900', icon: '🥭', optionsLabel: 'preparación', options: [{ label: 'En agua', price: 8900 }, { label: 'En leche', price: 9900 }] },
    { id: 47, cat: 'bebidas', name: 'Jugos Naturales en Jarra', desc: 'Para compartir. Indica el sabor en observaciones al finalizar el pedido.', price: 18900, priceLabel: 'Desde $18.900', icon: '🍍', optionsLabel: 'preparación', options: [{ label: 'En agua', price: 18900 }, { label: 'En leche', price: 19900 }] },
    { id: 48, cat: 'bebidas', name: 'Econolitro', desc: 'Disponible en sabores surtidos.', price: 7500, icon: '🥤', optionsLabel: 'sabor', options: ['Manzana', 'Colombiana', 'Uva', 'Toronja'] },
    { id: 49, cat: 'bebidas', name: 'Cervezas', desc: 'Elige tu cerveza favorita.', price: 6500, priceLabel: 'Desde $6.500', icon: '🍺', optionsLabel: 'cerveza', options: [{ label: 'Águila', price: 6500 }, { label: 'Poker', price: 6500 }, { label: 'Andina', price: 6500 }, { label: 'Corona', price: 9900 }] },
    // ADICIONALES
    { id: 54, cat: 'adicionales', name: 'Adiciones', desc: 'Elige la adición que deseas', price: 2000, priceLabel: 'Desde $2.000', icon: '➕', optionsLabel: 'adición', options: [{ label: 'Pollo', price: 5500 }, { label: 'Carne', price: 5500 }, { label: 'Queso', price: 2900 }, { label: 'Tocineta', price: 2900 }, { label: 'Huevo', price: 2000 }, { label: 'Tazón de Papas', price: 9900 }, { label: 'Palitos de Yuca', price: 9000 }, { label: 'Jalapeños', price: 2900 }, { label: 'Salchicha', price: 3900 }, { label: 'Maicitos', price: 2900 }, { label: 'Huevos de Codorniz', price: 8900 }] },
    { id: 65, cat: 'adicionales', name: '6 Aros de Cebolla', desc: '', price: 9900, icon: '🧅' },
    // AREPAS
    { id: 66, cat: 'arepas', name: 'Arepa Mix', desc: 'Pollo y carne desmechada, chorizo ahumado, chicharrón, queso mozarella y maduro picado', price: 12900, icon: '🫓' },
    { id: 67, cat: 'arepas', name: 'Arepa Filmington', desc: 'Pollo desmechado, maíz tierno, champiñones, papa ripio, salsa bechamel y queso mozarella', price: 12500, icon: '🫓' },
    { id: 68, cat: 'arepas', name: 'Arepa Hawaiana', desc: 'Jamón, pollo asado, piña, maíz tierno y queso mozarella', price: 12000, icon: '🫓' },
    { id: 69, cat: 'arepas', name: 'Arepa Ahumada', desc: 'Salchicha, maíz tierno, carne desmechada y queso mozarella', price: 10900, icon: '🫓' },
    { id: 70, cat: 'arepas', name: 'Arepa Mexicana', desc: 'Jalapeño, frijol, aguacate, maíz tierno, carne desmechada y queso criollo', price: 12900, icon: '🫓' },
    { id: 71, cat: 'arepas', name: 'Arepa Colombiana', desc: 'Carne y pollo asado, chicharrón, maduro picado y queso mozarella', price: 12500, icon: '🫓' },
    { id: 72, cat: 'arepas', name: 'Arepa Trifásica', desc: 'Carne asada de cerdo y de res, pollo asado, maíz tierno, maduro y queso mozarella', price: 12500, icon: '🫓' },
    { id: 73, cat: 'arepas', name: 'Arepa Criolla', desc: 'Carne desmechada, chorizo ahumado, maíz tierno, tocineta y queso mozarella', price: 11500, icon: '🫓' },
    { id: 74, cat: 'arepas', name: 'Arepa Desgranada', desc: 'Maíz tierno, papa ripio, chorizo ahumado, carne asada, queso costeño, jamón y queso mozarella', price: 11900, icon: '🫓' },
    { id: 75, cat: 'arepas', name: 'Arepa Super Queso', desc: 'Arepa al carbón, queso mozarella y queso costeño', price: 6500, icon: '🫓' }
  ],
  combos: [
    { id: 'c1', name: '8 Alitas + Tazón + Ensalada', desc: 'Combo perfecto para compartir', price: 32900, icon: '🍗' },
    { id: 'c2', name: '12 Alitas + Tazón + 1Ltr', desc: 'Para el hambre de verdad', price: 47900, icon: '🍗' },
    { id: 'c3', name: '4 Burger + Tazón + 1Ltr', desc: 'Combo familiar irresistible', price: 38900, icon: '🍔' },
    { id: 'c4', name: '3 Burger Clásicas', desc: 'El clásico que siempre funciona', price: 24900, icon: '🍔' },
    { id: 'c5', name: 'Super Volcán', desc: 'Tocineta, papas, chorizo, salchicha, huevos codorniz, jamón, maíz, carne o pollo desmechado, queso, papa ripio', price: 65900, icon: '🌋' },
    { id: 'c6', name: 'Hamburguesa Clásica 2x1', desc: 'Dos por el precio de una', price: 17900, icon: '🍔' },
    { id: 'c7', name: 'PG Burger', desc: 'Hamburguesa clásica + papas + gaseosa', price: 16900, icon: '🍔' },
    { id: 'c8', name: 'Perro Clásico 2x1', desc: 'Dos perros clásicos', price: 16900, icon: '🌭' },
    { id: 'c9', name: 'PG Perro', desc: 'Pan, salchicha americana, queso, papa ripio, papa a la francesa + gaseosa en lata', price: 16900, icon: '🌭' },
    { id: 'c10', name: 'Combo Especial Burger', desc: 'Callejera, Colombian, Pollo, Super', price: 23900, icon: '🔥' }
  ]
};
