# Fruth.com - Professional Clothing E-Commerce Website

A complete, professional e-commerce website for a clothing store with a full-featured admin panel.

## Features

### Customer Features
- **Homepage**: Hero section, featured products, categories, services, testimonials
- **Products Page**: Advanced filtering, sorting, search functionality
- **Shopping Cart**: Add/remove items, quantity management
- **User Authentication**: Login and signup functionality
- **Contact Form**: Customer inquiries and messages
- **Responsive Design**: Works on all devices

### Admin Panel Features
- **Dashboard**: Overview with statistics and analytics
- **Product Management**: Add, edit, delete products
- **Order Management**: View and update order status
- **Customer Management**: View registered customers
- **Messages**: View and manage contact form submissions
- **Secure Login**: Admin authentication required

## Technology Stack
- **HTML5**: Semantic markup
- **Tailwind CSS**: Modern, responsive styling
- **JavaScript**: Vanilla JS for functionality
- **LocalStorage**: Data persistence

## File Structure
```
website 2/
├── index.html              # Homepage
├── products.html           # Products listing
├── cart.html              # Shopping cart
├── login.html             # User login
├── signup.html            # User registration
├── contact.html           # Contact form
├── about.html             # About page
├── categories.html        # Categories page
├── styles.css             # Custom styles
├── js/
│   ├── main.js           # Main JavaScript
│   └── products.js       # Product management
└── admin/
    ├── login.html        # Admin login
    ├── dashboard.html    # Admin dashboard
    ├── products-manage.html  # Product CRUD
    ├── orders.html       # Order management
    ├── customers.html    # Customer list
    └── messages.html     # Contact messages
```

## Getting Started

1. Open `index.html` in your web browser
2. Browse products and add to cart
3. Create an account or login

### Admin Access
- URL: Open `admin/login.html`
- Default credentials:
  - Email: admin@fruth.com
  - Password: admin123

## Features in Detail

### Shopping Experience
- Browse products by category
- Search and filter products
- Sort by price, name, newest
- Add products to cart
- Adjust quantities
- Responsive design for mobile

### Admin Panel
- View sales statistics
- Manage product inventory
- Track orders and update status
- View customer information
- Respond to customer messages
- Full CRUD operations for products

## Data Storage
All data is stored in browser's LocalStorage:
- Products catalog
- User accounts
- Shopping cart
- Orders
- Contact messages
- Newsletter subscriptions

## Customization
- Edit `styles.css` for custom styling
- Modify product data in `js/products.js`
- Update images and content in HTML files
- Customize colors using Tailwind classes

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes
- This is a demo application using LocalStorage
- For production, implement backend API
- Add payment gateway integration
- Implement proper authentication and security
- Use a real database for data persistence

## Demo Accounts
**Admin Account:**
- Email: admin@fruth.com
- Password: admin123

**Customer Account:**
- Register through signup page

## Support
For issues or questions, use the contact form on the website.

---
© 2024 Fruth.com. All rights reserved.
