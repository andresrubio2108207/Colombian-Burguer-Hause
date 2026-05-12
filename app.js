const menuData = window.CBH_MENU_DATA || {};
const fallbackMenuItems = menuData.fallbackMenuItems || [];
const combos = menuData.combos || [];
const businessWhatsAppNumber = '573156742767';
const businessWhatsAppUrl = `https://wa.me/${businessWhatsAppNumber}`;

let menuItems = [...fallbackMenuItems];
let cart = [];
let activeFilter = 'all';
let pendingOptionItem = null;

const orderProfileStorageKey = 'cbh-order-profile';
const businessSchedule = {
  timeZone: 'America/Bogota',
  openHour: 16,
  closeHour: 24
};

function formatPrice(n) {
  return '$' + n.toLocaleString('es-CO');
}

function formatOptionLabel(item, option) {
  const price = option.price ?? item.price;
  if (typeof option === 'string') {
    return `${option} - ${formatPrice(price)}`;
  }
  return `${option.label} - ${formatPrice(price)}`;
}

function getOptionDetails(item, optionValue) {
  if (!item || !item.options || !item.options.length) return null;
  const option = item.options[Number(optionValue)];
  if (!option) return null;
  if (typeof option === 'string') {
    return { label: option, price: item.price };
  }
  return { label: option.label, price: option.price ?? item.price };
}

function getCartDisplayName(item) {
  return item.selectedOption ? `${item.name} - ${item.selectedOption}` : item.name;
}

function getBusinessStatus() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: businessSchedule.timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date());

  const hour = Number(parts.find(part => part.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find(part => part.type === 'minute')?.value ?? 0);
  const minutesNow = (hour * 60) + minute;
  const openMinutes = businessSchedule.openHour * 60;
  const closeMinutes = businessSchedule.closeHour * 60;
  const isOpen = minutesNow >= openMinutes && minutesNow < closeMinutes;

  return {
    isOpen,
    minutesNow
  };
}

function updateBusinessStatusUI() {
  const status = getBusinessStatus();
  const contactStatus = document.getElementById('businessStatusText');
  const footerStatus = document.getElementById('footerBusinessStatus');
  const serviceAlert = document.getElementById('serviceAlert');
  const text = status.isOpen ? 'Abierto ahora' : 'Cerrado ahora · Recibimos pedidos desde las 4:00 pm';
  const className = status.isOpen ? 'status-open' : 'status-closed';

  if (contactStatus) {
    contactStatus.textContent = text;
    contactStatus.className = `contact-item-label ${className}`;
  }

  if (footerStatus) {
    footerStatus.textContent = text;
    footerStatus.className = `footer-status ${className}`;
  }

  if (serviceAlert) {
    serviceAlert.classList.toggle('open', !status.isOpen);
  }

  document.body.classList.toggle('service-alert-visible', !status.isOpen);
}

