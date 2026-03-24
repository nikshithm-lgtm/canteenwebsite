// ===== CONSTANTS & CONFIGURATION =====
const APP_CONFIG = {
    name: 'CampusBite',
    version: '2.0.0',
    adminCredentials: { username: 'santhosh', password: '123456789' }
};

const ORDER_STATUS = {
    PREPARING: 'Preparing',
    READY: 'Ready',
    DELIVERED: 'Delivered'
};

const API_ENDPOINTS = {
    orders: '/api/orders'
};

// ===== DATA =====
const colleges = [
    { id: 1, name: "ABC Engineering College", city: "Mumbai", tag: "Engineering", image: "\u{1F3DB}\u{FE0F}", students: 2500 },
    { id: 2, name: "XYZ University", city: "Delhi", tag: "University", image: "\u{1F393}", students: 5000 },
    { id: 3, name: "National Institute of Technology", city: "Trichy", tag: "NIT", image: "\u{26A1}", students: 3500 },
    { id: 4, name: "Global College", city: "Bengaluru", tag: "Arts & Science", image: "\u{1F3A8}", students: 1800 },
    { id: 5, name: "Sunrise Engineering College", city: "Pune", tag: "Engineering", image: "\u{1F3ED}", students: 2200 },
    { id: 6, name: "City Science College", city: "Chennai", tag: "Science", image: "\u{1F52C}", students: 1500 },
    { id: 7, name: "Tech Valley Institute", city: "Hyderabad", tag: "Technology", image: "\u{1F4BB}", students: 2800 },
    { id: 8, name: "Modern Arts College", city: "Jaipur", tag: "Arts", image: "\u{1F3AD}", students: 1200 },
    { id: 9, name: "Future Tech University", city: "Ahmedabad", tag: "University", image: "\u{1F680}", students: 4200 },
    { id: 10, name: "Prime Engineering College", city: "Coimbatore", tag: "Engineering", image: "\u{2699}\u{FE0F}", students: 2000 },
    { id: 11, name: "CMR College of Engineering & Technology", city: "Hyderabad", tag: "Engineering", image: "\u{1F527}", students: 3000 },
    { id: 12, name: "CMR Institute of Technology", city: "Bengaluru", tag: "Technology", image: "\u{1F4F1}", students: 2800 },
    { id: 13, name: "CMR University", city: "Bengaluru", tag: "University", image: "\u{1F3EB}", students: 4500 },
    { id: 14, name: "CMR College of Arts, Science & Commerce", city: "Hyderabad", tag: "Arts & Science", image: "\u{1F4DA}", students: 1600 },
    { id: 15, name: "CMR Engineering College", city: "Hyderabad", tag: "Engineering", image: "\u{1F6E0}\u{FE0F}", students: 2400 },
    { id: 16, name: "Presidency University", city: "Bengaluru", tag: "University", image: "\u{1F3AF}", students: 3800 },
    { id: 17, name: "RV College of Engineering", city: "Bengaluru", tag: "Engineering", image: "\u{1F529}", students: 3200 },
    { id: 18, name: "BMS College of Engineering", city: "Bengaluru", tag: "Engineering", image: "\u{26A1}", students: 3100 },
    { id: 19, name: "Dayananda Sagar University", city: "Bengaluru", tag: "University", image: "\u{1F31F}", students: 4000 },
    { id: 20, name: "PES University", city: "Bengaluru", tag: "University", image: "\u{1F393}", students: 4300 },
];

