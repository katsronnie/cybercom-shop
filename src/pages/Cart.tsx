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
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center">
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link 
            to="/products" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-gray-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl flex-shrink-0">
                    {item.image}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-primary-600 mb-2">{item.category}</p>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-primary-600">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.stock && (
                        <span className="text-sm text-green-600">
                          {item.stock} in stock
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Remove from cart"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition-colors font-bold text-gray-700"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition-colors font-bold text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Subtotal</div>
                      <div className="text-xl font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
                    💡 Add ${(100 - subtotal).toFixed(2)} more to get free shipping!
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg mb-4">
                Proceed to Checkout
              </button>
              
              <Link 
                to="/products"
                className="block text-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