function renderMenu(filter) {
  const grid = document.getElementById('menuGrid');
  grid.classList.toggle('menu-grid-sections', filter === 'all');

  if (filter === 'favoritos') {
    renderCombosToGrid(grid);
    return;
  }

  if (filter !== 'all') {
    const items = menuItems.filter(item => item.cat === filter);
    const title = items[0]?.sectionTitle || getCatLabel(filter);
    grid.classList.add('menu-grid-sections');
    grid.innerHTML = `
      <section class="menu-section">
        <div class="menu-section-header">
          <span class="menu-section-kicker">${title}</span>
        </div>
        <div class="menu-section-grid">
          ${items.map(renderProductCard).join('')}
        </div>
      </section>
    `;
    return;
  }

  const sortedItems = [...menuItems].sort((left, right) => {
    const categoryDiff = getCategoryOrder(left.cat) - getCategoryOrder(right.cat);
    return categoryDiff !== 0 ? categoryDiff : left.id - right.id;
  });

  const sections = [];
  let currentSection = null;
  let insertedFavorites = false;
  let prevCat = null;

  sortedItems.forEach(item => {
    // Insertar favoritos cuando la categoría cambia de 'perros' a otra
    if (!insertedFavorites && prevCat === 'perros' && item.cat !== 'perros') {
      sections.push({
        title: 'Los favoritos de la casa',
        favorites: true,
        items: [...combos]
      });
      insertedFavorites = true;
      currentSection = null;
    }

    const title = item.sectionTitle || getCatLabel(item.cat);
    if (!currentSection || currentSection.title !== title) {
      currentSection = { title, items: [] };
      sections.push(currentSection);
    }
    currentSection.items.push(item);

    prevCat = item.cat;
  });

  // Si los perros son la última categoría, insertar favoritos al final
  if (!insertedFavorites && prevCat === 'perros') {
    sections.push({
      title: 'Los favoritos de la casa',
      favorites: true,
      items: [...combos]
    });
  }

  grid.innerHTML = sections.map(section => `
    <section class="menu-section">
      <div class="menu-section-header">
        <span class="menu-section-kicker">${section.title}</span>
      </div>
      <div class="menu-section-grid">
        ${section.favorites ? section.items.map(combo => renderComboCard(combo)).join('') : section.items.map(renderProductCard).join('')}
      </div>
    </section>
  `).join('');
}

function getCategoryOrder(cat) {
  const order = {
    hamburguesas: 1,
    arepas: 2,
    perros: 3,
    fast: 4,
    patacones: 5,
    salchipapas: 6,
    maicitos: 7,
    sandwiches: 8,
    recomendados: 9,
    bebidas: 10,
    adicionales: 11
  };
  return order[cat] || 99;
}

function renderProductCard(item) {
  const imageStyle = item.imagePosition ? ` style="object-position: ${item.imagePosition};"` : '';
  const priceLabel = item.pricePrefix ? `${item.pricePrefix} ${formatPrice(item.price)}` : formatPrice(item.price);
  const isAvailable = item.available !== false;
  const addButton = isAvailable
    ? `<button class="add-btn" onclick="addToCart(${item.id})">+ Agregar</button>`
    : `<button class="add-btn disabled" disabled>Próximamente</button>`;
  return `
    <div class="product-card">
      ${item.image ? `<img class="product-img" src="${item.image}" alt="${item.name}" width="640" height="480" loading="lazy" decoding="async" fetchpriority="low"${imageStyle} onerror="this.outerHTML='<div class=\\'product-img-placeholder\\'>${item.icon}</div>'">` : `<div class="product-img-placeholder">${item.icon}</div>`}
      <div class="product-body">
        <span class="product-badge">${getCatLabel(item.cat)}</span>
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-footer">
          <div class="product-price">${priceLabel}</div>
          ${addButton}
        </div>
      </div>
    </div>
  `;
}

function renderCombosToGrid(grid) {
  if (!grid) return;

  const sortedCombos = [...combos].sort((left, right) => {
    const leftTitle = left.sectionTitle || 'Combos';
    const rightTitle = right.sectionTitle || 'Combos';
    if (leftTitle !== rightTitle) return leftTitle.localeCompare(rightTitle);
    return String(left.id).localeCompare(String(right.id));
  });

  if (grid) {
    grid.classList.add('menu-grid-sections');
  }

  const sections = [];
  let currentSection = null;

  sortedCombos.forEach(combo => {
    const title = combo.sectionTitle || 'Combos';
    if (!currentSection || currentSection.title !== title) {
      currentSection = { title, items: [] };
      sections.push(currentSection);
    }
    currentSection.items.push(combo);
  });

  grid.innerHTML = sections.map(section => `
    <section class="menu-section">
      <div class="menu-section-header">
        <span class="menu-section-kicker">${section.title}</span>
      </div>
      <div class="menu-section-grid">
        ${section.items.map(combo => renderComboCard(combo)).join('')}
      </div>
    </section>
  `).join('');
}

