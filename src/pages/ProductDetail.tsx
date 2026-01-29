import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from '../App';

interface ProductsDetailProps {
  addToCart: (product: Product) => void;
}

// Mock product data - in real app, you'd fetch this based on product ID
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16" M3 Max',
    category: 'Laptop',
    price: 3499.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800',
    description: 'The most powerful MacBook Pro ever with the blazing-fast M3 Max chip. Featuring a stunning Liquid Retina XDR display, up to 40-core GPU, and 96GB of unified memory. Perfect for professionals, creators, and developers.',
    stock: 15
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max Titanium',
    category: 'Smartphone',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w-800',
    description: 'The ultimate iPhone experience with aerospace-grade titanium design, A17 Pro chip, and groundbreaking camera system. Featuring 5x optical zoom, Action button, and USB-C connectivity.',
    stock: 25
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    category: 'Headphones',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800',
    description: 'Industry-leading noise cancellation with Auto NC Optimizer, 30-hour battery life, and exceptional sound quality with LDAC support. Premium comfort for all-day wear.',
    stock: 42
  },
  {
    id: 4,
    name: 'LG UltraGear 4K Gaming Monitor',
    category: 'Monitor',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800',
    description: '144Hz 4K Nano IPS gaming monitor with 1ms response time, NVIDIA G-SYNC compatibility, and HDR600. Perfect for competitive gaming and content creation.',
    stock: 8
  },
  {
    id: 5,
    name: 'DJI Mavic 3 Pro Drone',
    category: 'Camera & Drone',
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800',
    description: 'Triple-camera system with 4/3 CMOS Hasselblad camera, 46-minute flight time, and omnidirectional obstacle sensing. Professional aerial photography and videography.',
    stock: 12
  }
];