const baseMenus = {
    breakfast: [
        { id: "b1", name: "Idli Sambar", emoji: "\u{1F35B}", price: 20, veg: true, category: "Breakfast", desc: "Soft steamed idlis with piping hot sambar", popular: true, prepTime: "5 mins" },
        { id: "b2", name: "Masala Dosa", emoji: "\u{1F95E}", price: 35, veg: true, category: "Breakfast", desc: "Crispy dosa stuffed with spiced potato filling", popular: true, prepTime: "7 mins" },
        { id: "b3", name: "Poha", emoji: "\u{1F35A}", price: 20, veg: true, category: "Breakfast", desc: "Light flattened rice with onions and peanuts", popular: false, prepTime: "4 mins" },
        { id: "b4", name: "Upma", emoji: "\u{1F963}", price: 20, veg: true, category: "Breakfast", desc: "Savory semolina porridge with vegetables", popular: false, prepTime: "4 mins" },
    ],
    snacks: [
        { id: "s1", name: "Veg Burger", emoji: "\u{1F354}", price: 50, veg: true, category: "Snacks", desc: "Crispy patty with fresh veggies in a soft bun", popular: true, prepTime: "8 mins" },
        { id: "s2", name: "Sandwich", emoji: "\u{1F96A}", price: 40, veg: true, category: "Snacks", desc: "Grilled sandwich with cheese and vegetables", popular: true, prepTime: "5 mins" },
        { id: "s3", name: "Pizza Slice", emoji: "\u{1F355}", price: 90, veg: true, category: "Snacks", desc: "Loaded veggie pizza with mozzarella", popular: true, prepTime: "10 mins" },
        { id: "s4", name: "French Fries", emoji: "\u{1F35F}", price: 60, veg: true, category: "Snacks", desc: "Golden crispy fries with dipping sauce", popular: true, prepTime: "6 mins" },
        { id: "s5", name: "Pav Bhaji", emoji: "\u{1F372}", price: 45, veg: true, category: "Snacks", desc: "Spiced mashed vegetables with buttered buns", popular: true, prepTime: "8 mins" },
        { id: "s6", name: "Chicken Roll", emoji: "\u{1F32F}", price: 70, veg: false, category: "Snacks", desc: "Spiced chicken wrapped in a flaky paratha", popular: true, prepTime: "7 mins" },
    ],
    meals: [
        { id: "m1", name: "Veg Thali", emoji: "\u{1F371}", price: 80, veg: true, category: "Meals", desc: "Full meal: roti, rice, dal, sabzi, salad", popular: true, prepTime: "12 mins" },
        { id: "m2", name: "Chicken Biryani", emoji: "\u{1F35B}", price: 120, veg: false, category: "Meals", desc: "Aromatic basmati rice with tender chicken", popular: true, prepTime: "15 mins" },
        { id: "m3", name: "Paneer Butter Masala", emoji: "\u{1F9C0}", price: 90, veg: true, category: "Meals", desc: "Rich tomato gravy with soft paneer cubes", popular: true, prepTime: "10 mins" },
        { id: "m4", name: "Dal Fry + Rice", emoji: "\u{1F37D}\u{FE0F}", price: 60, veg: true, category: "Meals", desc: "Tempered yellow dal with steamed rice", popular: false, prepTime: "8 mins" },
    ],
    drinks: [
        { id: "d1", name: "Tea", emoji: "\u{2615}", price: 10, veg: true, category: "Drinks", desc: "Hot masala chai brewed fresh", popular: true, prepTime: "3 mins" },
        { id: "d2", name: "Coffee", emoji: "\u{2615}", price: 20, veg: true, category: "Drinks", desc: "Filter coffee or instant, your choice", popular: true, prepTime: "3 mins" },
        { id: "d3", name: "Cold Drink", emoji: "\u{1F964}", price: 30, veg: true, category: "Drinks", desc: "Chilled Coke, Pepsi, or Sprite", popular: true, prepTime: "1 min" },
        { id: "d4", name: "Lassi", emoji: "\u{1F95B}", price: 40, veg: true, category: "Drinks", desc: "Thick sweet or salted buttermilk", popular: true, prepTime: "4 mins" },
    ]
};

// ===== STATE MANAGEMENT =====
let state = {
    cart: {},
    selectedCollege: null,
    currentMenu: [],
    orders: JSON.parse(localStorage.getItem('campusbite_orders')) || [],
    orderCounter: 1020,
    isAdmin: false,
    cartOpen: false,
    activeFilter: 'All',
    theme: 'dark',
    wishlist: JSON.parse(localStorage.getItem('campusbite_wishlist')) || [],
    liveUsers: 127,
    searchTerm: ''
};

// ===== UTILITY FUNCTIONS =====
const formatPrice = (price) => `₹${price}`;

const showToast = (msg, type = 'success') => {
    const t = document.getElementById('toast');
    t.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${msg}`;
    t.className = `toast ${type}`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
};

const getMenuForCollege = (collegeId) => {
    const all = [...baseMenus.breakfast, ...baseMenus.snacks, ...baseMenus.meals, ...baseMenus.drinks];
    const modifier = [0,2,-5,5,0,-2,3,-3,4,-1,2,-2,3,0,-3,1,4,-1,2,-4][collegeId-1] || 0;
    return all.map(item => ({ 
        ...item, 
        price: Math.max(5, item.price + modifier), 
        id: `${item.id}_${collegeId}` 
    }));
};

const statusEmoji = (s) => {
    return {
        'Preparing': '⏳',
        'Ready': '✅',
        'Delivered': '\u{1F4E6}'
    }[s] || '';
};

const mapServerStatus = (status) => {
    if (status === 'Placed') return ORDER_STATUS.PREPARING;
    if (status === ORDER_STATUS.READY) return ORDER_STATUS.READY;
    if (status === ORDER_STATUS.DELIVERED) return ORDER_STATUS.DELIVERED;
    return ORDER_STATUS.PREPARING;
};

function normalizeOrder(raw, fallback = {}) {
    const rawItems = Array.isArray(raw.items) ? raw.items : [];
    const normalizedItems = rawItems.map(entry => {
        if (entry.item && typeof entry.qty === 'number') {
            return entry;
        }

        return {
            qty: Number(entry.qty) || 1,
            item: {
                id: entry.itemId || entry.id || `srv-${Math.random().toString(36).slice(2, 8)}`,
                name: entry.name || 'Item',
                emoji: entry.emoji || '🍽️',
                price: Number(entry.price) || 0
            }
        };
    });

    const orderId = raw.orderId || raw.id || raw.orderNumber || fallback.id || `local-${Date.now()}`;

    return {
        id: String(orderId),
        orderNumber: raw.orderNumber || String(orderId),
        college: raw.college || fallback.college || 'Campus Canteen',
        items: normalizedItems,
        subtotal: Number(raw.subtotal) || 0,
        deliveryFee: Number(raw.deliveryFee) || 0,
        total: Number(raw.total) || Number(raw.totalAmount) || 0,
        status: mapServerStatus(raw.status),
        time: raw.time || raw.createdAt || new Date().toISOString(),
        estimatedTime: raw.estimatedTime || '15-20 mins',
        qrPayload: raw.qrPayload || null,
        qrCodeDataUrl: raw.qrCodeDataUrl || null
    };
}

async function fetchOrdersFromServer(limit = 50) {
    const response = await fetch(`${API_ENDPOINTS.orders}?limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }

    const orders = await response.json();
    state.orders = orders.map(order => normalizeOrder(order));
    localStorage.setItem('campusbite_orders', JSON.stringify(state.orders));
}

