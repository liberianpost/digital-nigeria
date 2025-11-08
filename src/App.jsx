import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center text-white mb-16 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              🇳🇬 Digital Nigeria
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Africa's Premier Super App Ecosystem
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto text-green-50">
              Revolutionizing digital experiences through integrated financial services, 
              social connectivity, commerce, and data intelligence.
            </p>
          </div>

          {/* Super App Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Naija Pay - Payment Gateway */}
            <div className="super-app-section">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">₦</span>
                </div>
                <h2 className="text-3xl font-bold text-green-800">Naija Pay</h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Enterprise-grade payment infrastructure powering Nigeria's digital economy.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Multi-channel payment processing (Web, Mobile, POS, USSD)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Real-time fraud detection & risk management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Cross-border transactions & currency conversion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  API-first architecture for seamless integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  PCI-DSS compliant secure payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Smart routing & payment optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Comprehensive analytics & reporting dashboard
                </li>
              </ul>
            </div>

            {/* Naija Connect - Social Media */}
            <div className="super-app-section">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">▶</span>
                </div>
                <h2 className="text-3xl font-bold text-blue-800">Naija Connect</h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Next-generation social platform empowering creators through short-form video monetization.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI-powered content discovery & recommendation engine
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Creator monetization through ads, tips & subscriptions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Real-time video processing & effects studio
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Community engagement tools & analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Brand partnership marketplace
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Live streaming with interactive features
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Content moderation & safety protocols
                </li>
              </ul>
            </div>

            {/* Ecommerce Platform */}
            <div className="super-app-section">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">🛒</span>
                </div>
                <h2 className="text-3xl font-bold text-purple-800">Naija Market</h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                End-to-end commerce platform connecting Nigerian businesses with global markets.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Unified marketplace with AI-driven personalization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Omnichannel retail management system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Smart inventory & supply chain optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Integrated logistics & delivery tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Customer behavior analytics & insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Multi-vendor management & commission system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Augmented reality product visualization
                </li>
              </ul>
            </div>

            {/* Centralized Database Management */}
            <div className="super-app-section">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h2 className="text-3xl font-bold text-orange-800">Naija Data Cloud</h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Scalable data infrastructure enabling real-time insights and AI-driven decision making.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Distributed database architecture with global replication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Real-time data streaming & processing pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Advanced encryption & data sovereignty compliance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Machine learning model deployment & management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Automated backup, recovery & disaster management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  GraphQL & REST API gateways for data access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Data governance & quality management tools
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl">
              Join the Digital Revolution
            </button>
            <p className="text-green-200 mt-4">
              Transforming Nigeria's digital landscape, one innovation at a time
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
