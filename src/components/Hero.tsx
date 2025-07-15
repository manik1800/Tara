import React from 'react';
import { Download, Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Shield className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-sm text-white font-medium">100% Safe & Secure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Download from
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> TaraBox</span>
            <br />
            <span className="text-4xl md:text-6xl">Instantly & Free</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            The fastest and most reliable way to download files from TaraBox and TeraBox. 
            No registration required, unlimited downloads, and lightning-fast speeds.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-blue-200 text-sm">Files Downloaded</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-blue-200 text-sm">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200 text-sm">Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-blue-200 text-sm">Forever</div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="flex flex-wrap justify-center gap-6 text-blue-100">
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-400" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-400" />
            <span>No Registration</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="h-5 w-5 text-purple-400" />
            <span>Unlimited Downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
}