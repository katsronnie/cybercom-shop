import { Link } from 'react-router-dom'
import type { CartItem } from '../App'

interface CartProps {
  cart: CartItem[]
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
}

function Cart({ cart, removeFromCart, updateQuantity }: CartProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-white border border-slate-200 flex items-center justify-center">
              <svg className="w-20 h-20 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Your Cart is Empty</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Looks like you haven't added any products to your cart yet.
            Start exploring our premium collection.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium mb-4">
            SHOPPING CART
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Shopping Cart
            <span className="block text-2xl text-slate-600 font-normal mt-2">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </span>
          </h1>
          <p className="text-slate-600 text-lg">Review your items and proceed to checkout</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <div 
                key={item.id} 
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Product Image */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative w-32 h-32 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="inline-flex items-center px-2 py-1 rounded-md bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-3">
                          {item.category}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">
                          {item.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-slate-900">
                            ${item.price.toFixed(2)}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.stock > 10 
                              ? 'bg-green-500/10 text-green-600 border border-green-500/20' 
                              : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                          }`}>
                            {item.stock > 10 ? 'In Stock' : `${item.stock} Left`}
                          </span>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex flex-col items-end gap-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors group/remove"
                          title="Remove from cart"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          <span className="text-sm opacity-0 group-hover/remove:opacity-100 transition-opacity">Remove</span>
                        </button>
                        
                        {/* Quantity Control */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-100 to-white border border-slate-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-bold text-slate-700"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-12 text-center text-lg font-bold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-slate-100 to-white border border-slate-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-bold text-slate-700"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Item Subtotal */}
                        <div className="text-right">
                          <div className="text-sm text-slate-500 mb-1">Item Total</div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
                  <p className="text-sm text-slate-600">Complete your purchase</p>
                </div>
              </div>
              
              {/* Summary Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600 bg-green-500/10 px-3 py-1 rounded-full text-sm">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shipping > 0 && subtotal < 100 && (
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m0 0h-1m1 0v4m4-10a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Free shipping available!</p>
                        <p className="text-xs text-slate-600">
                          Add ${(100 - subtotal).toFixed(2)} more to get free shipping
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Tax (8%)</span>
                  <span className="font-semibold text-slate-900">${tax.toFixed(2)}</span>
                </div>
                
                <div className="pt-4 border-t-2 border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-slate-900">Total</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Proceed to Checkout
              </button>
              
              {/* Payment Methods */}
              <div className="mb-8">
                <p className="text-sm text-slate-600 mb-3">We accept</p>
                <div className="flex gap-2">
                  <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                    <span className="font-bold text-slate-700 text-xs">VISA</span>
                  </div>
                  <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                    <span className="font-bold text-slate-700 text-xs">MC</span>
                  </div>
                  <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                    <span className="font-bold text-slate-700 text-xs">PP</span>
                  </div>
                  <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 6v12l10-6z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Continue Shopping */}
              <Link 
                to="/products"
                className="flex items-center justify-center gap-2 text-slate-600 hover:text-cyan-600 font-medium transition-colors group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* Security Guarantee */}
            <div className="mt-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Secure Checkout</h4>
                  <p className="text-sm text-slate-600">
                    Your payment information is encrypted and secure. We don't share your details with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State Actions */}
        {cart.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need more items?</h3>
                <p className="text-slate-600">Check out our featured collections</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/products?category=laptops"
                  className="px-6 py-3 bg-gradient-to-r from-slate-100 to-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                >
                  Laptops & Computers
                </Link>
                <Link 
                  to="/products?category=smartphones"
                  className="px-6 py-3 bg-gradient-to-r from-slate-100 to-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                >
                  Smartphones & Tablets
                </Link>
                <Link 
                  to="/products?category=accessories"
                  className="px-6 py-3 bg-gradient-to-r from-slate-100 to-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart