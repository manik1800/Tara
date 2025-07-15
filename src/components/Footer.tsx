import React from 'react';
import { Heart, Github, Twitter, Mail, Cloud, Shield, Zap, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">TaraBox Downloader</h3>
                <p className="text-blue-200">Fast, Free & Secure Downloads</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              The most trusted and reliable TaraBox downloader service. Download files from TaraBox, TeraBox, and other cloud storage platforms instantly and securely.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-200">
                <Github className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-200">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-200">
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#download" className="text-blue-100 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">DMCA</a></li>
            </ul>
          </div>
        </div>

        {/* Features Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-blue-100 text-sm">100% Secure</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-blue-100 text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-blue-400" />
              <span className="text-blue-100 text-sm">No Registration</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-blue-100 text-sm">Always Free</span>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-blue-100 text-sm flex items-center space-x-2 mb-4 md:mb-0">
            <span>© 2024 TaraBox Downloader. Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>for the community</span>
          </p>
          <div className="flex items-center space-x-6 text-blue-200 text-sm">
            <span>🌟 Trusted by 1M+ users</span>
            <span>⚡ 99.9% uptime</span>
            <span>🔒 SSL secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}