// ===== CONFETTI EFFECT =====
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: `hsl(${Math.random() * 60 + 20}, 100%, 50%)`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        requestAnimationFrame(animate);
    }
    animate();
    
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
}

// ===== LIVE COUNTER =====
setInterval(() => {
    state.liveUsers = Math.floor(Math.random() * 50) + 100;
    const counter = document.getElementById('liveUsers');
    if (counter) counter.textContent = state.liveUsers;
}, 5000);

// ===== THEME TOGGLE =====
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', state.theme);
    const icon = document.querySelector('.theme-toggle i');
    icon.className = state.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== NAVIGATION =====
function showPage(name) {
    if (name !== 'orders') {
        stopQrScanner();
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const page = document.getElementById(`page-${name}`);
    if (page) {
        page.classList.add('active');
        page.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    const btn = [...document.querySelectorAll('.nav-btn')].find(b => 
        b.textContent.toLowerCase().includes(name.split('-')[0])
    );
    if (btn) btn.classList.add('active');
    
    if (name === 'colleges') renderColleges();
    if (name === 'orders') renderOrders();
    if (name === 'admin') renderAdmin();
    if (name === 'home') renderFeaturedItems();
}

// ===== FEATURED ITEMS =====
function renderFeaturedItems() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    const allItems = [...baseMenus.breakfast, ...baseMenus.snacks, ...baseMenus.meals, ...baseMenus.drinks];
    const featured = allItems.filter(item => item.popular).slice(0, 4);
    
    grid.innerHTML = featured.map(item => `
        <div class="menu-item" onclick="selectCollege(1)">
            <span class="item-emoji">${item.emoji}</span>
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
            <div class="item-footer">
                <span class="item-price">₹${item.price}</span>
                <span class="popular-badge"><i class="fas fa-fire"></i> Popular</span>
            </div>
        </div>
    `).join('');
}

// ===== COLLEGES PAGE FUNCTIONS =====
function renderColleges() {
    const grid = document.getElementById('collegeGrid');
    const q = document.getElementById('collegeSearch')?.value.toLowerCase() || '';
    
    const filtered = colleges.filter(c => 
        c.name.toLowerCase().includes(q) || 
        c.city.toLowerCase().includes(q) || 
        c.tag.toLowerCase().includes(q)
    );
    
    grid.innerHTML = filtered.length ? filtered.map(c => `
        <div class="college-card" onclick="selectCollege(${c.id})">
            <div class="college-badge">
                <i class="fas fa-tag"></i>
                ${c.tag}
            </div>
            <div class="college-name">${c.image} ${c.name}</div>
            <div class="college-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${c.city}</span>
                <span><i class="fas fa-utensils"></i> ${getMenuForCollege(c.id).length} items</span>
                <span><i class="fas fa-users"></i> ${c.students}+</span>
            </div>
        </div>
    `).join('') : '<div class="no-results"><i class="fas fa-search"></i> No colleges found.</div>';
}

function filterColleges() {
    renderColleges();
}

function clearSearch() {
    document.getElementById('collegeSearch').value = '';
    renderColleges();
}

function filterByTag(tag) {
    document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const searchInput = document.getElementById('collegeSearch');
    if (tag === 'all') {
        searchInput.value = '';
    } else {
        searchInput.value = tag;
    }
    renderColleges();
}

function selectCollege(id) {
    state.selectedCollege = colleges.find(c => c.id === id);
    state.currentMenu = getMenuForCollege(id);
    state.cart = {};
    state.activeFilter = 'All';
    updateCartUI();
    renderMenu();
    showPage('menu');
}

// ===== MENU PAGE FUNCTIONS =====
function renderMenu() {
    document.getElementById('menuCollegeName').innerHTML = `
        ${state.selectedCollege.image} ${state.selectedCollege.name}
    `;
    document.getElementById('menuCollegeItems').innerHTML = `
        <i class="fas fa-utensils"></i> ${state.currentMenu.length} items available
    `;
    
    const cats = ['All', ...new Set(state.currentMenu.map(i => i.category))];
    document.getElementById('filterRow').innerHTML = cats.map(c => 
        `<button class="filter-btn ${c === state.activeFilter ? 'active' : ''}" 
            onclick="setFilter('${c}')">${c}</button>`
    ).join('');
    
    filterMenu();
}

function setFilter(cat) {
    state.activeFilter = cat;
    renderMenu();
}

function filterMenu() {
    const q = document.getElementById('menuSearch')?.value?.toLowerCase() || '';
    
    const filtered = state.currentMenu.filter(i => {
        const matchCat = state.activeFilter === 'All' || i.category === state.activeFilter;
        const matchQ = i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q);
        return matchCat && matchQ;
    });
    
    document.getElementById('menuGrid').innerHTML = filtered.length ? 
        filtered.map(i => renderMenuItem(i)).join('') : 
        '<div class="no-results"><i class="fas fa-search"></i> No items found.</div>';
}

