function Location() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: ['123 Tech Street', 'Innovation District', 'City, State 12345']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['(555) 123-4567', 'WhatsApp: (555) 123-4567']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@ymshop.com', 'support@ymshop.com']
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: [
        'Mon - Fri: 9:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: 11:00 AM - 5:00 PM'
      ]
    }
  ]

  const transportOptions = [
    { icon: '🚌', text: 'Bus lines 12, 34, 56' },
    { icon: '🚇', text: 'Tech Station (5 min walk)' },
    { icon: '🚗', text: 'Free parking available' }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Store</h1>
          <p className="text-xl text-gray-600">Come experience our products in person</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300">
            <div className="text-8xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Store Location Map</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              For detailed directions to our store, please use your preferred maps application 
              or contact us directly for assistance.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Open in Maps
            </button>
          </div>
        </div>

        {/* How to Find Us Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Find Us</h2>
          <p className="text-gray-600 mb-6">
            We're conveniently located in the heart of the Innovation District, 
            easily accessible by various means of transportation:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {transportOptions.map((option, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-3xl">{option.icon}</span>
                <span className="text-gray-700 font-medium">{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Visit Us In Person?</h2>
          <p className="text-xl text-primary-100 mb-6">
            Shop online and get your products delivered to your doorstep!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Browse Products Online
            </a>
            <a 
              href="tel:5551234567"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
