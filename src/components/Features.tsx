import React from 'react';
import { Shield, Zap, Smartphone, Globe, Download, Clock, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download files at maximum speed with our optimized servers and CDN network.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is protected with end-to-end encryption. We never store your files.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'No Registration',
    description: 'Start downloading immediately. No sign-up, no account, no hassle.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Perfect experience on all devices - desktop, tablet, and mobile.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Download,
    title: 'Unlimited Downloads',
    description: 'No limits on file size or number of downloads. Download as much as you need.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our service is always online and ready to help you download your files.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Trusted by Millions',
    description: 'Join over 1 million users who trust us for their daily download needs.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'High-quality downloads with original file integrity maintained.',
    color: 'from-amber-500 to-yellow-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Downloader?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the most advanced and reliable TaraBox downloader with features designed for speed, security, and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/20 backdrop-blur-md">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-200">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-blue-200">Files Downloaded</div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}