function renderMenuItem(item) {
    const inCart = state.cart[item.id];
    const isWishlisted = state.wishlist.includes(item.id);
    
    const vegHtml = item.veg
        ? `<div class="veg-tag"><div class="veg-dot"></div></div>`
        : `<div class="nonveg-tag"><div class="nonveg-dot"></div></div>`;
    
    const ctrlHtml = inCart
        ? `<div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
            <span class="qty-num">${inCart.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
           </div>`
        : `<button class="add-btn" onclick="addToCart('${item.id}')">
            <i class="fas fa-plus"></i>
          </button>`;
    
    return `<div class="menu-item" id="mi-${item.id}">
        <span class="item-emoji">${item.emoji}</span>
        ${item.popular ? '<span class="popular-badge"><i class="fas fa-fire"></i> Popular</span>' : ''}
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="item-meta">
            <span><i class="fas fa-clock"></i> ${item.prepTime}</span>
        </div>
        <div class="item-footer">
            <div style="display:flex;align-items:center;gap:8px">
                ${vegHtml}
                <span class="item-price">₹${item.price}</span>
            </div>
            ${ctrlHtml}
        </div>
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${item.id}')">
            <i class="fa${isWishlisted ? 's' : 'r'} fa-heart"></i>
        </button>
    </div>`;
}

// ===== WISHLIST FUNCTIONS =====
function toggleWishlist(itemId) {
    const index = state.wishlist.indexOf(itemId);
    if (index === -1) {
        state.wishlist.push(itemId);
        showToast('Added to wishlist ❤️');
    } else {
        state.wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    }
    localStorage.setItem('campusbite_wishlist', JSON.stringify(state.wishlist));
    filterMenu();
}

// ===== CART FUNCTIONS =====
function addToCart(itemId) {
    const item = state.currentMenu.find(i => i.id === itemId);
    if (!item) return;
    
    state.cart[itemId] = { item, qty: 1 };
    updateCartUI();
    refreshMenuCard(itemId);
    showToast(`${item.name} added to cart! \u{1F6D2}`);
    
    // Play sound effect (optional)
    playSound('add-to-cart');
}

function changeQty(itemId, delta) {
    if (!state.cart[itemId]) return;
    
    state.cart[itemId].qty += delta;
    if (state.cart[itemId].qty <= 0) {
        delete state.cart[itemId];
        showToast('Item removed from cart');
    }
    
    updateCartUI();
    refreshMenuCard(itemId);
}

function refreshMenuCard(itemId) {
    const item = state.currentMenu.find(i => i.id === itemId);
    if (!item) return;
    
    const el = document.getElementById(`mi-${itemId}`);
    if (el) el.outerHTML = renderMenuItem(item);
}

function updateCartUI() {
    const subtotal = Object.values(state.cart).reduce((s, e) => s + e.item.price * e.qty, 0);
    const deliveryFee = subtotal > 100 ? 0 : 20;
    const total = subtotal + deliveryFee;
    const count = Object.values(state.cart).reduce((s, e) => s + e.qty, 0);
    
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    document.getElementById('deliveryFee').textContent = deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`;
    document.getElementById('cartTotal').textContent = `₹${total}`;
    document.getElementById('placeOrderBtn').disabled = count === 0;
    
    const items = Object.values(state.cart);
    document.getElementById('cartItems').innerHTML = items.length ? items.map(e => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${e.item.emoji} ${e.item.name}</div>
                <div class="cart-item-price">₹${e.item.price} each</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="changeQty('${e.item.id}',-1)">−</button>
                <span>${e.qty}</span>
                <button class="qty-btn" onclick="changeQty('${e.item.id}',1)">+</button>
            </div>
        </div>
    `).join('') : `<div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
        <small>Add items from the menu</small>
    </div>`;
}

function toggleCart() {
    state.cartOpen = !state.cartOpen;
    document.getElementById('cartOverlay').classList.toggle('open', state.cartOpen);
    document.getElementById('cartPanel').classList.toggle('open', state.cartOpen);
}

// ===== ORDER FUNCTIONS =====
async function placeOrder() {
    if (Object.keys(state.cart).length === 0) return;
    
    const localOrderId = ++state.orderCounter;
    const items = Object.values(state.cart);
    const subtotal = items.reduce((s, e) => s + e.item.price * e.qty, 0);
    const deliveryFee = subtotal > 100 ? 0 : 20;
    const total = subtotal + deliveryFee;

    const payload = {
        college: state.selectedCollege?.name || 'Campus Canteen',
        items: items.map(i => ({
            itemId: i.item.id,
            name: i.item.name,
            emoji: i.item.emoji,
            price: i.item.price,
            qty: i.qty
        })),
        subtotal,
        deliveryFee,
        totalAmount: total,
        customerName: 'Student'
    };

    let order;
    try {
        const response = await fetch(API_ENDPOINTS.orders, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Failed to create order on server');
        }

        const serverOrder = await response.json();
        order = normalizeOrder(serverOrder, {
            id: String(localOrderId),
            college: payload.college
        });
    } catch (error) {
        order = {
            id: String(localOrderId),
            orderNumber: String(localOrderId),
            college: payload.college,
            items: items.map(i => ({
                ...i,
                item: { ...i.item }
            })),
            subtotal,
            deliveryFee,
            total,
            status: ORDER_STATUS.PREPARING,
            time: new Date().toISOString(),
            estimatedTime: '15-20 mins',
            qrPayload: null,
            qrCodeDataUrl: null
        };
        showToast('Order saved locally (server unavailable)', 'danger');
    }

    state.orders.unshift(order);
    localStorage.setItem('campusbite_orders', JSON.stringify(state.orders));
    
    state.cart = {};
    updateCartUI();
    toggleCart();
    showReceipt(order);
    triggerConfetti();
    playSound('order-placed');
}

