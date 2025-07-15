import React, { useState } from 'react';
import { Download, Cloud, Menu, X, Github, Star } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">TaraBox Downloader</h1>
              <p className="text-blue-200 text-xs">Fast & Free Downloads</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">How it Works</a>
            <a href="#faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com" 
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <Star className="h-4 w-4" />
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Start Download</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">How it Works</a>
              <a href="#faq" className="text-blue-100 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <a 
                  href="https://github.com" 
                  className="flex items-center justify-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium">
                  Start Download
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}