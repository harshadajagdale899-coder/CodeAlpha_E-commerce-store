# ShopEasy - Simple E-Commerce Store

ShopEasy is a simple full-stack e-commerce web application built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.

The project provides the basic functionality required for an online store, including product browsing, product details, shopping cart management, user registration and login, and order placement.

---

## Features

- View all available products
- View individual product details
- Add products to shopping cart
- Remove products from shopping cart
- User registration
- User login with JWT authentication
- Password hashing using bcrypt
- Checkout and order placement
- Order data stored in MongoDB
- Product, user, and order database management
- Responsive and simple user interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- LocalStorage

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcryptjs

### Other Tools
- Git & GitHub
- Postman
- MongoDB Atlas

---

## 📁 Project Structure


Ecommerce-Store/
│
├── Backend/
│   ├── config/
│   │
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── products.js
│   │   ├── users.js
│   │   └── orders.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── Frontend/
    ├── index.html
    ├── product.html
    ├── cart.html
    ├── login.html
    ├── register.html
    ├── checkout.html
    ├── style.css
    └── script.js