function showReceipt(order) {
    const rows = order.items.map(e => 
        `<div class="r-row">
            <span>${(e.item?.emoji || e.emoji || '🍽️')} ${(e.item?.name || e.name || 'Item')} ×${e.qty}</span>
            <span>₹${(e.item?.price || e.price || 0) * e.qty}</span>
        </div>`
    ).join('');
    
    document.getElementById('modalContent').innerHTML = `
        <div class="modal-icon">\u{1F389}</div>
        <h2>Order Placed Successfully!</h2>
        <p>Your food is being prepared. Track your order in real-time.</p>
        <div class="receipt-box">
            <div class="r-row">
                <span><i class="fas fa-hashtag"></i> Order #${order.orderNumber || order.id}</span>
                <span><i class="fas fa-clock"></i> ${new Date(order.time).toLocaleTimeString()}</span>
            </div>
            <div style="margin-bottom:10px">
                <i class="fas fa-map-marker-alt"></i> ${order.college}
            </div>
            <div class="r-divider"></div>
            ${rows}
            <div class="r-row">
                <span>Delivery Fee</span>
                <span>${order.deliveryFee === 0 ? 'Free' : '₹' + order.deliveryFee}</span>
            </div>
            <div class="r-divider"></div>
            <div class="r-row" style="font-weight:700; font-size:1.1rem">
                <span>Total</span>
                <span style="color:var(--primary)">₹${order.total}</span>
            </div>
        </div>
        ${order.qrCodeDataUrl ? `
            <div class="receipt-box" style="text-align:center; margin-top:12px;">
                <div style="font-weight:700; margin-bottom:8px;"><i class="fas fa-qrcode"></i> Pickup QR</div>
                <img src="${order.qrCodeDataUrl}" alt="Order QR" style="width:190px; height:190px; border-radius:12px; background:#fff; padding:8px;" />
                <div style="color:var(--muted); margin-top:6px;">Show this QR at canteen pickup</div>
            </div>
        ` : ''}
        <div class="estimated-time">
            <i class="fas fa-clock"></i> Estimated ready time: ${order.estimatedTime}
        </div>
        <button class="btn-primary" onclick="closeModal();showPage('orders')">
            <i class="fas fa-truck"></i>
            Track My Order
        </button>
        <button class="btn-outline" style="margin-top:10px" onclick="closeModal()">
            Close
        </button>
    `;
    
    document.getElementById('modalOverlay').classList.add('open');
}

let qrScannerInstance = null;
let qrScannerRunning = false;

function toggleQrScanner() {
    const scanner = document.getElementById('qrScanner');
    const msg = document.getElementById('qrScanMessage');
    const btn = document.getElementById('qrScanBtn');
    if (qrScannerRunning) {
        stopQrScanner();
        return;
    }

    scanner.style.display = 'block';
    msg.style.display = 'none';
    btn.textContent = 'Stop Scanner';
    startQrScanner();
}

function startQrScanner() {
    if (!window.Html5Qrcode) {
        showToast('QR scanning library not loaded', 'danger');
        return;
    }

    const scannerDiv = document.getElementById('qrScanner');

    qrScannerInstance = new Html5Qrcode('qrScanner');
    const config = { fps: 10, qrbox: { width: 280, height: 280 } };

    qrScannerInstance.start(
        { facingMode: 'environment' },
        config,
        decodedText => {
            handleQrScan(decodedText);
        },
        errorMessage => {
            // optional: console.log('QR scan error', errorMessage);
        }
    ).then(() => {
        qrScannerRunning = true;
    }).catch(error => {
        showToast('Camera permission denied / no camera available', 'danger');
        qrScannerRunning = false;
        document.getElementById('qrScanBtn').textContent = 'Open Scanner';
        scannerDiv.style.display = 'none';
    });
}

function stopQrScanner() {
    if (!qrScannerInstance) {
        qrScannerRunning = false;
        document.getElementById('qrScanBtn').textContent = 'Open Scanner';
        return;
    }
    qrScannerInstance.stop().then(() => {
        qrScannerInstance.clear();
        qrScannerInstance = null;
        qrScannerRunning = false;
        document.getElementById('qrScanBtn').textContent = 'Open Scanner';
        document.getElementById('qrScanner').style.display = 'none';
    }).catch(() => {
        qrScannerRunning = false;
        document.getElementById('qrScanBtn').textContent = 'Open Scanner';
        document.getElementById('qrScanner').style.display = 'none';
    });
}

