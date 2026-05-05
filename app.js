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
  const items = filter === 'all' ? menuItems : menuItems.filter(item => item.cat === filter);

  grid.innerHTML = items.map(item => `
    <div class="product-card">
      ${item.image ? `<img class="product-img" src="${item.image}" alt="${item.name}" onerror="this.outerHTML='<div class=\\'product-img-placeholder\\'>${item.icon}</div>'">` : `<div class="product-img-placeholder">${item.icon}</div>`}
      <div class="product-body">
        <span class="product-badge">${getCatLabel(item.cat)}</span>
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-footer">
          <div class="product-price">${item.priceLabel || formatPrice(item.price)}</div>
          <button class="add-btn" onclick="addToCart(${item.id})">+ Agregar</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCombos() {
  const grid = document.getElementById('combosGrid');

  grid.innerHTML = combos.map(combo => `
    <div class="combo-card">
      <div style="font-size:2.5rem;margin-bottom:0.5rem;">${combo.icon}</div>
      <div class="combo-tag">Combo Especial</div>
      <div class="combo-name">${combo.name}</div>
      <div class="combo-desc">${combo.desc}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div class="combo-price">${formatPrice(combo.price)}</div>
        <button class="add-btn" onclick="addToCartCombo('${combo.id}', '${combo.name}', ${combo.price})">+ Agregar</button>
      </div>
    </div>
  `).join('');
}

function getCatLabel(cat) {
  const labels = {
    hamburguesas: 'Hamburguesa',
    perros: 'Perro Caliente',
    fast: 'Fast Food',
    salchipapas: 'Salchipapas',
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
    if (typeof option === 'string') {
      return `<option value="${index}">${option}</option>`;
    }
    return `<option value="${index}">${option.label} - ${formatPrice(option.price ?? item.price)}</option>`;
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
  const contactGrid = document.getElementById('contactGrid');
  const deliveryGrid = document.getElementById('deliveryGrid');
  const intro = document.getElementById('orderModalIntro');
  const note = document.getElementById('orderFieldNote');
  const notes = document.getElementById('orderNotes');

  const isDomicilio = serviceType === 'domicilio';
  const needsContact = serviceType === 'domicilio' || serviceType === 'recoger';

  contactGrid.style.display = needsContact ? 'grid' : 'none';
  deliveryGrid.style.display = isDomicilio ? 'grid' : 'none';

  if (serviceType === 'mesa') {
    intro.textContent = 'Si estás consumiendo en el local, puedes dejarnos detalles del pedido para prepararlo justo como lo quieres.';
    note.textContent = 'Usa observaciones para aclaraciones del producto, cambios o recomendaciones de preparación.';
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
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const paymentMethod = document.getElementById('paymentMethod').value;
  const customerAddress = document.getElementById('customerAddress').value.trim();
  const customerNeighborhood = document.getElementById('customerNeighborhood').value.trim();
  const orderNotes = document.getElementById('orderNotes').value.trim();

  if (!customerName) {
    showToast('Escribe tu nombre para continuar');
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
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  btn.classList.toggle('visible', window.scrollY > 400);
});

renderMenu(activeFilter);
renderCombos();
updateBusinessStatusUI();
setInterval(updateBusinessStatusUI, 60000);
