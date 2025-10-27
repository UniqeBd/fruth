// Main JavaScript File

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeCart();
    initializeNewsletterForm();
    updateCartCount();
    initializeAuth();
});

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Cart Management
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart(cart);
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    showNotification('Product removed from cart', 'info');
}

function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart(cart);
        }
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
}

// Newsletter Form
function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            // Store newsletter subscription
            const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                showNotification('Successfully subscribed to newsletter!', 'success');
                e.target.reset();
            } else {
                showNotification('Email already subscribed!', 'info');
            }
        });
    }
}

// Authentication
function initializeAuth() {
    if (!localStorage.getItem('users')) {
        // Create default admin user
        const users = [{
            id: 1,
            username: 'admin',
            email: 'admin@fruth.com',
            password: 'admin123', // In production, this should be hashed
            role: 'admin',
            createdAt: new Date().toISOString()
        }];
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const session = {
            userId: user.id,
            email: user.email,
            username: user.username,
            role: user.role,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(session));
        return { success: true, user: session };
    }
    
    return { success: false, message: 'Invalid email or password' };
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function isLoggedIn() {
    return !!getCurrentUser();
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

function requireAuth(redirectUrl = 'login.html') {
    if (!isLoggedIn()) {
        window.location.href = redirectUrl;
        return false;
    }
    return true;
}

function requireAdmin(redirectUrl = 'admin/login.html') {
    if (!isAdmin()) {
        window.location.href = redirectUrl;
        return false;
    }
    return true;
}

function register(userData) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
        return { success: false, message: 'Email already registered' };
    }
    
    const newUser = {
        id: users.length + 1,
        ...userData,
        role: 'customer',
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, user: newUser };
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} text-xl"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Utility Functions
function formatPrice(price) {
    return `$${parseFloat(price).toFixed(2)}`;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Search Functionality
function searchProducts(query, products) {
    query = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
}

// Filter Products
function filterProducts(products, filters) {
    return products.filter(product => {
        if (filters.category && product.category !== filters.category) return false;
        if (filters.minPrice && product.price < filters.minPrice) return false;
        if (filters.maxPrice && product.price > filters.maxPrice) return false;
        if (filters.inStock && !product.inStock) return false;
        return true;
    });
}

// Sort Products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        default:
            return sorted;
    }
}

// Contact Form
function submitContactForm(formData) {
    const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    
    const message = {
        id: messages.length + 1,
        ...formData,
        date: new Date().toISOString(),
        status: 'unread'
    };
    
    messages.push(message);
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    
    return { success: true, message: 'Message sent successfully!' };
}

// Orders Management
function createOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    const order = {
        id: 'ORD-' + Date.now(),
        ...orderData,
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    return order;
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
}

function getUserOrders(userId) {
    const orders = getOrders();
    return orders.filter(order => order.userId === userId);
}

function updateOrderStatus(orderId, status) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);
    
    if (order) {
        order.status = status;
        order.updatedAt = new Date().toISOString();
        localStorage.setItem('orders', JSON.stringify(orders));
        return { success: true };
    }
    
    return { success: false, message: 'Order not found' };
}

// Export functions for use in other files
window.appFunctions = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCart,
    getCartTotal,
    clearCart,
    login,
    logout,
    register,
    getCurrentUser,
    isLoggedIn,
    isAdmin,
    requireAuth,
    requireAdmin,
    showNotification,
    formatPrice,
    formatDate,
    searchProducts,
    filterProducts,
    sortProducts,
    submitContactForm,
    createOrder,
    getOrders,
    getUserOrders,
    updateOrderStatus
};
