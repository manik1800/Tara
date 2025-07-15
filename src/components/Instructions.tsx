import React from 'react';
import { Copy, Download, Link, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Copy,
    title: 'Copy Your Link',
    description: 'Copy the TaraBox, TeraBox, or other supported platform sharing link from your browser or mobile app.',
    details: 'Works with any public sharing link from supported cloud storage platforms.'
  },
  {
    icon: Link,
    title: 'Paste & Process',
    description: 'Paste the link into our secure input field and click the generate button to process your file.',
    details: 'Our advanced algorithms will extract the download information instantly.'
  },
  {
    icon: CheckCircle,
    title: 'Verify File Info',
    description: 'Review the file details including name, size, and type to ensure it\'s the correct file.',
    details: 'Preview thumbnails available for images and videos before downloading.'
  },
  {
    icon: Download,
    title: 'Download Instantly',
    description: 'Click download to get your file immediately with maximum speed and security.',
    details: 'Direct download links with resume support and progress tracking.'
  }
];

export default function Instructions() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Download your files in just 4 simple steps. No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center border-4 border-white/20">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl w-fit mb-6 mx-auto">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-blue-200 text-sm">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/20 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Pro Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Check File Size</h4>
              <p className="text-blue-200 text-sm">Large files may take longer to process. Be patient for files over 1GB.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Download className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Stable Connection</h4>
              <p className="text-blue-200 text-sm">Ensure you have a stable internet connection for uninterrupted downloads.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Link className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Valid Links Only</h4>
              <p className="text-blue-200 text-sm">Make sure your link is public and accessible before processing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}