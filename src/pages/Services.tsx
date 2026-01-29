import { Link } from 'react-router-dom'
import { useState } from 'react'

function Services() {
  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    {
      id: 1,
      category: 'repair',
      title: 'Hardware Repair & Maintenance',
      description: 'Professional repair services for laptops, desktops, servers, and peripherals. We diagnose and fix hardware issues with precision.',
      price: 'Starting at $99',
      duration: '1-3 hours',
      features: ['Diagnostic & Assessment', 'Component Replacement', 'Data Recovery', 'Cleaning & Maintenance'],
      popular: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      category: 'network',
      title: 'Network Design & Implementation',
      description: 'Custom network solutions for businesses and homes. We design, implement, and optimize secure and scalable networks.',
      price: 'Custom Pricing',
      duration: '2-5 days',
      features: ['Network Planning', 'Router/AP Setup', 'Security Configuration', 'Performance Optimization'],
      popular: false,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 3,
      category: 'data',
      title: 'Data Recovery & Backup Solutions',
      description: 'Professional data recovery services for hard drives, SSDs, and RAID arrays. Complete backup strategy implementation.',
      price: 'Starting at $149',
      duration: '1-7 days',
      features: ['Data Recovery', 'Backup Setup', 'Cloud Migration', 'Disaster Recovery'],
      popular: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 4,
      category: 'security',
      title: 'Cybersecurity & Threat Protection',
      description: 'Comprehensive security solutions including firewall setup, antivirus deployment, and security audits.',
      price: 'Starting at $199',
      duration: 'Ongoing',
      features: ['Security Audit', 'Firewall Setup', 'Malware Removal', 'Employee Training'],
      popular: false,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 5,
      category: 'cloud',
      title: 'Cloud Services & Migration',
      description: 'Seamless migration to cloud platforms and managed cloud services for optimal performance and cost.',
      price: 'Starting at $299',
      duration: '3-10 days',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Cost Optimization', '24/7 Monitoring'],
      popular: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      )
    },
    {
      id: 6,
      category: 'consulting',
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and consulting to align technology with your business goals and growth objectives.',
      price: '$150/hour',
      duration: 'Flexible',
      features: ['IT Assessment', 'Technology Roadmap', 'Vendor Selection', 'Digital Transformation'],
      popular: false,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 7,
      category: 'setup',
      title: 'System Setup & Configuration',
      description: 'Complete computer setup, software installation, and system configuration for optimal performance.',
      price: 'Starting at $79',
      duration: '2-4 hours',
      features: ['OS Installation', 'Software Setup', 'Driver Updates', 'System Optimization'],
      popular: false,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 8,
      category: 'support',
      title: 'Managed IT Support',
      description: '24/7 remote and on-site IT support with guaranteed response times and comprehensive service agreements.',
      price: 'From $99/month',
      duration: 'Ongoing',
      features: ['24/7 Support', 'Remote Assistance', 'On-site Visits', 'Proactive Monitoring'],
      popular: true,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'repair', name: 'Hardware Repair' },
    { id: 'network', name: 'Networking' },
    { id: 'data', name: 'Data Services' },
    { id: 'security', name: 'Security' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'setup', name: 'Setup & Config' },
    { id: 'support', name: 'IT Support' }
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  const stats = [
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '2,500+', label: 'Projects Completed' },
    { value: '24/7', label: 'Support Available' },
    { value: '1hr', label: 'Avg Response Time' }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your needs and assess your current setup',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'Detailed service plan with transparent pricing',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Expert execution with minimal disruption',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing maintenance and support',
      icon: '🛠️'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium text-white tracking-wider">PROFESSIONAL SERVICES</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert IT Services &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Technical Support
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional technology solutions for businesses and individuals. 
              From hardware repair to network design, we provide comprehensive 
              IT services with guaranteed quality and fast response times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Request a Service Quote
              </button>
              
              <button className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Service Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive IT solutions tailored to your specific needs and budget
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gradient-to-br from-slate-100 to-white border border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className={`group relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-gradient-to-br from-white to-cyan-50 border-cyan-200 shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-cyan-200 hover:shadow-lg'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-2xl w-fit ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600'
                      : 'bg-gradient-to-br from-slate-100 to-white text-slate-600'
                  }`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{service.price}</div>
                      <div className="text-sm text-slate-500">{service.duration}</div>
                    </div>
                    
                    <button className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      Learn More
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium text-white tracking-wider">HOW IT WORKS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A streamlined process ensuring quality service delivery and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300"></div>
                )}
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full translate-y-48 -translate-x-48"></div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how our services 
                can help your business achieve its technology goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule a Call
                </button>
                
                <button className="inline-flex items-center justify-center gap-3 bg-white border border-cyan-500 text-cyan-600 font-semibold px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-3.85a2 2 0 012.22 0L21 8m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 4.5 9-4.5" />
                  </svg>
                  Email Inquiry
                </button>
              </div>
              
              <p className="mt-8 text-sm text-slate-600">
                Response guaranteed within 1 business hour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our services and processes
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What's included in your repair services?",
                answer: "Our repair services include comprehensive diagnostics, component replacement, software troubleshooting, and thorough testing. We provide a 90-day warranty on all repairs."
              },
              {
                question: "How quickly can you respond to service requests?",
                answer: "We guarantee a response within 1 hour for emergency requests and 4 hours for standard requests. On-site service is available within 24 hours in most metropolitan areas."
              },
              {
                question: "Do you offer remote support?",
                answer: "Yes, we provide 24/7 remote support for most issues. Our technicians can securely access your systems to diagnose and fix problems without the need for on-site visits."
              },
              {
                question: "What are your service rates?",
                answer: "We offer transparent pricing with no hidden fees. Rates vary by service type and complexity. Contact us for a free assessment and detailed quote based on your specific needs."
              },
              {
                question: "Do you provide service warranties?",
                answer: "Yes, all our services come with a warranty period ranging from 30 to 180 days depending on the service. Hardware repairs include a 90-day warranty on replaced components."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-200 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+256771248060"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +256 771 248 060
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-3.85a2 2 0 012.22 0L21 8m-18 0v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 4.5 9-4.5" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services