function handleQrScan(decodedText) {
    const messageEl = document.getElementById('qrScanMessage');
    let scannedOrderId = null;

    try {
        const parsed = JSON.parse(decodedText);
        scannedOrderId = parsed.orderId || parsed.orderNumber || null;
    } catch (error) {
        const match = decodedText.match(/([A-Za-z0-9-]+)/);
        scannedOrderId = match ? match[1] : null;
    }

    if (!scannedOrderId) {
        messageEl.style.display = 'block';
        messageEl.textContent = 'Invalid QR content. Could not identify order.';
        return;
    }

    const order = state.orders.find(o => String(o.id) === String(scannedOrderId) || String(o.orderNumber) === String(scannedOrderId));

    if (!order) {
        messageEl.style.display = 'block';
        messageEl.textContent = `Order ${scannedOrderId} not found.`;
        return;
    }

    if (order.status === ORDER_STATUS.DELIVERED) {
        messageEl.style.display = 'block';
        messageEl.textContent = `Order #${order.orderNumber || order.id} already delivered.`;
        return;
    }

    order.status = ORDER_STATUS.DELIVERED;
    messageEl.style.display = 'block';
    messageEl.textContent = `Order #${order.orderNumber || order.id} marked Delivered.`;
    showToast(`Order #${order.orderNumber || order.id} updated to Delivered`, 'success');
    localStorage.setItem('campusbite_orders', JSON.stringify(state.orders));
    renderOrders();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

// ===== ORDERS PAGE FUNCTIONS =====
function renderOrders() {
    // Auto-update statuses for demo
    state.orders.forEach(o => {
        const mins = (new Date() - new Date(o.time)) / 60000;
        if (mins > 5 && o.status === ORDER_STATUS.PREPARING) o.status = ORDER_STATUS.READY;
        if (mins > 10 && o.status === ORDER_STATUS.READY) o.status = ORDER_STATUS.DELIVERED;
    });
    
    const list = document.getElementById('ordersList');
    const liveTracking = document.getElementById('liveTracking');
    
    // Show live tracking for active orders
    const activeOrders = state.orders.filter(o => o.status !== ORDER_STATUS.DELIVERED);
    if (activeOrders.length > 0) {
        liveTracking.innerHTML = `
            <div class="tracking-header">
                <i class="fas fa-satellite-dish"></i>
                Live Tracking - ${activeOrders.length} Active Order${activeOrders.length > 1 ? 's' : ''}
            </div>
            ${activeOrders.map(o => `
                <div class="tracking-item">
                    <div class="tracking-info">
                        <span>Order #${o.orderNumber || o.id}</span>
                        <span class="status-badge status-${o.status.toLowerCase()}">${o.status}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${o.status === 'Preparing' ? '30%' : o.status === 'Ready' ? '70%' : '100%'}"></div>
                    </div>
                    <div class="tracking-time">
                        <i class="fas fa-clock"></i>
                        ${o.status === 'Preparing' ? 'Preparing your food...' : o.status === 'Ready' ? 'Ready for pickup!' : 'Delivered'}
                    </div>
                </div>
            `).join('')}
        `;
    } else {
        liveTracking.innerHTML = '';
    }
    
    if (!state.orders.length) {
        list.innerHTML = '<div class="no-orders"><i class="fas fa-clipboard-list"></i><p>No orders yet</p><small>Start by browsing a college menu!</small></div>';
        return;
    }
    
    list.innerHTML = state.orders.map(o => `
        <div class="order-card">
            <div class="order-card-head">
                <div>
                    <div class="order-id">
                        <i class="fas fa-hashtag"></i>
                        Order #${o.orderNumber || o.id}
                    </div>
                    <div class="order-college">
                        <i class="fas fa-map-marker-alt"></i>
                        ${o.college}
                    </div>
                </div>
                <span class="status-badge status-${o.status.toLowerCase()}">
                    ${statusEmoji(o.status)} ${o.status}
                </span>
            </div>
            <div class="order-items-list">
                ${o.items.map(e => `${(e.item?.emoji || e.emoji || '🍽️')} ${(e.item?.name || e.name || 'Item')} ×${e.qty}`).join(' · ')}
            </div>
            <div class="order-total">
                Total: ₹${o.total}
                <small style="color:var(--muted); margin-left:10px">
                    <i class="fas fa-clock"></i> ${new Date(o.time).toLocaleTimeString()}
                </small>
            </div>
            <button class="receipt-btn" onclick='showReceipt(${JSON.stringify(o).replace(/'/g, "&#39;")})'>
                <i class="fas fa-receipt"></i>
                View Receipt
            </button>
        </div>
    `).join('');
}

// ===== ADMIN FUNCTIONS =====
function adminLogin() {
    const u = document.getElementById('adminUser').value;
    const p = document.getElementById('adminPass').value;
    
    if (u === APP_CONFIG.adminCredentials.username && p === APP_CONFIG.adminCredentials.password) {
        state.isAdmin = true;
        showPage('admin');
        document.getElementById('adminErr').style.display = 'none';
        showToast('Welcome back, Admin! 🚀', 'success');
        renderAdmin(); // Refresh admin data
    } else {
        document.getElementById('adminErr').style.display = 'flex';
    }
}

function adminLogout() {
    state.isAdmin = false;
    showPage('home');
    showToast('Logged out successfully');
}

function renderAdmin() {
    if (!state.isAdmin) {
        showPage('admin-login');
        return;
    }
    
    // ===== REAL-TIME STATS =====
    const totalOrders = state.orders.length;
    const totalRevenue = state.orders.reduce((sum, o) => sum + o.total, 0);
    const avgOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
    const pendingOrders = state.orders.filter(o => o.status !== 'Delivered').length;
    
    // Today's orders
    const today = new Date().toDateString();
    const todayOrders = state.orders.filter(o => new Date(o.time).toDateString() === today).length;
    const todayRevenue = state.orders
        .filter(o => new Date(o.time).toDateString() === today)
        .reduce((sum, o) => sum + o.total, 0);
    
    // Update stats in UI
    document.getElementById('totalColleges').textContent = colleges.length;
    document.getElementById('totalItems').textContent = Object.values(baseMenus).flat().length;
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue}`;
    
    // Add new stats if elements exist (you may need to add these to HTML)
    if (document.getElementById('todayOrders')) {
        document.getElementById('todayOrders').textContent = todayOrders;
    }
    if (document.getElementById('todayRevenue')) {
        document.getElementById('todayRevenue').textContent = `₹${todayRevenue}`;
    }
    if (document.getElementById('avgOrderValue')) {
        document.getElementById('avgOrderValue').textContent = `₹${avgOrderValue}`;
    }
    if (document.getElementById('pendingOrders')) {
        document.getElementById('pendingOrders').textContent = pendingOrders;
    }
    
    // ===== COLLEGE TABLE =====
    document.getElementById('adminCollegeTable').innerHTML = colleges.map(c => {
        const collegeOrders = state.orders.filter(o => o.college === c.name).length;
        const collegeRevenue = state.orders
            .filter(o => o.college === c.name)
            .reduce((sum, o) => sum + o.total, 0);
        
        return `<tr>
            <td>${c.id}</td>
            <td>${c.image} ${c.name}</td>
            <td>${c.city}</td>
            <td>${getMenuForCollege(c.id).length}</td>
            <td>${collegeOrders}</td>
            <td>₹${collegeRevenue}</td>
            <td>
                <button class="action-btn" onclick="viewCollegeDetails(${c.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
        </tr>`;
    }).join('');
    
    // ===== COMPLETE ORDERS TABLE =====
    const recentOrders = state.orders.slice(0, 20); // Show last 20 orders
    document.getElementById('adminOrderTable').innerHTML = recentOrders.length ? 
        recentOrders.map(o => {
            // Format items for display
            const itemsList = o.items.map(e => `${e.item.emoji} ${e.item.name} (${e.qty}x)`).join(', ');
            const orderTime = new Date(o.time).toLocaleString();
            
            return `<tr>
                <td>#${o.id}</td>
                <td>
                    <div style="display:flex; flex-direction:column;">
                        <strong>${o.college}</strong>
                        <small style="color:var(--muted);">${orderTime}</small>
                    </div>
                </td>
                <td>
                    <div style="max-width:250px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" 
                         title="${itemsList}">
                        ${itemsList}
                    </div>
                </td>
                <td>₹${o.total}</td>
                <td>
                    <select class="status-select" onchange="updateOrderStatus(${o.id}, this.value)" 
                            style="background:var(--glass-bg); border:1px solid var(--glass-border); color:#fff; padding:5px; border-radius:var(--radius-sm);">
                        <option value="Preparing" ${o.status === 'Preparing' ? 'selected' : ''}>⏳ Preparing</option>
                        <option value="Ready" ${o.status === 'Ready' ? 'selected' : ''}>✅ Ready</option>
                        <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>📦 Delivered</option>
                    </select>
                </td>
                <td>
                    <button class="action-btn" onclick="viewOrderDetails(${o.id})">
                        <i class="fas fa-receipt"></i>
                    </button>
                </td>
            </tr>`;
        }).join('') : 
        '<tr><td colspan="6" style="text-align:center; padding:40px;">No orders yet</td></tr>';
    
    // ===== TOP SELLING ITEMS =====
    renderTopSellingItems();
    
    // ===== HOURLY ORDER CHART =====
    initOrderChart();
    
    // ===== COLLEGE PERFORMANCE =====
    renderCollegePerformance();
}

// ===== NEW: Update Order Status =====
function updateOrderStatus(orderId, newStatus) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('campusbite_orders', JSON.stringify(state.orders));
        renderAdmin(); // Refresh admin view
        showToast(`Order #${orderId} status updated to ${newStatus}`);
    }
}

