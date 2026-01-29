import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../App'

interface ProductsProps {
  addToCart: (product: Product) => void
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Gaming Laptop RTX 4070',
    category: 'Laptops',
    price: 1299.99,
    image: '🎮',
    description: 'High-performance gaming laptop with RTX 4070 graphics',
    stock: 15
  },
  {
    id: 2,
    name: 'Wireless Gaming Mouse',
    category: 'Accessories',
    price: 79.99,
    image: '🖱️',
    description: 'Ergonomic wireless mouse with precision tracking',
    stock: 50
  },
  {
    id: 3,
    name: 'RGB Mechanical Keyboard',
    category: 'Accessories',
    price: 129.99,
    image: '⌨️',
    description: 'RGB mechanical keyboard with custom switches',
    stock: 32
  },
  {
    id: 4,
    name: 'USB-C Hub 7-in-1',
    category: 'Accessories',
    price: 49.99,
    image: '🔌',
    description: '7-in-1 USB-C hub with multiple ports',
    stock: 120
  },
  {
    id: 5,
    name: '27" 4K Monitor',
    category: 'Monitors',
    price: 399.99,
    image: '🖥️',
    description: '4K UHD monitor with HDR support',
    stock: 28
  },
  {
    id: 6,
    name: 'External SSD 2TB',
    category: 'Storage',
    price: 189.99,
    image: '💾',
    description: 'Fast portable SSD with USB 3.2 Gen 2',
    stock: 45
  },
  {
    id: 7,
    name: 'HD Webcam 1080p',
    category: 'Accessories',
    price: 89.99,
    image: '📹',
    description: '1080p webcam with auto-focus',
    stock: 60
  },
  {
    id: 8,
    name: 'Noise-Canceling Headset',
    category: 'Audio',
    price: 199.99,
    image: '🎧',
    description: 'Premium wireless headset with ANC',
    stock: 38
  },
  {
    id: 9,
    name: 'Graphics Card RTX 4060',
    category: 'Components',
    price: 349.99,
    image: '🎨',
    description: 'NVIDIA RTX 4060 graphics card',
    stock: 12
  },
  {
    id: 10,
    name: 'Portable Speaker',
    category: 'Audio',
    price: 59.99,
    image: '🔊',
    description: 'Bluetooth portable speaker with bass boost',
    stock: 75
  },
  {
    id: 11,
    name: 'Laptop Stand Aluminum',
    category: 'Accessories',
    price: 39.99,
    image: '📐',
    description: 'Adjustable aluminum laptop stand',
    stock: 95
  },
  {
    id: 12,
    name: 'Wireless Charger Pad',
    category: 'Accessories',
    price: 29.99,
    image: '🔋',
    description: 'Fast wireless charging pad',
    stock: 150
  }
]

function Products({ addToCart }: ProductsProps) {
  const [filter, setFilter] = useState<string>('All')
  const [notification, setNotification] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.category)))]

  const filteredProducts = SAMPLE_PRODUCTS.filter(product => {
    const matchesCategory = filter === 'All' || product.category === filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setNotification(`${product.name} added to cart!`)
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">Browse our extensive collection of IT products</p>
        </div>
        
        {/* Notification */}
        {notification && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            {notification}
          </div>
        )}
        
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <Link to={`/products/${product.id}`} className="block p-6">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                
                <div className="mb-2">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.stock > 0 ? (
                      <span className="text-green-600">✓ In Stock ({product.stock})</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </div>
                </div>
              </Link>
              
              <div className="p-6 pt-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product);
                  }}
                  disabled={product.stock === 0}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    product.stock > 0
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
