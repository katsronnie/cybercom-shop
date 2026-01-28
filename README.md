# YMShop - IT Products E-Commerce Store

A modern, responsive e-commerce application built with React, TypeScript, and Vite for selling IT products and accessories online.

## Features

- 🛍️ **Product Catalog** - Browse IT products by category
- 🛒 **Shopping Cart** - Add products, adjust quantities, and manage orders
- 📍 **Store Location** - Find our physical store with detailed contact information
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎨 **Modern UI** - Clean, professional interface with dark/light mode support

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **CSS3** - Custom styling with responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd boaz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
boaz/
├── src/
│   ├── pages/
│   │   ├── Home.tsx        # Homepage with shop overview
│   │   ├── Products.tsx    # Product catalog with filtering
│   │   ├── Cart.tsx        # Shopping cart management
│   │   └── Location.tsx    # Store location and contact info
│   ├── App.tsx             # Main app component with routing
│   ├── App.css             # Global app styles
│   ├── main.tsx            # Application entry point
│   └── index.css           # Base styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Features Overview

### Home Page
- Welcome banner with shop description
- Feature highlights (Computers, Mobile Devices, Accessories, Components)
- About section

### Products Page
- Grid layout of IT products
- Category filtering
- Add to cart functionality
- Real-time cart notifications

### Shopping Cart
- View all cart items
- Adjust quantities
- Remove items
- Order summary with total
- Checkout button

### Location Page
- Store address and contact details
- Business hours
- Transportation information
- Map placeholder for directions

## Customization

### Adding Products

Edit the `SAMPLE_PRODUCTS` array in [`src/pages/Products.tsx`](src/pages/Products.tsx) to add or modify products:

```typescript
{
  id: 9,
  name: 'Your Product',
  category: 'Category',
  price: 99.99,
  image: '🎯',
  description: 'Product description'
}
```

### Updating Store Information

Modify [`src/pages/Location.tsx`](src/pages/Location.tsx) to update:
- Store address
- Business hours
- Contact information
- Directions

### Styling

- Global styles: [`src/index.css`](src/index.css)
- App layout: [`src/App.css`](src/App.css)
- Page-specific styles: `src/pages/*.css`

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to YMShop.

## Contact

For questions or support, visit our store or contact us at info@ymshop.com
