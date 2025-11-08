import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeService, setActiveService] = useState(0);
  const [logoScale, setLogoScale] = useState(1);

  // Rotate through services for heartbeat effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 4);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Heartbeat animation for logo
  useEffect(() => {
    const heartbeatInterval = setInterval(() => {
      setLogoScale(1.1);
      setTimeout(() => setLogoScale(1), 200);
    }, 1000);
    
    return () => clearInterval(heartbeatInterval);
  }, []);

  const services = [
    {
      id: "naija-pay",
      name: "Naija Pay",
      icon: "₦",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-600/20",
      borderColor: "border-purple-400/40",
      description: "Enterprise-grade payment infrastructure powering Nigeria's digital economy",
      features: [
        "Multi-channel payment processing",
        "Real-time fraud detection",
        "Cross-border transactions",
        "API-first architecture",
        "PCI-DSS compliance",
        "Smart routing & analytics"
      ]
    },
    {
      id: "naija-connect",
      name: "Naija Connect",
      icon: "▶",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
      borderColor: "border-blue-400/40",
      description: "Next-generation social platform empowering creators through short-form video monetization",
      features: [
        "AI-powered content discovery",
        "Creator monetization ecosystem",
        "Real-time video processing",
        "Brand partnership marketplace",
        "Live streaming features",
        "Content moderation tools"
      ]
    },
    {
      id: "naija-market",
      name: "Naija Market",
      icon: "🛒",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
      borderColor: "border-green-400/40",
      description: "End-to-end commerce platform connecting Nigerian businesses with global markets",
      features: [
        "AI-driven personalization",
        "Omnichannel retail management",
        "Supply chain optimization",
        "Integrated logistics tracking",
        "Customer behavior analytics",
        "AR product visualization"
      ]
    },
    {
      id: "naija-data",
      name: "Naija Data Cloud",
      icon: "⚡",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      borderColor: "border-orange-400/40",
      description: "Scalable data infrastructure enabling real-time insights and AI-driven decision making",
      features: [
        "Distributed database architecture",
        "Real-time data streaming",
        "Advanced encryption compliance",
        "ML model deployment",
        "Automated backup & recovery",
        "Data governance tools"
      ]
    }
  ];

  return (
    <div className="App">
      {/* Hero Section with Glass Morphism */}
      <section className="min-h-screen bg-gradient-to-br from-green-400/20 via-blue-400/20 to-purple-400/20 relative overflow-hidden backdrop-blur-3xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Company Logo Container with Heartbeat Animation - Covering Entire Space */}
            <div 
              className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl mb-8 shadow-2xl overflow-hidden transition-transform duration-300"
              style={{ transform: `scale(${logoScale})` }}
            >
              <img 
                src="/Digital Nigeria 5.png" 
                alt="Digital Nigeria Logo" 
                className="w-full h-full object-cover p-1"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Nigeria
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-medium">
              Africa's Premier Super App Ecosystem
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Revolutionizing digital experiences through integrated financial services, 
              social connectivity, commerce, and data intelligence.
            </p>
          </div>

          {/* Services Grid with Heartbeat Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeService === index ? 'scale-105' : 'scale-100'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Glass Morphism Card */}
                <div className={`${service.bgColor} backdrop-blur-xl rounded-3xl p-8 border ${service.borderColor} shadow-2xl relative overflow-hidden transition-all duration-500 ${
                  activeService === index ? 'ring-4 ring-white/30' : 'ring-2 ring-white/10'
                }`}>
                  
                  {/* Animated Background Pulse */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                    activeService === index ? 'opacity-10' : ''
                  }`}></div>
                  
                  {/* Service Header with Heartbeat Animation */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div 
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg transition-all duration-300 ${
                          activeService === index ? 'animate-heartbeat' : 'group-hover:scale-110'
                        }`}
                      >
                        <span className="text-white font-bold text-2xl">
                          {service.icon}
                        </span>
                      </div>
                      <div>
                        <h2 className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent transition-all duration-300 ${
                          activeService === index ? 'scale-105' : ''
                        }`}>
                          {service.name}
                        </h2>
                        <div className={`w-12 h-1 bg-gradient-to-r ${service.color} rounded-full mt-2 transition-all duration-300 ${
                          activeService === index ? 'w-20' : 'group-hover:w-16'
                        }`}></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-gray-600 transition-all duration-300 hover:text-gray-800 hover:translate-x-2"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 transition-all duration-300 ${
                            activeService === index ? 'animate-pulse' : ''
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`mt-6 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      activeService === index ? 'ring-4 ring-white/30' : ''
                    }`}>
                      Explore {service.name}
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${service.color} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 ${
                    activeService === index ? 'animate-ping' : ''
                  }`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br ${service.color} rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 ${
                    activeService === index ? 'animate-ping' : ''
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up">
            <button className="bg-white/20 backdrop-blur-lg text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 shadow-2xl hover:bg-white/30 hover:scale-105 transition-all duration-300">
              Join the Digital Revolution
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Transforming Nigeria's digital landscape, one innovation at a time
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