// ===== NEW: View Order Details =====
function viewOrderDetails(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (order) {
        showReceipt(order); // Reuse existing receipt modal
    }
}

// ===== NEW: View College Details =====
function viewCollegeDetails(collegeId) {
    const college = colleges.find(c => c.id === collegeId);
    if (!college) return;
    
    const collegeOrders = state.orders.filter(o => o.college === college.name);
    const orderHistory = collegeOrders.map(o => 
        `${new Date(o.time).toLocaleDateString()}: ${o.items.length} items - ₹${o.total} (${o.status})`
    ).join('\n');
    
    showToast(`${college.name} - Total Orders: ${collegeOrders.length}`, 'info');
}

// ===== NEW: Top Selling Items =====
function renderTopSellingItems() {
    const container = document.getElementById('topItemsContainer');
    if (!container) return;
    
    // Count all ordered items
    const itemCounts = {};
    state.orders.forEach(order => {
        order.items.forEach(item => {
            const key = `${item.item.emoji} ${item.item.name}`;
            itemCounts[key] = (itemCounts[key] || 0) + item.qty;
        });
    });
    
    // Sort by quantity sold
    const topItems = Object.entries(itemCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    if (topItems.length === 0) {
        container.innerHTML = '<p style="color:var(--muted); text-align:center;">No sales data yet</p>';
        return;
    }
    
    const maxCount = Math.max(...topItems.map(item => item[1]));
    
    container.innerHTML = topItems.map(([name, count]) => `
        <div style="margin-bottom:15px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                <span>${name}</span>
                <span style="color:var(--primary); font-weight:700;">${count} sold</span>
            </div>
            <div style="height:8px; background:var(--glass-bg); border-radius:var(--radius-full); overflow:hidden;">
                <div style="height:100%; width:${(count / maxCount) * 100}%; background:var(--accent-gradient); border-radius:var(--radius-full);"></div>
            </div>
        </div>
    `).join('');
}

// ===== NEW: College Performance =====
function renderCollegePerformance() {
    const container = document.getElementById('collegePerformance');
    if (!container) return;
    
    const collegeStats = colleges.map(college => {
        const orders = state.orders.filter(o => o.college === college.name);
        const totalOrders = orders.length;
        const revenue = orders.reduce((sum, o) => sum + o.total, 0);
        return { ...college, totalOrders, revenue };
    }).sort((a, b) => b.revenue - a.revenue);
    
    container.innerHTML = collegeStats.map(c => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px; border-bottom:1px solid var(--glass-border);">
            <div>
                <span style="font-weight:600;">${c.image} ${c.name}</span>
                <small style="color:var(--muted); display:block;">${c.city}</small>
            </div>
            <div style="text-align:right;">
                <div style="color:var(--primary); font-weight:700;">₹${c.revenue}</div>
                <small style="color:var(--muted);">${c.totalOrders} orders</small>
            </div>
        </div>
    `).join('');
}

// ===== NEW: Export Orders as CSV =====
function exportOrders() {
    let csv = "Order ID,College,Items,Total,Status,Time\n";
    
    state.orders.forEach(o => {
        const items = o.items.map(e => `${e.item.name}(${e.qty})`).join('|');
        const row = `${o.id},"${o.college}","${items}",${o.total},${o.status},"${new Date(o.time).toLocaleString()}"`;
        csv += row + "\n";
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `campusbite_orders_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
}

// ===== NEW: Clear All Orders (Admin only) =====
function clearAllOrders() {
    if (confirm('Are you sure you want to delete ALL order history? This cannot be undone!')) {
        state.orders = [];
        localStorage.setItem('campusbite_orders', JSON.stringify(state.orders));
        renderAdmin();
        showToast('All orders cleared');
    }
}// ===== SOUND EFFECTS (Optional) =====
function playSound(type) {
    // You can implement actual sound here if needed
    console.log(`Playing sound: ${type}`);
}

// ===== SHARE FUNCTION =====
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: `CampusBite - ${state.selectedCollege.name}`,
            text: 'Check out this canteen menu!',
            url: window.location.href,
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
    }
}

