const limonadaPersonalOptions = [
  { label: 'Limón', price: 7900 },
  { label: 'Cerezada', price: 9900 },
  { label: 'Sandía', price: 9900 },
  { label: 'Hierbabuena', price: 9900 },
  { label: 'Coco', price: 10900 }
];

const limonadaJarraOptions = [
  { label: 'Limón', price: 15900 },
  { label: 'Cerezada', price: 19900 },
  { label: 'Sandía', price: 19900 },
  { label: 'Hierbabuena', price: 19900 },
  { label: 'Coco', price: 20900 }
];

const cocaColaOptions = [
  { label: '250 ml', price: 3500 },
  { label: '350 ml', price: 4500 },
  { label: '400 ml', price: 5000 },
  { label: '1.5 L', price: 9500 }
];

window.CBH_MENU_DATA = {
  fallbackMenuItems: [
    // AREPAS
    { id: 1, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Mix ⭐', desc: 'Pollo y carne desmechada, chorizo ahumado, chicharrón, queso mozzarella y maduro picado', price: 14900, icon: '🫓' },
    { id: 2, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Ahumada', desc: 'Salchicha, maíz tierno, carne desmechada y queso mozzarella', price: 12900, icon: '🫓' },
    { id: 3, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Colombiana', desc: 'Carne y pollo asado, chicharrón, maduro picado y queso mozzarella', price: 14900, icon: '🫓' },
    { id: 4, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Filet Mignon ⭐', desc: 'Pollo desmechado, maíz tierno, champiñones, papa ripio, salsa bechamel y queso mozzarella', price: 14900, icon: '🫓' },
    { id: 5, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Mexicana ⭐', desc: 'Jalapeño, frijol, aguacate, maíz tierno, carne desmechada y queso criollo', price: 14900, icon: '🫓' },
    { id: 6, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Desgranada', desc: 'Maíz tierno, papa ripio, chorizo ahumado, carne asada, queso costeño, jamón y queso mozzarella', price: 13900, icon: '🫓' },
    { id: 7, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Hawaiana', desc: 'Jamón, pollo asado, piña, maíz tierno y queso mozzarella', price: 13900, icon: '🫓' },
    { id: 8, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Trifasica', desc: 'Carne asada de cerdo y de res, pollo asado, maíz tierno, maduro y queso mozzarella', price: 14900, icon: '🫓' },
    { id: 9, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Super Queso', desc: 'Arepa al carbón, queso mozzarella y queso costeño', price: 8900, icon: '🫓' },
    { id: 10, cat: 'arepas', sectionTitle: 'Arepas', name: 'Arepa Criolla', desc: 'Carne desmechada, chorizo ahumado, maíz tierno, tocineta y queso mozzarella', price: 13900, icon: '🫓' },

    // HAMBURGUESAS
    { id: 11, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Burger Clasica', desc: 'Pan, carne, queso, tomate, lechuga', price: 13900, icon: '🍔', image: './Images/burguer clasica_4_11zon.webp', imagePosition: '90% 90%' },
    { id: 12, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Burger Callejera', desc: 'Pan, carne, queso, tocineta, papa ripio, bañada en salsa BBQ + papa francesa', price: 17900, icon: '🍔' },
    { id: 13, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Burger Hawaiana', desc: 'Pan, carne, queso, lechuga, tomate, tocineta, tajada de piña + papas a la francesa', price: 18900, icon: '🍔', image: './Images/h haw_5_11zon.webp', imagePosition: '50% 65%' },
    { id: 14, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Burger Super Queso', desc: 'Pan, carne, doble crema, queso cheddar, tocineta, salsa queso, tomate, lechuga + papa francesa', price: 18900, icon: '🍔' },
    { id: 15, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Burger Pollo', desc: 'Pan, filete de pollo a la plancha o apanado, queso, lechuga, tomate, tocineta + papa a la francesa', price: 18900, icon: '🍔', image: './Images/h pollo_3_11zon.webp', imagePosition: '50% 30%' },
    { id: 16, cat: 'hamburguesas', sectionTitle: 'Hamburguesas desde $13.900', name: 'Colombian Burger ⭐', desc: 'Pan, carne, queso, lechuga, tomate, tocineta, huevo frito, cebolla grille + papa a la francesa', price: 19900, icon: '🍔' },
    { id: 17, cat: 'hamburguesas', sectionTitle: 'Favoritas de la casa', name: 'Colombian Pork 👑', desc: 'Pan, carne, 3 tocinetas, 2 quesos, lechuga, tomate + papa a la francesa', price: 21900, icon: '🍔', image: './Images/burguer colombian pork_3_11zon.webp', imagePosition: '50% 60%' },
    { id: 18, cat: 'hamburguesas', sectionTitle: 'Favoritas de la casa', name: 'Colombian Filet Mignon ⭐', desc: 'Pan, carne, tocineta, salsa de champiñones, lechuga, tomate + papa a la francesa', price: 21900, icon: '🍔', image: './Images/b filet migon_1_11zon.webp', imagePosition: '50% 50%' },
    { id: 19, cat: 'hamburguesas', sectionTitle: 'Favoritas de la casa', name: 'Burger Mexicana ⭐', desc: 'Pan, carne, queso, guacamole, frijol refrito, jalapeño, tomate, lechuga, tocineta, tostacoes, lechuga + papa francesa', price: 23900, icon: '🍔', image: './Images/h mexicana_2_11zon.jpeg', imagePosition: '50% 70%' },
    { id: 20, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Colombian Mix 👑', desc: 'Pan, carne, pollo, queso, maíz tierno, lechuga, tomate + papa a la francesa', price: 23900, icon: '🍔' },
    { id: 21, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Colombian SuperHouse 👑🔥', desc: 'Pan, doble carne, tocineta, doble queso, lechuga, tomate + papa a la francesa', price: 24900, icon: '🍔', image: './Images/burguer colombian super hause_3_11zon.webp', imagePosition: '50% 60%' },
    { id: 22, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Burger Criolla 👑🔥', desc: 'Doble carne desmechada mas carne de hamburguesa bañada en salsa criolla de la casa, queso, maíz tierno, maduritos, tocineta, lechuga, tomate + papa a la francesa', price: 27900, icon: '🍔', image: './Images/h criolla_1_11zon.webp', imagePosition: '50% 78%' },
    { id: 23, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Burger Marinera 👑🔥', desc: 'Camarones, carne de res bañada en salsa marinera, doble tocineta, carne desmechada, cebolla morada, tajadas mango, queso mozarella, lechuga', price: 28900, icon: '🍔', image: './Images/Burguer marinera.webp' },
    { id: 24, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Burger Pecadora (Próximamente)', desc: 'Pan, doble carne, mermelada de tocineta, cebolla crunchy, queso, lechuga', price: 28900, icon: '🍔', available: false },
    { id: 25, cat: 'hamburguesas', sectionTitle: 'Las Premium VIP', name: 'Burger Infiel (Próximamente)', desc: 'Pan, doble carne, queso crema, cebolla crunchy, queso, piña', price: 28900, icon: '🍔', available: false },

    // PERROS
    { id: 26, cat: 'perros', name: 'Perro Clasico', desc: 'Pan, salchicha americana, queso, papa ripio', price: 13900, icon: '🌭' },
    { id: 27, cat: 'perros', name: 'Perro Especial ⭐', desc: 'Pan, salchicha, queso, cebolla, tocineta, papa ripio + papa francesa', price: 17900, icon: '🌭' },
    { id: 28, cat: 'perros', name: 'Perro Criollo 👑', desc: 'Pan, salchicha, carne desmechada, maíz, cebolla, queso, tocineta + papa francesa', price: 22900, icon: '🌭' },
    { id: 29, cat: 'perros', name: 'La Perra 🔥', desc: 'Salchicha americana, huevos codorniz, chorizo, queso, jamón, papa ripio, tocineta, lechuga, zanahoria, salsa showy', price: 23900, icon: '🌭', image: './Images/la perra.webp', imagePosition: '50% 50%' },

    // FAST FOOD
    { id: 30, cat: 'fast', sectionTitle: 'Fast Food', name: 'Crispetas de Pollo', desc: 'Trozos pechuga apanado + papa francesa', price: 16900, icon: '⚡' },
    { id: 31, cat: 'fast', sectionTitle: 'Fast Food', name: 'Super Alas ⭐', desc: 'Alitas apanadas en salsa picante o BBQ, ensalada + papa francesa', price: 19900, icon: '⚡', image: './Images/alitasx12_2_11zon.webp', imagePosition: '50% 95%', optionsLabel: 'cantidad', options: [{ label: 'X 4', price: 19900 }, { label: 'X 5', price: 23900 }] },
    { id: 32, cat: 'fast', sectionTitle: 'Fast Food', name: 'Nuggets', desc: 'Pollo apanado + papa francesa', price: 15900, icon: '⚡' },

    // SALCHIPAPAS
    { id: 34, cat: 'salchipapas', sectionTitle: 'Salchipapas', name: 'Salchipapa', desc: 'Trozos de salchicha, papas y queso', price: 13900, icon: '🍟' },
    { id: 35, cat: 'salchipapas', sectionTitle: 'Salchipapas', name: 'Choripapa', desc: 'Trozos de chorizo, papas y queso', price: 13900, icon: '🍟' },
    { id: 36, cat: 'salchipapas', sectionTitle: 'Salchipapas', name: 'Salchipapa especial ⭐', desc: 'Carne desmechada, pollo desmechado, chorizo, salchicha, huevos de codorniz, maíz tierno + papa', price: 24900, icon: '🍟', image: './Images/salchipapa especial_1_11zon.webp', imagePosition: '50% 45%' },
    { id: 37, cat: 'salchipapas', sectionTitle: 'Salchipapas', name: 'Colombian Fusion', desc: 'Salchicha, chorizo, queso + papa', price: 17900, icon: '🍟', image: './Images/salchiapapa mixta_5_11zon.webp', imagePosition: '50% 45%' },

    // PATACONES
    { id: 38, cat: 'patacones', sectionTitle: 'Patacones', name: 'Patacona carne o pollo 🔥', desc: 'Carne o pollo desmechado, maíz tierno, queso, ensalada, salsa de la casa, champiñones + papa francesa', price: 22900, icon: '🟡' },
    { id: 39, cat: 'patacones', sectionTitle: 'Patacones', name: 'Patacona Mixta', desc: 'Carne desmechada, pollo desmechado, chorizo, salchicha, maíz tierno, queso + papa a la francesa y salsa de la casa', price: 24900, icon: '🟡', image: './Images/Patacona mixta.webp' },

    // MAICITOS
    { id: 40, cat: 'maicitos', sectionTitle: 'Maicitos', name: 'Maicitos de Pollo', desc: 'Maíz tierno, pollo en bechamel con champiñones gratinados, queso mozzarella + papa francesa', price: 16900, icon: '🌽' },
    { id: 41, cat: 'maicitos', sectionTitle: 'Maicitos', name: 'Maicitos Rancheros', desc: 'Maíz tierno, tocineta, chorizo, jamón, queso, salsa ranchera carne desmechada, tostadas', price: 18900, icon: '🌽' },

    { id: 42, cat: 'perros', name: 'Sandwich Ropa Vieja', desc: 'Carne o pollo desmechado, lechuga, queso, tomate, salsa bechamel con champiñones + papa francesa', price: 22900, icon: '🥪' },

    // RECOMENDADOS
    { id: 43, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Churrasco', desc: 'Ensalada + papa a la francesa', price: 33900, icon: '🥩', image: './Images/churrasco_4_11zon.webp', imagePosition: '50% 50%' },
    { id: 44, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Costillas de Cerdo', desc: 'Ensalada + papa a la francesa', price: 33900, icon: '🥩' },
    { id: 45, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Pincho de pollo, res, o mixto', desc: 'Ensalada + papa a la francesa', price: 23900, icon: '🍢' },
    { id: 46, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Pechuga de pollo', desc: 'Ensalada + papa a la francesa', price: 33900, icon: '🍗' },
    { id: 47, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Ensalada Colombian House', desc: 'Trozos de pollo, lechuga, tomate, maíz tierno, queso, jamón, vinagreta, huevos codorniz', price: 19900, icon: '🥗' },
    { id: 48, cat: 'recomendados', sectionTitle: 'Recomendados', name: 'Picada Colombian House', desc: 'Res, pollo, costilla, papa a la francesa, rollos jamón, queso, huevo codorniz, tomate, batavia, yucas, aros cebolla, chorizo, salchicha, tomate', price: 52900, icon: '🍱', image: './Images/picada h_1_11zon.webp', imagePosition: '50% 84%' },

    // BEBIDAS
    { id: 49, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Limonada personal', desc: 'Elige si la quieres de limón, cereza, sandía, hierbabuena o coco.', price: 7900, pricePrefix: 'desde', icon: '🍹', optionsLabel: 'sabor', options: limonadaPersonalOptions },
    { id: 50, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jarra de limonada', desc: 'Elige el sabor de la jarra: limón, cereza, sandía, hierbabuena o coco.', price: 15900, pricePrefix: 'desde', icon: '🍹', image: './Images/limonada de sandia jarra_1_11zon.webp', imagePosition: '90% 25%', optionsLabel: 'sabor', options: limonadaJarraOptions },
    { id: 55, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Té', desc: 'Elige si lo prefieres de durazno o limón.', price: 5000, icon: '🍵', image: './Images/te_2_11zon.webp', imagePosition: '50% 50%' },
    { id: 56, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Gaseosa Coca-Cola', desc: 'Todas las gaseosas son Coca-Cola. Elige la presentación: 250 ml, 350 ml, 400 ml o 1.5 L.', price: 3500, pricePrefix: 'desde', icon: '🥤', image: './Images/cocacola 400ml_11zon.webp', imagePosition: '50% 50%', optionsLabel: 'presentación', options: cocaColaOptions },
    { id: 60, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jugo Hit PET 400ml', desc: 'Sabores: frutos tropicales, mora, mango y piña naranja.', price: 5000, icon: '🧃', image: './Images/jugo hit botella_3_11zon.webp', imagePosition: '50% 50%', optionsLabel: 'sabor', options: ['Frutos tropicales', 'Mora', 'Mango', 'Piña naranja'] },
    { id: 61, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jugo Hit Caja 1L', desc: 'Sabores: frutos tropicales, mora, mango y piña naranja.', price: 9000, icon: '🧃', optionsLabel: 'sabor', options: ['Frutos tropicales', 'Mora', 'Mango', 'Piña naranja'] },
    { id: 62, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Econolitro Postobon', desc: 'Elige sabor: Pepsi, Colombiana o Manzana.', price: 7500, icon: '🥤', image: './Images/econolitro_1_11zon.webp', imagePosition: '50% 50%', optionsLabel: 'sabor', options: [{ label: 'Pepsi', price: 7500 }, { label: 'Colombiana', price: 7500 }, { label: 'Manzana', price: 7500 }] },
    { id: 63, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jugo natural en Agua (Personal)', desc: 'Personal. Elige sabor: maracuyá, mora, lulo, fresa o mango.', price: 8900, icon: '🥭', optionsLabel: 'sabor', options: ['Maracuyá', 'Mora', 'Lulo', 'Fresa', 'Mango'] },
    { id: 64, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jarra de jugo natural en agua', desc: 'Jarra. Elige sabor: maracuyá, mora, lulo o fresa.', price: 19900, icon: '🍍', optionsLabel: 'sabor', options: ['Maracuyá', 'Mora', 'Lulo', 'Fresa'] },
    { id: 65, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jugo natural en leche (Personal)', desc: 'Personal. Elige sabor: maracuyá, mora, lulo, fresa o mango.', price: 9900, icon: '🥛', optionsLabel: 'sabor', options: ['Maracuyá', 'Mora', 'Lulo', 'Fresa', 'Mango'] },
    { id: 66, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Jarra de jugo natural en leche', desc: 'Jarra. Elige sabor: maracuyá, mora, lulo o fresa.', price: 22900, icon: '🥛', optionsLabel: 'sabor', options: ['Maracuyá', 'Mora', 'Lulo', 'Fresa'] },
    { id: 67, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Agua', desc: 'Agua embotellada personal.', price: 4500, icon: '💧' },
    { id: 68, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Soda', desc: 'Bebida soda personal.', price: 5000, icon: '🥤' },
    { id: 69, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Zumo de limón', desc: 'Bebida de limón personal.', price: 2000, icon: '🍋' },
    { id: 70, cat: 'bebidas', sectionTitle: 'Bebidas', name: 'Cervezas', desc: 'Selecciona la marca para continuar.', price: 6500, icon: '🍺', optionsLabel: 'cerveza', options: [{ label: 'Aguila', price: 6500 }, { label: 'Poker', price: 6500 }, { label: 'Andina', price: 6500 }, { label: 'Club colombia', price: 7500 }, { label: 'Corona', price: 9900 }, { label: 'Estella', price: 9900 }, { label: 'Sol', price: 9900 }, { label: 'Tres Cordilleras', price: 9900 }] },

    // ADICIONALES
    { id: 73, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Pollo', desc: 'Adición adicional.', price: 6900, icon: '➕' },
    { id: 74, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Carne', desc: 'Adición adicional.', price: 6900, icon: '➕' },
    { id: 75, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Queso', desc: 'Adición adicional.', price: 4900, icon: '➕' },
    { id: 76, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Tocineta', desc: 'Adición adicional.', price: 4900, icon: '➕' },
    { id: 77, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Huevo frito', desc: 'Adición adicional.', price: 3500, icon: '➕' },
    { id: 78, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Huevo de codorniz X6', desc: 'Adición adicional.', price: 8900, icon: '➕' },
    { id: 79, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Tazon de papas', desc: 'Adición adicional.', price: 9900, icon: '➕' },
    { id: 80, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Palitos de yuca', desc: 'Adición adicional.', price: 9900, icon: '➕' },
    { id: 81, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Jalapeños', desc: 'Adición adicional.', price: 3900, icon: '➕' },
    { id: 82, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Salchicha', desc: 'Adición adicional.', price: 5900, icon: '➕' },
    { id: 83, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Chorizo', desc: 'Adición adicional.', price: 5900, icon: '➕' },
    { id: 84, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Maicitos', desc: 'Adición adicional.', price: 4900, icon: '➕' },
    { id: 85, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Aros de Cebolla X6', desc: 'Adición adicional.', price: 9900, icon: '➕' },
    { id: 86, cat: 'adicionales', sectionTitle: 'Adicionales', name: 'Porción de Tajada madura X2', desc: 'Adición adicional.', price: 5900, icon: '➕' }
  ],
  combos: [
    { id: 'c1', sectionTitle: 'Los favoritos de la casa', name: '8 alitas + Tazón de papas, + ensalada', desc: 'Combo perfecto para compartir', price: 36900, icon: '🍗', image: './Images/8 alas_4_11zon.webp', imagePosition: '50% 52%', optionsLabel: 'sabor econolitro', options: [{ label: 'Pepsi', price: 36900 }, { label: 'Manzana', price: 36900 }, { label: 'Colombiana', price: 36900 }] },
    { id: 'c2', sectionTitle: 'Los favoritos de la casa', name: '12 alitas + Tazón de papas + Econolitro', desc: 'Para el hambre de verdad', price: 56900, icon: '🍗', image: './Images/alitasx12_2_11zon.webp', imagePosition: '50% 95%', optionsLabel: 'sabor econolitro', options: [{ label: 'Pepsi', price: 56900 }, { label: 'Manzana', price: 56900 }, { label: 'Colombiana', price: 56900 }] },
    { id: 'c3', sectionTitle: 'Los favoritos de la casa', name: '20 alitas + tazón de papas + Econolitro', desc: 'La opción más poderosa para compartir', price: 93900, icon: '🍗', image: './Images/20 alas_3_11zon.webp', imagePosition: '50% 72%', optionsLabel: 'sabor econolitro', options: [{ label: 'Pepsi', price: 93900 }, { label: 'Manzana', price: 93900 }, { label: 'Colombiana', price: 93900 }] },
    { id: 'c4', sectionTitle: 'Los favoritos de la casa', name: 'Combo amigos', desc: '4 burger clásicas o perros clásicos más papas y gaseosa 1Lt', price: 58900, icon: '🍔', image: './Images/combo amigos_2_11zon.webp', imagePosition: '50% 65%' },
    { id: 'c5', sectionTitle: 'Los favoritos de la casa', name: 'Super Volcan', desc: 'Tocineta, papas, chorizo, salchicha, huevos codorniz, jamón, maíz, carne o pollo desmechado, queso, papa ripio', price: 70900, icon: '🌋' },
    { id: 'c6', sectionTitle: 'Los favoritos de la casa', name: 'PG Burger', desc: 'Burger clasica + papas + gaseosa mini', price: 19900, icon: '🍔' },
    { id: 'c7', sectionTitle: 'Los favoritos de la casa', name: 'PG Perro', desc: 'Perro clasico + papas + gaseosa mini', price: 19900, icon: '🌭' },
    { id: 'c8', sectionTitle: 'Los favoritos de la casa', name: 'Perro Clasico 2*1 ⭐', desc: 'Dos perros clásicos', price: 19900, icon: '🌭' },
    { id: 'c9', sectionTitle: 'Los favoritos de la casa', name: 'Hamburguesa Clasica 2*1 ⭐', desc: 'Dos hamburguesas clásicas', price: 19900, icon: '🍔', image: './Images/clasicas 2x1_2_11zon.webp' },
    { id: 'c10', sectionTitle: 'Los favoritos de la casa', name: 'Burger Clasica o Perro Clasico 2*1 + papas ⭐', desc: 'El clásico con papas', price: 25900, icon: '🍔' },
    { id: 'c11', sectionTitle: 'Los favoritos de la casa', name: 'Burger o perro clasico + 3 alas bbq + papas', desc: 'Combo con alas y papas', price: 28900, icon: '🍗', image: './Images/h mas 3 alas_6_11zon.webp', imagePosition: '50% 20%' },
    { id: 'c12', sectionTitle: 'Los favoritos de la casa', name: '2 Burger clasica o perro clasico + 3 alas bbq + papas', desc: 'Combo doble con alas y papas', price: 38900, icon: '🍗' },
    { id: 'c13', sectionTitle: 'Los favoritos de la casa', name: '3 burger clasicas o perro clasico + papas + gaseosa 1 lt', desc: 'Combo grupal', price: 45900, icon: '🍔' },
    { id: 'c14', sectionTitle: 'Los favoritos de la casa', name: '1 salchi especial + 1 burger callejera', desc: 'Dúo especial de la casa', price: 37900, icon: '🔥' },
    { id: 'c15', sectionTitle: 'Los favoritos de la casa', name: '3 Especial Burger', desc: 'Callejera, superqueso, burgerpollo, colombian y gaseosa 1lt', price: 58900, icon: '🔥', image: './Images/3 burguer especiales_1_11zon.jpeg', imagePosition: '50% 74%' }
  ]
};
