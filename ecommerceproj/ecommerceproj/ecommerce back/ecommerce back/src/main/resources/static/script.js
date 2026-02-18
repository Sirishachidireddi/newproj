// ==============================================
// E-commerce Website - Main JavaScript File
// ==============================================

// ========== APPLICATION STATE ==========
// ================= BACKEND CONFIG =================
const API_BASE = "http://localhost:9090";



const appState = {
    currentUser: null,
    cart: [],
    products: [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 89.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.5,
            description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
            deliveryDays: 2
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 199.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.7,
            description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
            deliveryDays: 3
        },
        {
            id: 3,
            name: "Organic Cotton T-Shirt",
            price: 24.99,
            category: "fashion",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.3,
            description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton. Available in multiple colors.",
            deliveryDays: 1
        },
        {
            id: 4,
            name: "Ceramic Coffee Mug Set",
            price: 34.99,
            category: "home",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.8,
            description: "Set of 4 beautiful ceramic mugs with ergonomic handles. Dishwasher and microwave safe.",
            deliveryDays: 2
        },
        {
            id: 5,
            name: "Professional DSLR Camera",
            price: 899.99,
            category: "electronics",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.9,
            description: "Capture stunning photos and videos with this professional-grade DSLR camera with 24MP sensor.",
            deliveryDays: 5
        },
        {
            id: 6,
            name: "Yoga Mat Premium",
            price: 39.99,
            category: "sports",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.6,
            description: "Non-slip, eco-friendly yoga mat with alignment lines. Perfect for all types of yoga practice.",
            deliveryDays: 2
        },
        {
            id: 7,
            name: "Leather Backpack",
            price: 129.99,
            category: "fashion",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.4,
            description: "Stylish and durable leather backpack with multiple compartments for laptop and accessories.",
            deliveryDays: 4
        },
        {
            id: 8,
            name: "Indoor Plant Set",
            price: 49.99,
            category: "home",
            image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.7,
            description: "Set of 3 easy-to-care indoor plants that purify air and add natural beauty to your home.",
            deliveryDays: 3
        },
        {
            id: 9,
            name: "Running Shoes",
            price: 79.99,
            category: "sports",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.5,
            description: "Lightweight running shoes with superior cushioning and breathable mesh for maximum comfort.",
            deliveryDays: 2
        },
        {
            id: 10,
            name: "Electric Kettle",
            price: 45.99,
            category: "home",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            rating: 4.2,
            description: "Fast-boiling electric kettle with automatic shut-off and 1.7L capacity. BPA-free materials.",
            deliveryDays: 1
        }
    ]
};

// ========== UTILITY FUNCTIONS ==========
// Format price to display with currency symbol
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Calculate delivery date based on days from now
function calculateDeliveryDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return `<div class="product-rating">${stars} <span>(${rating})</span></div>`;
}

// ========== LOCAL STORAGE FUNCTIONS ==========
// Save users to localStorage

// Load cart from localStorage
function loadCart() {
    if (appState.currentUser) {
        const savedCart = localStorage.getItem('ecommerceCart');
        if (savedCart) {
            const userCart = JSON.parse(savedCart);
            if (userCart.userId === appState.currentUser.email) {
                appState.cart = userCart.cart;
            }
        }
    }
    updateCartCount();
}

// Save current user to localStorage
function saveCurrentUser() {
    if (appState.currentUser) {
        localStorage.setItem('ecommerceCurrentUser', JSON.stringify(appState.currentUser));
    }
}

// Load current user from localStorage
function loadCurrentUser() {
    const savedUser = localStorage.getItem('ecommerceCurrentUser');
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        loadCart();
    }
}

// Clear current user from localStorage (logout)
function clearCurrentUser() {
    localStorage.removeItem('ecommerceCurrentUser');
    appState.currentUser = null;
    appState.cart = [];
}
// Save cart to localStorage
function saveCart() {
    if (appState.currentUser) {
        const cartData = {
            userId: appState.currentUser.email,
            cart: appState.cart
        };
        localStorage.setItem('ecommerceCart', JSON.stringify(cartData));
    }
}

// ========== AUTHENTICATION FUNCTIONS ==========
// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const user = await apiLogin(email, password);

        appState.currentUser = { email: user.email, name: user.name };
        saveCurrentUser();

        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'products.html';

    } catch (err) {
        alert("Invalid email or password.");
    }
}

// Handle signup form submission
async function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
    }

    try {
        const user = await apiSignup(name, email, password);

        appState.currentUser = { email: user.email, name: user.name };
        saveCurrentUser();

        alert(`Account created successfully! Welcome ${name}`);
        window.location.href = 'products.html';

    } catch (err) {
        alert("Signup failed: " + err.message);
    }
}

// Handle logout
function handleLogout() {
    clearCurrentUser();
    alert('You have been logged out successfully.');
    window.location.href = 'index.html';
}