// ===== INITIALIZATION =====
async function init() {
    // Load saved data
    if (state.orders.length) {
        const numericIds = state.orders
            .map(o => parseInt(String(o.id).replace(/\D/g, ''), 10))
            .filter(n => !Number.isNaN(n));
        if (numericIds.length) {
            state.orderCounter = Math.max(...numericIds) + 1;
        }
    }
    
    // Set up event listeners
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.cartOpen) {
            toggleCart();
        }
    });
    
    // Initialize UI
    renderFeaturedItems();
    updateCartUI();

    try {
        await fetchOrdersFromServer(100);
    } catch (error) {
        console.warn('Orders API unavailable, using local order history');
    }
    
    // Start live counter
    setInterval(() => {
        if (document.getElementById('liveUsers')) {
            state.liveUsers += Math.floor(Math.random() * 5) - 2;
            document.getElementById('liveUsers').textContent = Math.max(100, state.liveUsers);
        }
    }, 10000);
    
    showToast('Welcome to CampusBite 10X! \u{1F680}');
}

// Make functions globally available
window.showPage = showPage;
window.toggleTheme = toggleTheme;
window.filterColleges = filterColleges;
window.clearSearch = clearSearch;
window.filterByTag = filterByTag;
window.selectCollege = selectCollege;
window.setFilter = setFilter;
window.filterMenu = filterMenu;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.toggleCart = toggleCart;
window.placeOrder = placeOrder;
window.closeModal = closeModal;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.updateOrderStatus = updateOrderStatus;
window.viewOrderDetails = viewOrderDetails;
window.viewCollegeDetails = viewCollegeDetails;
window.exportOrders = exportOrders;
window.clearAllOrders = clearAllOrders;
window.showReceipt = showReceipt;
window.toggleWishlist = toggleWishlist;
window.shareMenu = shareMenu;
window.editCollege = (id) => showToast('Edit feature coming soon!');

// Start the app
document.addEventListener('DOMContentLoaded', init);







