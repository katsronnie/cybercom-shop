import { Link } from 'react-router-dom'

function Home() {

  // Product type icons for different sections
  const productIcons = {
    laptop: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    smartphone: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    headphone: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    watch: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gaming: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    speaker: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    tablet: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    camera: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background pattern removed for cleaner look */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-bold tracking-widest">CYBERCOM COMPUTER SOLUTIONS LTD</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Boost Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  with Expert ICT Solutions! 🌟
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Computers Sales | Hardware Repair | Software | Printers | Network Design | CCTV | Biometric Door Control | IT Infrastructure | Cloud Services | Network Security | Data Recovery & Backup | Structured Cabling | IT Support | Internet Connectivity | Access Control & Surveillance
              </p>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-cyan-400">Secure, Streamline, Succeed! 📞</p>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-3xl md:text-4xl font-bold">+256 771 248 060</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/products" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20 transition duration-1000"></div>
                <div className="relative flex items-center justify-center">
                  
                  {/* Image on top */}
                  <div className="relative w-full h-full flex items-center justify-center p--2">
                    <img 
                      src="/laps.png" 
                      alt="Gaming Controller" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Featured Deals - Updated with SVG icons */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Today's Featured Deals</h2>
              <p className="text-slate-600">Limited time offers on premium products</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 lg:mt-0">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-600">Ends in:</span>
                <div className="flex items-center gap-2">
                  {['01', '23', '45', '12'].map((time, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shadow">
                        {time}
                      </div>
                      <span className="text-xs text-slate-500 mt-1">
                        {index === 0 ? 'Days' : index === 1 ? 'Hours' : index === 2 ? 'Minutes' : 'Seconds'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-white hover:shadow-md flex items-center justify-center transition-all">
                  ←
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-white hover:shadow-md flex items-center justify-center transition-all">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <div className="relative mb-4">
                  <div className="absolute top-2 left-2 z-10">
                    <span className="inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      HOT
                    </span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-white rounded-xl mb-3 flex items-center justify-center overflow-hidden border border-slate-100">
                    <div className="text-slate-300 transform group-hover:scale-110 transition-transform duration-300">
                      {item % 3 === 0 ? productIcons.laptop : item % 3 === 1 ? productIcons.smartphone : productIcons.headphone}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {item % 3 === 0 ? 'LAPTOP' : item % 3 === 1 ? 'SMARTPHONE' : 'HEADPHONE'}
                    </span>
                    <div className="flex text-amber-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 line-clamp-2 leading-snug">
                    {item % 3 === 0 ? 'Laptop Creator 15 A10 Intel Core i7 16GB RAM' : 
                     item % 3 === 1 ? 'iPhone 15 Pro Max 256GB Titanium Black' : 
                     'Wireless Noise Cancelling Headphones Pro'}
                  </h3>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-bold text-slate-900">
                        ${item % 3 === 0 ? '1,299.99' : item % 3 === 1 ? '1,199.99' : '349.99'}
                      </span>
                      <span className="text-slate-400 text-sm line-through ml-2">
                        ${item % 3 === 0 ? '1,499.99' : item % 3 === 1 ? '1,399.99' : '449.99'}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Super Cheap Price Banner with SVG icons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large banner */}
            <div className="md:col-span-1 bg-gradient-to-br from-gray-100 to-white rounded-2xl p-8 border border-gray-200">
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">GET REWARDED</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Super Cheap Price
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Earn 20% Back in Rewards
              </p>
              <Link to="/products" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-colors">
                Shop Now →
              </Link>
            </div>

            {/* Product cards with SVG icons */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  name: 'Charge Power Bank 10000mAh', 
                  price: 79.99, 
                  oldPrice: 99.99,
                  icon: (
                    <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                { 
                  name: 'Controller for Nintendo Switch OLED', 
                  price: 89.99, 
                  oldPrice: 119.99, 
                  badge: '-30% Off',
                  icon: productIcons.gaming
                }
              ].map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  {product.badge && (
                    <span className="inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                      {product.badge}
                    </span>
                  )}
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-white rounded-lg mb-4 flex items-center justify-center border border-gray-100">
                    {product.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2">{product.name}</h3>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-blue-600 font-bold text-lg">${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending This Week with SVG icons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending This Week</h2>
            <div className="flex flex-wrap items-center gap-2 mt-4 lg:mt-0">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Last Sale
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold transition-colors">
                Deals
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold transition-colors">
                Featured
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-semibold transition-colors">
                New Products
              </button>
              <Link to="/products" className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
                View All
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
                <div className="relative mb-4">
                  {item % 2 === 0 && (
                    <span className="absolute top-2 left-2 z-10 inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      HOT
                    </span>
                  )}
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-white rounded-lg mb-3 flex items-center justify-center border border-gray-100">
                    <div className="text-slate-300">
                      {item % 4 === 0 ? productIcons.smartphone : 
                       item % 4 === 1 ? productIcons.laptop : 
                       item % 4 === 2 ? productIcons.headphone : 
                       productIcons.watch}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {item % 4 === 0 ? 'SMARTPHONE' : 
                       item % 4 === 1 ? 'LAPTOP' : 
                       item % 4 === 2 ? 'HEADPHONE' : 
                       'SMARTWATCH'}
                    </span>
                    <div className="flex text-amber-400 text-sm">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3 line-clamp-2 leading-snug">
                    {item % 4 === 0 ? 'iPhone 15 Pro 128GB Titanium' :
                     item % 4 === 1 ? 'MacBook Pro 14" M3 Pro 18GB 512GB' :
                     item % 4 === 2 ? 'Wireless Over-Ear Headphones Pro' :
                     'Apple Watch Series 9 GPS 45mm'}
                  </h3>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-bold text-slate-900">
                        ${item % 4 === 0 ? '999.99' : 
                          item % 4 === 1 ? '1,999.99' : 
                          item % 4 === 2 ? '299.99' : 
                          '399.99'}
                      </span>
                      <span className="text-slate-400 text-sm line-through ml-2">
                        ${item % 4 === 0 ? '1,199.99' : 
                          item % 4 === 1 ? '2,299.99' : 
                          item % 4 === 2 ? '399.99' : 
                          '499.99'}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Updated with SVG icons */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="text-xs font-medium tracking-wider">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Premium Tech
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Experience
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl">
                We are your trusted source for IT products and technology accessories. 
                From computers and laptops to peripherals and components, we offer 
                quality products at competitive prices with exceptional service.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Authentic Products</h4>
                      <p className="text-slate-400">100% genuine from authorized distributors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Best Prices</h4>
                      <p className="text-slate-400">Competitive pricing with regular deals</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Expert Support</h4>
                      <p className="text-slate-400">Knowledgeable staff ready to help</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
                      <p className="text-slate-400">Free shipping on orders above $199</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-8">Special Offers</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-cyan-300">Limited Time</span>
                      <span className="text-xs px-3 py-1 bg-cyan-500/20 rounded-full">HOT</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">Up to 30% Off</div>
                    <p className="text-slate-300">on selected laptops and accessories</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-purple-300">New Arrivals</span>
                      <span className="text-xs px-3 py-1 bg-purple-500/20 rounded-full">NEW</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">Latest Tech</div>
                    <p className="text-slate-300">Check out our newest products collection</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home