import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Location from './pages/Location'


export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  stock: number
}

export interface CartItem extends Product {
  quantity: number
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* Top Bar - More Professional */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-sm border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10">
              <div className="flex items-center space-x-6 text-slate-300">
                <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find a Store
                </span>
                <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Order Tracking
                </span>
                <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  Blog
                </span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">USD $</span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Header - Professional Redesign */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    CYBERCOM
                  </span>
                  <span className="text-xs text-slate-600 font-medium tracking-wide">
                    Computer Solutions Ltd
                  </span>
                </div>
              </Link>
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-1">
                {['Home', 'Shop', 'Services', 'Pages', 'Blog', 'Contact'].map((item, index) => (
                  <Link 
                    key={index}
                    to={item === 'Home' ? '/' : item === 'Shop' ? '/products' : item === 'Services' ? '/services' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="px-4 py-2 text-slate-700 hover:text-cyan-600 font-medium transition-all duration-300 rounded-lg hover:bg-slate-50"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Right Side */}
              <div className="flex items-center space-x-5">
                {/* Phone Number */}
                <div className="hidden lg:flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Call Us Now</span>
                    <span className="font-semibold text-slate-900">+256 771 248 060</span>
                  </div>
                </div>

                {/* Wishlist */}
                <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors group">
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-cyan-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    0
                  </span>
                </button>

                {/* Cart */}
                <Link to="/cart" className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors group">
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-sm">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>

                {/* Account */}
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-medium text-slate-900">My Account</span>
                    <span className="text-xs text-slate-500">$0.00</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar - Professional Design */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center gap-4">
                {/* Department Button */}
                <Link to="/products" className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] group">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  <span className="font-medium">Shop By Department</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Search Input */}
                <div className="flex-1 flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
                  <input 
                    type="text" 
                    placeholder="Search for Products..."
                    className="flex-1 px-6 py-3.5 outline-none text-slate-700 placeholder-slate-400"
                  />
                  <div className="relative">
                    <select className="appearance-none px-6 py-3.5 border-l border-slate-200 outline-none text-slate-700 bg-white pr-10 cursor-pointer hover:bg-slate-50 transition-colors">
                      <option>All Categories</option>
                      <option>Laptops</option>
                      <option>Smartphones</option>
                      <option>Headphones</option>
                      <option>Accessories</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <button className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3.5 transition-all duration-300 min-w-[120px]">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>

                {/* Quick Links */}
                <div className="hidden xl:flex items-center space-x-6 text-slate-300 text-sm">
                  <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Recently Viewed
                  </button>
                  <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Order Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
            
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              } 
            />
            <Route path="/location" element={<Location />} />
            <Route path="/categories" element={<Products addToCart={addToCart} />} />
            <Route path="/pages" element={<Products addToCart={addToCart} />} />
            <Route path="/blog" element={<Location />} />
            <Route path="/contact" element={<Location />} />
          </Routes>
        </main>

        {/* Footer - Professional Design */}
        <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      CYBERCOM
                    </span>
                    <p className="text-sm text-slate-400">Computer Solutions Ltd</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 max-w-xl text-lg leading-relaxed">
                  Your trusted partner for comprehensive ICT solutions. 
                  We deliver expert IT services, hardware, network infrastructure, 
                  and security solutions to boost your business.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {['Products', 'Services', 'About Us', 'Contact', 'FAQs', 'Terms'].map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={`/${link.toLowerCase().replace(' ', '-')}`}
                        className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                      >
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89-3.85a2 2 0 012.22 0L21 8m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 4.5 9-4.5" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p>info@cybercom.co.ug</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p>+256 771 248 060</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Address</p>
                      <p>Kampala, Uganda</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Subscribe to Newsletter</h4>
                  <p className="text-slate-400">Get the latest updates on new products and upcoming sales</p>
                </div>
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors min-w-[300px]"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
              <p>&copy; 2026 CYBERCOM Computer Solutions Ltd. All rights reserved. Expert ICT Solutions.</p>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App