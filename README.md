 # 🍽️ ServeSync - Restaurant Management SaaS

<div align="center">

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/ratul1918/ServeSync)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)](https://expressjs.com) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com)
 
*A modern, feature-rich SaaS platform for restaurant management and operations*
 
[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## 🎯 Overview
 
ServeSync is a comprehensive restaurant management SaaS application built with modern web technologies. It provides an intuitive interface for managing restaurant operations, staff, inventory, and customer relationships efficiently.

The project is structured as a monorepo with a distinct **Frontend** (React + Vite) and **Backend** (Node.js + Express).

### ✨ Key Highlights
- 🚀 **Lightning Fast** - Built with Vite for instant development experience
- 🎨 **Beautiful UI** - Modern design with extensive component library
- 🔐 **Secure Auth** - Custom authentication system
- 📊 **Real-time Insights** - Interactive dashboards with charts and analytics
- 🎭 **Dark Mode** - Seamless theme switching
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **Type Safe** - Full TypeScript support

---

## 🚀 Features

### 📈 Dashboard & Analytics
- **Real-time Dashboard** - Monitor key metrics at a glance
- **Interactive Charts** - Visualize data with Recharts integration
- **Performance Tracking** - Track restaurant operations and statistics

### 🎯 Core Management
- **Authentication** - Secure Sign Up and Sign In flows
- **Multi-page Application** - Home, Features, Pricing, About, Resources
- **Responsive Navigation** - Intuitive navbar with mobile support
- **Theme Support** - Light and dark mode toggle

### 🛠️ Advanced UI Components
- **50+ UI Components** - Pre-built, customizable components
- **Form Management** - React Hook Form integration
- **Data Display** - Tables, carousels, and scrollable areas

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.3.1, Vite 6.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Radix UI, Lucide React
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js 
- **Framework**: Express.js
- **Middleware**: CORS
- **Dev Tools**: Nodemon

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ratul1918/ServeSync.git
   cd ServeSync
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   # Server starts on http://localhost:5000
   ```

3. **Setup Frontend** (Open a new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   # App runs on http://localhost:5173
   ```

---

## 📁 Project Structure

```
ServeSync/
├── backend/                # Node.js + Express Backend
│   ├── server.js           # Main server file with Auth API
│   ├── package.json
│   └── .env
│
├── frontend/               # React + Vite Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages (SignUp, SignIn, Home...)
│   │   ├── contexts/       # Global state (Theme)
│   │   ├── App.tsx         # Main entry component
│   │   └── routes.ts       # Route definitions
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
└── README.md               # Project documentation
```

---

## 📖 Pages Overview

| Page | Purpose | Features |
|------|---------|----------|
| **Home** | Landing page | Hero section, features overview |
| **Sign Up** | Registration | Create new account (connected to backend) |
| **Sign In** | Login | User authentication (connected to backend) |
| **Dashboard** | Analytics | (Coming Soon) |
| **Pricing** | Plans | Subscription information |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary.

---

<div align="center">

### Built by Rafiur Rahman

**ServeSync** - Transforming Restaurant Management

[⬆ Back to top](#-servesync---restaurant-management-saas)

</div>
