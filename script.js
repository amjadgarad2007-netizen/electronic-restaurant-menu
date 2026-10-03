// Menu Data with Real Image URLs
const menuData = [
    {
        id: 1,
        name: 'الحمص',
        description: 'حمص دافئ مع زيت الزيتون واللياز',
        price: 15,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'الفلافل',
        description: 'فلافل مقرمشة مع صلصة الطحينة',
        price: 12,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1609867528936-e1e10c9dd96a?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'ورق العنب',
        description: 'ورق عنب محشي بالأرز واللحم',
        price: 18,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1596560473506-ad8a320ef305?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'شاورما دجاج',
        description: 'شاورما دجاج مشوية مع خضار وصلصة خاصة',
        price: 25,
        category: 'main',
        image: 'https://images.unsplash.com/photo-1618164436241-92473c5a7b8f?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'شاورما لحم',
        description: 'شاورما لحم بقري مع ثوم وتوابل',
        price: 28,
        category: 'main',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        name: 'كباب ملكي',
        description: 'كباب ملكي مشوي مع أرز وسلطة',
        price: 32,
        category: 'main',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
    },
    {
        id: 7,
        name: 'ستيك',
        description: 'ستيك لحم بقري مع البطاطس المحمرة',
        price: 45,
        category: 'main',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
        id: 8,
        name: 'سمك مشوي',
        description: 'سمك طازج مشوي مع ليمون وأعشاب',
        price: 35,
        category: 'main',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
        id: 9,
        name: 'كنافة',
        description: 'كنافة بالجبن والقشطة وشيرة السكر',
        price: 15,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
        id: 10,
        name: 'بقلاوة',
        description: 'بقلاوة بالفستق والعسل',
        price: 12,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1585518419759-ebb121f26e33?w=400&h=300&fit=crop'
    },
    {
        id: 11,
        name: 'أم علي',
        description: 'أم علي بالمكسرات والحليب',
        price: 10,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1617558679461-6daf67eb83de?w=400&h=300&fit=crop'
    },
    {
        id: 12,
        name: 'شوكولاتة ساخنة',
        description: 'شوكولاتة ساخنة غنية',
        price: 8,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
        id: 13,
        name: 'عصير البرتقال',
        description: 'عصير برتقال طازج مركز',
        price: 6,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop'
    },
    {
        id: 14,
        name: 'عصير الليمون',
        description: 'عصير ليمون منعش مثلج',
        price: 5,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1570318051991-8a8fcccb0c68?w=400&h=300&fit=crop'
    },
    {
        id: 15,
        name: 'قهوة سادة',
        description: 'قهوة عربية ساخنة',
        price: 4,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=300&fit=crop'
    },
    {
        id: 16,
        name: 'مشروب الرمان',
        description: 'مشروب الرمان الطازج',
        price: 8,
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1585518419759-ebb121f26e33?w=400&h=300&fit=crop'
    }
];

// Global Variables
let cart = [];
let currentFilter = 'all';
const themeToggle = document.getElementById('themeToggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menuData);
    loadCart();
    setupThemeToggle();
    loadTheme();
});

// Theme Toggle Setup
function setupThemeToggle() {
    themeToggle.addEventListener('click', toggleTheme);
}

// Toggle Theme
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeButton(isDarkMode);
}

// Load Theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton(isDarkMode);
}

// Update Theme Button
function updateThemeButton(isDarkMode) {
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// Display Menu
function displayMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image" style="background-image: url('${item.image}')">
                <span class="menu-item-category">${getCategoryName(item.category)}</span>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
                <div class="menu-item-price">${item.price} ريال</div>
                <div class="menu-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">−</button>
                        <input type="number" class="quantity-input" id="qty-${item.id}" value="1" min="1">
                        <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${item.id})">أضف</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'appetizers': 'مقبلات',
        'main': 'أطباق رئيسية',
        'desserts': 'حلويات',
        'drinks': 'مشروبات'
    };
    return names[category] || category;
}

// Filter Menu
function filterMenu(category) {
    currentFilter = category;
    
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter items
    if (category === 'all') {
        displayMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

// Quantity Controls
function increaseQuantity(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Add to Cart
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const quantity = parseInt(document.getElementById(`qty-${itemId}`).value);

    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    showNotification();
}

// Show Notification
function showNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 300;
        animation: slideIn 0.3s ease;
        font-weight: bold;
    `;
    notification.textContent = '✓ تم الإضافة للسلة';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load Cart
function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-badge').textContent = count;
}

// Open Cart
function openCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
    displayCartItems();
}

// Close Cart
function closeCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}

// Display Cart Items
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>السلة فارغة</p>
            </div>
        `;
        document.getElementById('total-price').textContent = '0';
        return;
    }

    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ريال</div>
            </div>
            <div class="cart-item-quantity">×${item.quantity}</div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">حذف</button>
        </div>
    `).join('');

    updateTotalPrice();
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartCount();
    displayCartItems();
}

// Update Total Price
function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = total;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `
    طلب جديد:
    ${cart.map(item => `- ${item.name} × ${item.quantity}`).join('\n')}
    الإجمالي: ${total} ريال
    `;

    alert('شكراً لطلبك!\n' + message);
    cart = [];
    saveCart();
    updateCartCount();
    closeCart();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
