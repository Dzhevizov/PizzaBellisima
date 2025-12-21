Pizza Bellissima – React.js SPA Project  
Single Page Application for online food ordering, built with React, Context API, and SoftUni Practice Server.

Overview
Pizza Bellissima is a fully functional e-commerce style web application for ordering food online.  
The project demonstrates modern React development practices, including component-based architecture, Context API state management, client-side routing, authentication, protected routes, CRUD operations, and dynamic UI updates.

This project is created as part of the **React.js Retake Project Assignment – SoftUni**.

---

Features

Public Part
- Home page  
- Product catalog (pizza, pasta, risotto, desserts, drinks)  
- Product details page  
- Login & Register pages  
- 404 & 403 pages  
- Navigation with cart indicator  

Private Part (Logged-in Users)
- Add items to cart  
- Update quantities, remove items  
- Create orders  
- View personal orders   
- Dynamic discounts (including promotional pizza discount before 31.12.2025)

Admin Area
- Add new products  
- Edit existing products  
- Delete products  
- View daily orders  
- Protected admin routes  

---

Technologies Used

Front-end
- **React.js**
- **React Router**
- **Context API** (Auth, Cart, Products, Orders)
- **Custom Hooks** (useRequest)
- **TailwindCSS** for styling
- **HeadlessUI** for modals

Back-end (Provided)
- **SoftUni Practice Server** (REST API)


---

## ✅ Functionality Breakdown

### ✔ Authentication
- Register (full user profile)
- Login
- Logout
- Role-based access (client/admin)
- Route guards for:
  - private routes
  - admin routes
  - guest-only routes

### ✔ CRUD Operations
**Products**
- Create (admin)
- Read (catalog, details)
- Update (admin)
- Delete (admin)

**Orders**
- Create (client)
- Read (client & admin)
- Update (automatic status simulation)

### ✔ Dynamic Pages
- Catalog (dynamic by category)
- Product details (dynamic by ID)
- Edit product (dynamic by ID)
- My orders (dynamic by user)
- Daily orders (dynamic by date)

---

## ✅ React Concepts Demonstrated

- ✅ React Hooks (useState, useEffect, useContext)
- ✅ Context API (global state management)
- ✅ Stateless & Stateful components
- ✅ Bound forms (controlled inputs)
- ✅ Synthetic events
- ✅ Component lifecycle (mount, update, unmount via useEffect)
- ✅ Client-side routing with parameters
- ✅ Error handling & validation
- ✅ External styling (TailwindCSS)

---

## ✅ Bonus Features
- ✅ Dynamic promotional discounts (20% extra for pizzas before 31.12.2025)
- ✅ Admin dashboard
- ✅ Modern UI with modals and animations
- ✅ 404 & 403 pages

---

## ✅ How to Run the Project

### 1. Install dependencies
npm install

### 2. Start the development server
npm run dev

### 3. Start SoftUni Practice Server (if needed)
node server.js