function renderComboCard(combo) {
  const imageStyle = combo.imagePosition ? ` style="object-position: ${combo.imagePosition};"` : '';
  const isAvailable = combo.available !== false;
  const addBtn = isAvailable
    ? `<button class="add-btn" onclick="addToCartCombo('${combo.id}', '${combo.name}', ${combo.price})">+ Agregar</button>`
    : `<button class="add-btn disabled" disabled>Próximamente</button>`;
  return `
    <div class="combo-card">
      ${combo.image ? `<img class="combo-img" src="${combo.image}" alt="${combo.name}" width="640" height="480" loading="lazy" decoding="async" fetchpriority="low"${imageStyle} onerror="this.outerHTML='<div class=\\'combo-img-placeholder\\'>${combo.icon}</div>'">` : `<div class="combo-img-placeholder">${combo.icon}</div>`}
      <div class="combo-body">
        <div class="combo-tag">Combo Especial</div>
        <div class="combo-name">${combo.name}</div>
        <div class="combo-desc">${combo.desc}</div>
        <div class="combo-footer">
          <div class="combo-price">${formatPrice(combo.price)}</div>
          ${addBtn}
        </div>
      </div>
    </div>
  `;
}

function getCatLabel(cat) {
  const labels = {
    hamburguesas: 'Hamburguesa',
    perros: 'Perros Calientes',
    fast: 'Fast Food',
    salchipapas: 'Salchipapas',
    maicitos: 'Maicitos',
    patacones: 'Patacón',
    sandwiches: 'Sándwich',
    arepas: 'Arepa',
    recomendados: '⭐ Recomendado',
    bebidas: 'Bebida',
    adicionales: 'Adicional'
  };
  return labels[cat] || cat;
}

function filterMenu(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMenu(cat);
}

function addToCart(id) {
  const item = menuItems.find(menuItem => menuItem.id === id);
  if (!item) return;
  if (item.options && item.options.length) {
    openOptionModal(item);
    return;
  }
  addItem(item.id, item.name, item.price, item.icon);
}

function addToCartCombo(id, name, price) {
  const combo = combos.find(c => c.id === id);
  if (combo && combo.options && combo.options.length) {
    openOptionModal(combo);
    return;
  }
  addItem(id, name, price, '🔥');
}

function addItem(id, name, price, icon, selectedOption = '') {
  const cartId = selectedOption ? `${id}::${selectedOption}` : String(id);
  const existing = cart.find(item => item.id === cartId);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: cartId, baseId: id, name, price, icon, qty: 1, selectedOption });
  }

  updateCart();

  const itemLabel = selectedOption ? `${name} - ${selectedOption}` : name;
  showToast('✓ ' + itemLabel.split(' ').slice(0, 4).join(' ') + ' agregado');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id != id);
  updateCart();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  updateCart();
  closeOrderModal();
  showToast('Carrito vaciado');
}

