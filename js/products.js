// Products Data and Management

// Sample Products Data
const sampleProducts = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        description: "Comfortable and stylish cotton t-shirt perfect for everyday wear",
        price: 29.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        inStock: true,
        featured: true,
        rating: 4.5,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Gray"],
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        name: "Denim Jacket",
        description: "Timeless denim jacket with a modern fit",
        price: 89.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500",
        inStock: true,
        featured: true,
        rating: 4.8,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black"],
        createdAt: "2024-01-20"
    },
    {
        id: 3,
        name: "Summer Dress",
        description: "Elegant summer dress for any occasion",
        price: 79.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
        inStock: true,
        featured: true,
        rating: 4.7,
        sizes: ["S", "M", "L"],
        colors: ["Floral", "White", "Blue"],
        createdAt: "2024-02-01"
    },
    {
        id: 4,
        name: "Leather Handbag",
        description: "Premium leather handbag with spacious interior",
        price: 149.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        inStock: true,
        featured: true,
        rating: 4.9,
        sizes: ["One Size"],
        colors: ["Brown", "Black", "Tan"],
        createdAt: "2024-02-10"
    },
    {
        id: 5,
        name: "Men's Casual Shirt",
        description: "Smart casual shirt for the modern gentleman",
        price: 59.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
        inStock: true,
        featured: true,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Blue", "White", "Black"],
        createdAt: "2024-02-15"
    },
    {
        id: 6,
        name: "Skinny Jeans",
        description: "Trendy skinny jeans with perfect stretch",
        price: 69.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        inStock: true,
        featured: false,
        rating: 4.4,
        sizes: ["26", "28", "30", "32", "34"],
        colors: ["Blue", "Black", "Gray"],
        createdAt: "2024-02-20"
    },
    {
        id: 7,
        name: "Blazer Jacket",
        description: "Professional blazer for business occasions",
        price: 129.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
        inStock: true,
        featured: false,
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Black", "Gray"],
        createdAt: "2024-03-01"
    },
    {
        id: 8,
        name: "Sneakers",
        description: "Comfortable sneakers for all-day wear",
        price: 99.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
        inStock: true,
        featured: false,
        rating: 4.8,
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["White", "Black", "Red"],
        createdAt: "2024-03-05"
    },
    {
        id: 9,
        name: "Knit Sweater",
        description: "Cozy knit sweater for cold days",
        price: 74.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
        inStock: true,
        featured: false,
        rating: 4.5,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Beige", "Gray", "Black"],
        createdAt: "2024-03-10"
    },
    {
        id: 10,
        name: "Sunglasses",
        description: "Stylish sunglasses with UV protection",
        price: 39.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        inStock: true,
        featured: false,
        rating: 4.3,
        sizes: ["One Size"],
        colors: ["Black", "Brown", "Gold"],
        createdAt: "2024-03-15"
    },
    {
        id: 11,
        name: "Polo Shirt",
        description: "Classic polo shirt for casual elegance",
        price: 44.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
        inStock: true,
        featured: false,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "White", "Red"],
        createdAt: "2024-03-20"
    },
    {
        id: 12,
        name: "Maxi Skirt",
        description: "Flowing maxi skirt for bohemian style",
        price: 54.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
        inStock: true,
        featured: false,
        rating: 4.4,
        sizes: ["S", "M", "L"],
        colors: ["Floral", "Black", "Navy"],
        createdAt: "2024-03-25"
    }
];

// Initialize products in localStorage
function initializeProducts() {
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(sampleProducts));
    }
}

// Get all products
function getAllProducts() {
    return JSON.parse(localStorage.getItem('products') || '[]');
}

// Get featured products
function getFeaturedProducts() {
    const products = getAllProducts();
    return products.filter(p => p.featured).slice(0, 4);
}

// Get product by ID
function getProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === parseInt(id));
}

// Add new product (Admin)
function addProduct(product) {
    const products = getAllProducts();
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...product,
        createdAt: new Date().toISOString()
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    return newProduct;
}

// Update product (Admin)
function updateProduct(id, updates) {
    const products = getAllProducts();
    const index = products.findIndex(p => p.id === parseInt(id));
    
    if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        localStorage.setItem('products', JSON.stringify(products));
        return products[index];
    }
    return null;
}

// Delete product (Admin)
function deleteProduct(id) {
    const products = getAllProducts();
    const filtered = products.filter(p => p.id !== parseInt(id));
    localStorage.setItem('products', JSON.stringify(filtered));
    return filtered.length < products.length;
}

// Render product card
function renderProductCard(product) {
    return `
        <div class="product-card fade-in" onclick="window.location.href='product-detail.html?id=${product.id}'">
            <div class="overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span class="text-gray-600 text-sm ml-1">(${product.rating})</span>
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-2">${product.description.substring(0, 60)}...</p>
                <div class="flex items-center justify-between">
                    <span class="product-price">${window.appFunctions.formatPrice(product.price)}</span>
                    <button onclick="event.stopPropagation(); window.appFunctions.addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})" class="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (container) {
        const featured = getFeaturedProducts();
        container.innerHTML = featured.map(renderProductCard).join('');
    }
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    loadFeaturedProducts();
});

// Export functions
window.productFunctions = {
    getAllProducts,
    getFeaturedProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    renderProductCard
};
