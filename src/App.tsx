import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, HelpCircle, Mail, Clock, MapPin, ChevronUp, Search, FileText, Users, Shield } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumber = "18445401219";
  const formattedPhone = "1-844-540-1219";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CustomerCare Pro</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#support" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Support</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="#help" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Help</a>
              <a href={`tel:${phoneNumber}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Call Now
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <a href={`tel:${phoneNumber}`} className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white pt-24 pb-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Customer Support
            <span className="block text-teal-300">When You Need It</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get instant help from our dedicated support team. Available 24/7 to resolve your issues quickly and efficiently.
          </p>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-teal-300 mr-3" />
              <span className="text-lg font-medium">Call Us Now</span>
            </div>
            <a href={`tel:${phoneNumber}`} className="block text-3xl md:text-4xl font-bold hover:text-teal-300 transition-colors">
              {formattedPhone}
            </a>
            <p className="text-blue-100 mt-2">Available 24/7 - No Wait Time</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phoneNumber}`} className="bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors font-semibold text-lg inline-flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Support
            </a>
            <a href="#contact" className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-opacity-30 transition-colors font-semibold text-lg inline-flex items-center justify-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Live Chat
            </a>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support solutions designed to resolve your issues quickly and efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our expert support team. Available 24/7 for immediate assistance.</p>
              <a href={`tel:${phoneNumber}`} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Call {formattedPhone}
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help through our live chat system. Quick responses guaranteed.</p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us detailed inquiries and receive comprehensive responses within 24 hours.</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">What are your support hours?</h4>
                <p className="text-gray-600">We provide 24/7 customer support, 365 days a year. Our team is always available to help you.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How quickly can I expect a response?</h4>
                <p className="text-gray-600">Phone calls are answered immediately. Live chat responses within 2 minutes. Email responses within 24 hours.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Do you charge for support services?</h4>
                <p className="text-gray-600">Basic support is completely free. Premium support packages are available for enhanced service levels.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Can you help with technical issues?</h4>
                <p className="text-gray-600">Yes! Our certified technicians can assist with setup, troubleshooting, and technical configuration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our support team. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      {formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Available 24/7, 365 days a year</p>
                    <p className="text-gray-600">No holidays, no downtime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-gray-600">Nationwide coverage</p>
                    <p className="text-gray-600">Supporting customers across all states</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions and access helpful resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Search Help</h3>
              <p className="text-gray-600 text-sm">Find specific answers quickly</p>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors cursor-pointer">
              <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with other users</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">Safety and privacy info</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Help Topics</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-1">Getting Started Guide</h4>
                  <p className="text-gray-600 text-sm">Learn the basics and set up your account</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-1">Troubleshooting Common Issues</h4>
                  <p className="text-gray-600 text-sm">Solutions to frequently encountered problems</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-1">Account Management</h4>
                  <p className="text-gray-600 text-sm">Manage your profile and preferences</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-1">Billing and Payments</h4>
                  <p className="text-gray-600 text-sm">Understanding charges and payment methods</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-1">Privacy and Security</h4>
                  <p className="text-gray-600 text-sm">Protecting your personal information</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a href={`tel:${phoneNumber}`} className="block bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
                  <Phone className="h-5 w-5 mx-auto mb-2" />
                  Call Support
                </a>
                <button className="block w-full bg-teal-600 text-white p-4 rounded-lg hover:bg-teal-700 transition-colors text-center font-semibold">
                  <MessageCircle className="h-5 w-5 mx-auto mb-2" />
                  Start Live Chat
                </button>
                <button className="block w-full bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-semibold">
                  <Mail className="h-5 w-5 mx-auto mb-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Phone className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CustomerCare Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional customer support services with 24/7 availability and expert solutions.
              </p>
              <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                {formattedPhone}
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#help" className="text-gray-400 hover:text-white transition-colors">Help</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Phone Support</span></li>
                <li><span className="text-gray-400">Live Chat</span></li>
                <li><span className="text-gray-400">Email Support</span></li>
                <li><span className="text-gray-400">Technical Help</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Available 24/7</p>
                <p>Nationwide Service</p>
                <p>No Wait Time</p>
                <p>Expert Support</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold mb-4 text-center">Disclaimer</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                This website is an independent third-party service provider and is not affiliated with, endorsed by, or sponsored by any official company or brand mentioned herein. All trademarks and service marks are the property of their respective owners. We provide general customer support information and do not claim to represent any official customer service.
              </p>
            </div>

            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2025 CustomerCare Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 font-bold text-lg animate-pulse"
        >
          <Phone className="h-6 w-6" />
          <span>Call {formattedPhone}</span>
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-40"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;