function changeQty(id, delta) {
  const item = cart.find(cartItem => cartItem.id == id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(cartItem => cartItem.id != id);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  [document.getElementById('cartBadge'), document.getElementById('cartBadge2')].forEach(element => {
    if (element) {
      element.textContent = count;
      element.style.display = count > 0 ? 'flex' : 'none';
    }
  });

  document.getElementById('cartTotal').textContent = formatPrice(total);

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const sidebar = document.getElementById('cartSidebar');

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><div class="empty-icon">🍔</div><p>Tu carrito está vacío.<br>¡Agrega algo delicioso!</p></div>';
    footerEl.style.display = 'none';
    sidebar.classList.remove('open');
  } else {
    footerEl.style.display = 'block';
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${getCartDisplayName(item)}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart('${item.id}')" title="Eliminar">✕</button>
      </div>
    `).join('');
    sidebar.classList.add('open');
  }
}

function buildCartMessage() {
  if (cart.length === 0) return '';

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let msg = 'Pedido:\n';

  cart.forEach(item => {
    msg += `- ${item.qty}x ${getCartDisplayName(item)} - ${formatPrice(item.price * item.qty)}\n`;
  });

  msg += `\nTotal: ${formatPrice(total)}`;
  return msg;
}

function orderWhatsApp() {
  if (cart.length === 0) return;
  const businessStatus = getBusinessStatus();
  if (!businessStatus.isOpen) {
    showToast('Ahora estamos cerrados. Recibimos pedidos desde las 4:00 pm');
    return;
  }
  loadSavedOrderProfile();
  handleServiceTypeChange();
  document.getElementById('orderModal').classList.add('open');
}

function openOptionModal(item) {
  pendingOptionItem = item;
  document.getElementById('optionModalTitle').textContent = item.name;
  document.getElementById('optionModalText').textContent = `Selecciona el ${item.optionsLabel || 'detalle'} para agregar este producto al carrito.`;
  const select = document.getElementById('optionSelect');
  select.innerHTML = '<option value="">Selecciona una opción</option>' + item.options.map((option, index) => {
    return `<option value="${index}">${formatOptionLabel(item, option)}</option>`;
  }).join('');
  select.value = '';
  document.getElementById('optionModal').classList.add('open');
}

function closeOptionModal(event) {
  if (event) event.preventDefault();
  pendingOptionItem = null;
  document.getElementById('optionModal').classList.remove('open');
}

function confirmOptionSelection() {
  if (!pendingOptionItem) return;
  const select = document.getElementById('optionSelect');
  const optionValue = select.value;
  if (optionValue === '') {
    showToast('Selecciona una opción para continuar');
    return;
  }
  const optionDetails = getOptionDetails(pendingOptionItem, optionValue);
  if (!optionDetails) {
    showToast('No se pudo cargar esa opción');
    return;
  }
  addItem(pendingOptionItem.id, pendingOptionItem.name, optionDetails.price, pendingOptionItem.icon, optionDetails.label);
  closeOptionModal();
}

function getServiceLabel(value) {
  const labels = { mesa: 'En mesa', domicilio: 'Domicilio', recoger: 'Para recoger' };
  return labels[value] || value;
}

function handleServiceTypeChange() {
  const serviceType = document.getElementById('serviceType').value;
  const mesaGrid = document.getElementById('mesaGrid');
  const contactGrid = document.getElementById('contactGrid');
  const deliveryGrid = document.getElementById('deliveryGrid');
  const intro = document.getElementById('orderModalIntro');
  const note = document.getElementById('orderFieldNote');
  const notes = document.getElementById('orderNotes');

  const isMesa = serviceType === 'mesa';
  const isDomicilio = serviceType === 'domicilio';
  const needsContact = serviceType === 'domicilio' || serviceType === 'recoger';

  mesaGrid.style.display = isMesa ? 'grid' : 'none';
  contactGrid.style.display = needsContact ? 'grid' : 'none';
  deliveryGrid.style.display = isDomicilio ? 'grid' : 'none';

  if (serviceType === 'mesa') {
    intro.textContent = 'Si estás consumiendo en el local, dinos tu número de mesa para llevarte el pedido correctamente.';
    note.textContent = '';
    notes.placeholder = 'Ej: sin cebolla, sin salsa, carne bien asada, papas aparte';
    return;
  }

  if (serviceType === 'domicilio') {
    intro.textContent = 'Para enviarte el domicilio sin retrasos, necesitamos tus datos de contacto y la dirección completa.';
    note.textContent = 'Usa observaciones para datos útiles del domicilio: conjunto, torre, apto, portería o referencias.';
    notes.placeholder = 'Ej: apto 302, torre 2, tocar citófono, sin salsa';
    return;
  }

  intro.textContent = 'Si vas a recoger tu pedido, déjanos tus datos para prepararlo y coordinar contigo por WhatsApp.';
  note.textContent = 'En observaciones puedes indicar la hora aproximada en la que pasarás o algún ajuste del pedido.';
  notes.placeholder = 'Ej: paso en 20 minutos, sin tomate, pagaré con transferencia';
}

function closeOrderModal(event) {
  if (event) event.preventDefault();
  document.getElementById('orderModal').classList.remove('open');
}

function loadSavedOrderProfile() {
  try {
    const raw = localStorage.getItem(orderProfileStorageKey);
    if (!raw) return;
    const profile = JSON.parse(raw);
    document.getElementById('serviceType').value = profile.serviceType || 'mesa';
    document.getElementById('customerName').value = profile.customerName || '';
    document.getElementById('tableNumber').value = profile.tableNumber || '';
    document.getElementById('customerPhone').value = profile.customerPhone || '';
    document.getElementById('paymentMethod').value = profile.paymentMethod || '';
    document.getElementById('customerAddress').value = profile.customerAddress || '';
    document.getElementById('customerNeighborhood').value = profile.customerNeighborhood || '';
    document.getElementById('orderNotes').value = profile.orderNotes || '';
  } catch (error) {
    console.warn('No se pudo cargar el perfil del pedido.', error);
  }
}

function saveOrderProfile(profile) {
  try {
    localStorage.setItem(orderProfileStorageKey, JSON.stringify(profile));
  } catch (error) {
    console.warn('No se pudo guardar el perfil del pedido.', error);
  }
}

function submitOrderWhatsApp() {
  if (cart.length === 0) return;
  const businessStatus = getBusinessStatus();
  if (!businessStatus.isOpen) {
    showToast('Estamos fuera de horario. Atendemos de 4:00 pm a 12:00 am');
    return;
  }

  const serviceType = document.getElementById('serviceType').value;
  const customerName = document.getElementById('customerName').value.trim();
  const tableNumber = document.getElementById('tableNumber').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const paymentMethod = document.getElementById('paymentMethod').value;
  const customerAddress = document.getElementById('customerAddress').value.trim();
  const customerNeighborhood = document.getElementById('customerNeighborhood').value.trim();
  const orderNotes = document.getElementById('orderNotes').value.trim();

  if (!customerName) {
    showToast('Escribe tu nombre para continuar');
    return;
  }

  if (serviceType === 'mesa' && !tableNumber) {
    showToast('Indica el número de mesa');
    return;
  }

  if ((serviceType === 'domicilio' || serviceType === 'recoger') && !customerPhone) {
    showToast('Escribe un teléfono de contacto');
    return;
  }

  if ((serviceType === 'domicilio' || serviceType === 'recoger') && !paymentMethod) {
    showToast('Selecciona el medio de pago');
    return;
  }

  if (serviceType === 'domicilio' && (!customerAddress || !customerNeighborhood)) {
    showToast('Completa dirección y barrio');
    return;
  }

  const profile = {
    serviceType,
    customerName,
    tableNumber,
    customerPhone,
    paymentMethod,
    customerAddress,
    customerNeighborhood,
    orderNotes
  };
  saveOrderProfile(profile);

  const headerLines = [
    'Hola! Quiero hacer el siguiente pedido de Colombian Burger House.',
    '',
    `Tipo de pedido: ${getServiceLabel(serviceType)}`,
    `Nombre: ${customerName}`
  ];

  if (serviceType === 'mesa') {
    headerLines.push(`Mesa: ${tableNumber}`);
  }

  if (serviceType === 'domicilio' || serviceType === 'recoger') {
    headerLines.push(`Teléfono: ${customerPhone}`);
    headerLines.push(`Medio de pago: ${paymentMethod}`);
  }

  if (serviceType === 'domicilio') {
    headerLines.push(`Dirección: ${customerAddress}`);
    headerLines.push(`Barrio: ${customerNeighborhood}`);
  }

  if (orderNotes) {
    headerLines.push(`Observaciones: ${orderNotes}`);
  }

  const msg = `${headerLines.join('\n')}\n\n${buildCartMessage()}\n\nGracias!`;
  closeOrderModal();
  window.open(`${businessWhatsAppUrl}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

function toggleCart(e) {
  if (e) e.preventDefault();
  const sidebar = document.getElementById('cartSidebar');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

const scrollTopButton = document.getElementById('scrollTop');

if (scrollTopButton) {
  window.addEventListener('scroll', () => {
    scrollTopButton.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

updateBusinessStatusUI();
requestAnimationFrame(() => {
  renderMenu(activeFilter);
});
setInterval(updateBusinessStatusUI, 60000);