function ProductDetail({ addToCart }: ProductsDetailProps) {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Space Gray');
  const [selectedStorage, setSelectedStorage] = useState('512GB');
  const [activeTab, setActiveTab] = useState('description');

  // Find product by ID - in real app, you'd fetch from API
  const product = mockProducts.find(p => p.id === parseInt(id || '1')) || mockProducts[0];

  const productImages = [
    product.image,
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800'
  ];

  const colors = [
    { name: 'Space Gray', value: 'bg-slate-700', border: 'border-slate-700' },
    { name: 'Silver', value: 'bg-slate-300', border: 'border-slate-300' },
    { name: 'Midnight Blue', value: 'bg-blue-900', border: 'border-blue-900' },
    { name: 'Starlight', value: 'bg-amber-100', border: 'border-amber-100' }
  ];

  const storageOptions = ['256GB', '512GB', '1TB', '2TB'];

  const features = [
    { icon: '🚀', title: 'Fast Delivery', desc: 'Free 2-day shipping' },
    { icon: '🔄', title: '30-Day Return', desc: 'Easy returns policy' },
    { icon: '🛡️', title: '2-Year Warranty', desc: 'Manufacturer warranty' },
    { icon: '💳', title: 'Flexible Payment', desc: 'Pay in installments' }
  ];

  const relatedProducts = mockProducts.slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    // Reset quantity after adding
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-slate-600">
            <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/products" className="hover:text-cyan-600 transition-colors">Products</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-900 font-medium">{product.category}</span>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                  <img 
                    src={productImages[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  HOT DEAL
                </span>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Category & Rating */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium">
                {product.category}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex text-amber-400 text-lg">
                    {'★'.repeat(5)}
                  </div>
                  <span className="ml-2 text-slate-600 text-sm">(4.8/5 • 128 Reviews)</span>
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  In Stock: {product.stock} units
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-slate-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-2xl text-slate-400 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20 text-red-600 rounded-full text-sm font-semibold">
                  Save 20%
                </span>
              </div>
              <p className="text-slate-600">No additional taxes. Free shipping included.</p>
            </div>

            {/* Description */}
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Color: <span className="font-bold">{selectedColor}</span></h3>
                <span className="text-sm text-slate-500">Available colors</span>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex flex-col items-center group ${selectedColor === color.name ? 'ring-2 ring-cyan-500 ring-offset-2' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-full ${color.value} border-2 ${color.border} mb-2 transition-transform group-hover:scale-110`}></div>
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Storage</h3>
                <span className="text-sm text-slate-500">Select capacity</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={`py-3 rounded-lg border-2 transition-all ${
                      selectedStorage === storage
                        ? 'border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-slate-900">Quantity:</span>
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 hover:text-slate-900"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-12 h-12 flex items-center justify-center font-semibold text-slate-900">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-600 hover:text-slate-900"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-sm text-slate-500">{product.stock} available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
                
                <button className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Buy Now
                </button>
                
                <button className="w-14 h-14 flex items-center justify-center border-2 border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600 rounded-xl transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          {/* Tab Navigation */}
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 font-medium text-sm tracking-wide border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-none">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Product Description</h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Experience unparalleled performance with our flagship {product.category.toLowerCase()}. Designed for professionals and enthusiasts alike, this device combines cutting-edge technology with elegant design.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Features
                      </h4>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>Next-generation processor for blazing-fast performance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>Stunning display with true-to-life colors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>All-day battery life for uninterrupted productivity</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>Premium build quality with attention to detail</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>Advanced cooling system for sustained performance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">✓</span>
                          <span>Comprehensive connectivity options</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        What's in the Box
                      </h4>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>{product.name}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>Premium charging cable and adapter</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>Protective case or sleeve</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>User manual and warranty information</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-600 mt-1">•</span>
                          <span>Premium cleaning cloth</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Processor</span>
                      <span className="font-semibold text-slate-900">Apple M3 Max 16-core</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Memory</span>
                      <span className="font-semibold text-slate-900">36GB Unified</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Storage</span>
                      <span className="font-semibold text-slate-900">1TB SSD</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Display</span>
                      <span className="font-semibold text-slate-900">16.2" Liquid Retina XDR</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Battery Life</span>
                      <span className="font-semibold text-slate-900">Up to 22 hours</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Weight</span>
                      <span className="font-semibold text-slate-900">4.7 lbs (2.1 kg)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Customer Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex text-amber-400 text-2xl">
                        {'★'.repeat(5)}
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-slate-900">4.8 out of 5</div>
                        <div className="text-sm text-slate-600">Based on 128 reviews</div>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                    Write a Review
                  </button>
                </div>

                {/* Review Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((review) => (
                    <div key={review} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            {review === 1 ? 'JS' : review === 2 ? 'AS' : review === 3 ? 'MJ' : 'RK'}
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-slate-900">
                              {review === 1 ? 'John Smith' : review === 2 ? 'Alex Johnson' : review === 3 ? 'Maria Garcia' : 'Robert Kim'}
                            </div>
                            <div className="text-sm text-slate-600">Verified Purchase</div>
                          </div>
                        </div>
                        <div className="flex text-amber-400">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                      <p className="text-slate-700">
                        {review === 1 ? 'Exceptional performance and build quality. The display is absolutely stunning and battery life exceeds expectations.' :
                         review === 2 ? 'Perfect for my design work. Fast, reliable, and the color accuracy is unmatched in this price range.' :
                         review === 3 ? 'Upgraded from the previous model and the improvements are noticeable. Worth every penny!' :
                         'Great customer service and the product arrived earlier than expected. Highly recommended!'}
                      </p>
                      <div className="mt-4 text-sm text-slate-500">
                        Posted {review === 1 ? '2 days ago' : review === 2 ? '1 week ago' : review === 3 ? '2 weeks ago' : '1 month ago'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">You May Also Like</h2>
              <p className="text-slate-600">Similar products you might be interested in</p>
            </div>
            <Link 
              to="/products" 
              className="flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
            >
              View All
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <Link to={`/products/${relatedProduct.id}`}>
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gradient-to-br from-slate-50 to-white rounded-xl mb-3 flex items-center justify-center overflow-hidden border border-slate-100">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {relatedProduct.category}
                      </span>
                      <div className="flex text-amber-400 text-sm">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 line-clamp-2 leading-snug">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-lg font-bold text-slate-900">
                          ${relatedProduct.price.toFixed(2)}
                        </span>
                        <span className="text-slate-400 text-sm line-through ml-2">
                          ${(relatedProduct.price * 1.2).toFixed(2)}
                        </span>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;