// ========== CART FUNCTIONS ==========
// Add product to cart
function addToCart(productId, quantity = 1) {
    const product = appState.products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    // Check if product is already in cart
    const existingItem = appState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Update quantity if product already in cart
        existingItem.quantity += quantity;
    } else {
        // Add new product to cart
        appState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage and update UI
    saveCart();
    updateCartCount();
    
    // Show confirmation message
    alert(`${product.name} has been added to your cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

// Update product quantity in cart
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const cartItem = appState.cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Calculate cart total
function calculateCartTotal() {
    return appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart count in UI
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// Render cart items in sidebar
function renderCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsElement) return;
    
    if (appState.cart.length === 0) {
        cartItemsElement.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        if (cartTotalElement) cartTotalElement.textContent = formatPrice(0);
        return;
    }
    
    let cartItemsHTML = '';
    
    appState.cart.forEach(item => {
        cartItemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-value" value="${item.quantity}" readonly>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsElement.innerHTML = cartItemsHTML;
    
    // Update cart total
    if (cartTotalElement) {
        cartTotalElement.textContent = formatPrice(calculateCartTotal());
    }
    
    // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const cartItem = appState.cart.find(item => item.id === productId);
            if (cartItem) {
                updateCartQuantity(productId, cartItem.quantity - 1);
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const cartItem = appState.cart.find(item => item.id === productId);
            if (cartItem) {
                updateCartQuantity(productId, cartItem.quantity + 1);
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Toggle cart sidebar
function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        
        if (cartSidebar.classList.contains('open')) {
            renderCartItems();
        }
    }
}

// ========== PRODUCT FUNCTIONS ==========
// Render product listing
function renderProducts(products = appState.products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }
    
    let productsHTML = '';
    
    products.forEach(product => {
        productsHTML += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${generateStarRating(product.rating)}
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <div class="product-actions">
                        <button class="btn btn-view" data-id="${product.id}">View Details</button>
                        <button class="btn btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = productsHTML;
    
    // Add event listeners to product buttons
    document.querySelectorAll('.btn-view').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductModal(productId);
        });
    });
    
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, 1);
        });
    });
}

// Show product details in modal
function showProductModal(productId) {
    const product = appState.products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const overlay = document.getElementById('overlay');
    
    if (!product || !modal || !modalBody) return;
    
    // Create modal content
    modalBody.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-img">
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                ${generateStarRating(product.rating)}
                <p class="product-detail-price">${formatPrice(product.price)}</p>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="delivery-info">
                    <p><i class="fas fa-shipping-fast"></i> Estimated delivery: ${calculateDeliveryDate(product.deliveryDays)}</p>
                </div>
                
                <div class="product-detail-actions">
                    <button class="btn btn-primary" id="modalAddToCart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-view" id="buyNowBtn" data-id="${product.id}">
                        <i class="fas fa-bolt"></i> Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    overlay.classList.add('active');
    
    // Add event listeners to modal buttons
    document.getElementById('modalAddToCart').addEventListener('click', function() {
        addToCart(productId, 1);
        closeModal();
    });
    
    document.getElementById('buyNowBtn').addEventListener('click', function() {
        addToCart(productId, 1);
        closeModal();
        toggleCartSidebar();
    });
}

// Close modal
function closeModal() {
    const modal = document.getElementById('productModal');
    const overlay = document.getElementById('overlay');
    
    if (modal) modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// Filter products based on search and category
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    
    if (!searchInput || !categoryFilter || !sortBy) return;
    
    let filteredProducts = [...appState.products];
    
    // Filter by search term
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === selectedCategory
        );
    }
    
    // Sort products
    switch (sortBy.value) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    // Render filtered products
    renderProducts(filteredProducts);
}

// ========== PAGE INITIALIZATION ==========
// Initialize products page
function initProductsPage() {
    // Check if user is logged in
    if (!appState.currentUser) {
        alert('Please login to view products.');
        window.location.href = 'index.html';
        return;
    }
    
    // Load user's cart
    loadCart();
    
    // Render products
    renderProducts();
    
    // Set up event listeners for products page
    const cartLink = document.getElementById('cartLink');
    const closeCart = document.getElementById('closeCart');
    const closeModalBtn = document.getElementById('closeModal');
    const overlay = document.getElementById('overlay');
    const logoutBtn = document.getElementById('logoutBtn');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCartSidebar();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', toggleCartSidebar);
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeModal();
            
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('open')) {
                toggleCartSidebar();
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortBy) {
        sortBy.addEventListener('change', filterProducts);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (appState.cart.length === 0) {
                alert('Your cart is empty. Add some products before checkout.');
                return;
            }
            
            alert(`Thank you for your order! Total: ${formatPrice(calculateCartTotal())}\n\nThis is a demo site, so no real transaction will occur.`);
            
            // Clear cart after checkout
            appState.cart = [];
            saveCart();
            updateCartCount();
            renderCartItems();
            toggleCartSidebar();
        });
    }
    
    // Update welcome message with user's name
    const welcomeSection = document.querySelector('.welcome-section h1');
    if (welcomeSection && appState.currentUser) {
        welcomeSection.textContent = `Welcome to ShopEasy, ${appState.currentUser.name}!`;
    }
}

// Initialize login page
function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// Initialize signup page
function initSignupPage() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
}

// ========== MAIN INITIALIZATION ==========
// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load current user from localStorage
    loadCurrentUser();
    
    // Initialize the appropriate page based on current URL
    const currentPage = window.location.href;
    
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        initLoginPage();
    } else if (currentPage.includes('signup.html')) {
        initSignupPage();
    } else if (currentPage.includes('products.html')) {
        initProductsPage();
    }
    
    // Update cart count on all pages
    updateCartCount();
});
// ================= BACKEND API =================
async function safeFetch(url, options = {}) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        },
        ...options
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Request failed");
    }

    return response.json();
}

// USER APIs
async function apiLogin(email, password) {
    const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return await response.json();
}


async function apiSignup(name, email, password) {
    const response = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
    }

    return await response.json();
}


// PRODUCT APIs
async function apiGetProducts() {
    return await safeFetch(`${API_BASE}/api/products`);
}

// CART APIs
async function apiAddToCart(userEmail, productId, quantity) {
    return await safeFetch(`${API_BASE}/api/cart/add`, {
        method: "POST",
        body: JSON.stringify({ userEmail, productId, quantity })
    });
}

async function apiGetCart(userEmail) {
    return await safeFetch(`${API_BASE}/api/cart/${userEmail}`);
}
