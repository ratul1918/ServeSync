# 🍽️ ServeSync - Restaurant Management SaaS

<div align="center">

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/ratul1918/ServeSync)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com)

*A modern, feature-rich SaaS platform for restaurant management and operations*

[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## 🎯 Overview

ServeSync is a comprehensive restaurant management SaaS application built with modern web technologies. It provides an intuitive interface for managing restaurant operations, staff, inventory, and customer relationships efficiently.

### ✨ Key Highlights
- 🚀 **Lightning Fast** - Built with Vite for instant development experience
- 🎨 **Beautiful UI** - Modern design with extensive component library
- 📊 **Real-time Insights** - Interactive dashboards with charts and analytics
- 🎭 **Dark Mode** - Seamless theme switching with Next Themes
- ♿ **Accessible** - Built with Radix UI for accessibility standards
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **Type Safe** - Full TypeScript support

---

## 🚀 Features

### 📈 Dashboard & Analytics
- **Real-time Dashboard** - Monitor key metrics at a glance
- **Interactive Charts** - Visualize data with Recharts integration
- **Performance Tracking** - Track restaurant operations and statistics

### 🎯 Core Management
- **Multi-page Application** - Home, Features, Pricing, About, Resources, and Sign-in pages
- **Responsive Navigation** - Intuitive navbar with mobile support
- **Theme Support** - Light and dark mode toggle
- **Feature Showcase** - Comprehensive features and how-it-works sections

### 🛠️ Advanced UI Components
- **50+ UI Components** - Pre-built, customizable components
- **Form Management** - React Hook Form integration
- **Modal & Dialog System** - Alert dialogs, drawers, and popovers
- **Data Display** - Tables, carousels, and scrollable areas
- **Input Controls** - Comprehensive form controls and inputs

### 🎨 Customization
- **Tailwind CSS** - Utility-first CSS framework
- **CVA** - Class Variance Authority for component variants
- **Theme Context** - Global theme management
- **Responsive Panels** - Resizable layout components

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library with hooks support
- **TypeScript** - Static type checking
- **Vite 6.3.5** - Modern build tool with HMR
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Type-safe CSS class composition

### Forms & State
- **React Hook Form** - Efficient form handling
- **Sonner** - Toast notifications
- **Next Themes** - Theme management

### Visualization
- **Recharts** - Composable charting library
- **Embla Carousel** - Carousel component

### Developer Tools
- **Vite** - Fast build tool
- **SWC** - Fast JavaScript compiler

---

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/ratul1918/ServeSync.git
cd ServeSync

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
ServeSync/
├── src/
│   ├── components/
│   │   ├── ui/                 # 50+ reusable UI components
│   │   ├── utilities/          # Utility components (Image handling)
│   │   ├── DashboardPreview.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── AboutPage.tsx
│   │   ├── FeaturesPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   └── SignInPage.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Global theme state
│   ├── styles/
│   │   ├── globals.css
│   │   └── index.css
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── routes.ts               # Route definitions
│   └── Attributions.md
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies and scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

---

## 🎨 Component Library

### Layout Components
- Accordion, Alert Dialog, Drawer, Dialog, Popover
- Sheet, Sidebar, Scroll Area, Resizable Panels
- Navigation Menu, Menubar, Breadcrumb

### Form Components
- Input, Textarea, Select, Checkbox, Radio Group
- Toggle, Toggle Group, Switch, Label
- Input OTP, Slider, Calendar, Command

### Display Components
- Button, Badge, Card, Avatar
- Table, Carousel, Progress, Skeleton
- Tabs, Pagination, Separator, Aspect Ratio

### Feedback Components
- Alert, Toast (Sonner), Hover Card
- Tooltip, Context Menu, Dropdown Menu

---

## 🚦 Getting Started

### Development
```bash
# Start the development server with hot reload
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build
```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

### Environment Variables
Create a `.env.local` file for local environment variables:
```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

---

## 📖 Pages Overview

| Page | Purpose | Features |
|------|---------|----------|
| **Home** | Landing page | Hero section, features overview, call-to-action |
| **Features** | Feature showcase | Detailed feature descriptions with benefits |
| **Pricing** | Pricing plans | Subscription tiers and pricing information |
| **About** | Company info | Team information and company background |
| **Resources** | Knowledge base | Documentation and helpful resources |
| **Sign In** | Authentication | User login and registration |

---

## 🎯 Key Features Explained

### 🌓 Dark Mode Support
- Automatic theme detection
- Manual theme toggle
- Persistent theme preference
- Smooth transitions

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop experience
- Flexible layout system

### ♿ Accessibility
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Screen reader support

### 🔐 Type Safety
- Full TypeScript support
- Type-safe routing
- Component prop types
- Error prevention

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

## 📞 Support

For support, questions, or feedback, please contact the development team.

---

<div align="center">

### Built with ❤️ by Ratul Rahman

**ServeSync** - Transforming Restaurant Management

[⬆ Back to top](#-servesynce---restaurant-management-saas)

</div>

