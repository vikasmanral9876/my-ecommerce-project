# 🛒 My E-Commerce Project

A modern full-stack e-commerce web application built using React, Vite, Node.js, Express.js, and Sequelize.

The project provides a complete shopping experience, including product browsing, cart management, delivery selection, checkout, and order tracking.

## 🌐 Live Demo

[View Live Website](https://my-ecommerce-project-y969.onrender.com)

## 📸 Project Overview

This e-commerce application is designed with a clean and responsive user interface. It includes both a frontend client and a backend REST API that manages products, cart items, delivery options, orders, and payment summaries.

## ✨ Features

- 🛍️ Browse available products
- 🔍 Search and explore products
- 🛒 Add products to cart
- ➕ Increase or decrease product quantities
- 🗑️ Remove products from cart
- 🚚 Select delivery options
- 💰 Calculate order and payment summaries
- 📦 Place orders
- 📋 View previous orders
- 🚗 Track packages
- 📱 Responsive design
- 🔗 RESTful backend API
- 🗄️ SQLite database integration

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Axios
- Day.js
- React Router
- CSS3

### Backend

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- CORS

### Development & Deployment

- Git
- GitHub
- VS Code
- Render

## 📂 Project Structure

```text
my-ecommerce-project/
│
├── ecommerce-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── ecommerce-backend/
│   ├── models/
│   ├── routes/
│   ├── defaultData/
│   ├── images/
│   ├── dist/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/vikasmanral9876/my-ecommerce-project.git
cd my-ecommerce-project
```

### Install Frontend Dependencies

```bash
cd ecommerce-frontend
npm install
```

### Install Backend Dependencies

Open another terminal and run:

```bash
cd ecommerce-backend
npm install
```

## ▶️ Run Locally

### Start the Backend

Inside the `ecommerce-backend` folder:

```bash
npm start
```

Backend runs on:

```text
http://localhost:3000
```

### Start the Frontend

Open another terminal:

```bash
cd ecommerce-frontend
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## 🔌 API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Fetch all products |
| GET | `/api/delivery-options` | Fetch delivery options |
| GET | `/api/cart-items` | Fetch cart items |
| POST | `/api/cart-items` | Add product to cart |
| PUT | `/api/cart-items/:id` | Update cart item |
| DELETE | `/api/cart-items/:id` | Remove cart item |
| GET | `/api/orders` | Fetch orders |
| POST | `/api/orders` | Create a new order |
| GET | `/api/payment-summary` | Fetch payment summary |
| POST | `/api/reset` | Reset application data |

## 🚀 Deployment

The application is deployed on Render.

The frontend is built using Vite and generated inside the backend's `dist` folder. Express serves the production frontend along with the backend API from a single deployed service.

### Production Build Command

```bash
cd ecommerce-frontend && npm install && npm run build && cd ../ecommerce-backend && npm install
```

### Production Start Command

```bash
cd ecommerce-backend && npm start
```

## 🧠 What I Learned

Through this project, I gained practical experience in:

- Building reusable React components
- Managing application state
- Creating REST APIs with Express.js
- Connecting frontend and backend applications
- Using Sequelize ORM with SQLite
- Handling cart and order workflows
- Working with Vite production builds
- Deploying a full-stack application on Render
- Managing source code using Git and GitHub

## 👨‍💻 Author

**Vikas Manral**

Electronics and Communication Engineering Graduate | Full Stack Developer

**Technologies:** React.js • TypeScript • Node.js • Express.js • Sequelize • SQLite • Git • GitHub

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub!
