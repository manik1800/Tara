import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DownloadForm from './components/DownloadForm';
import Features from './components/Features';
import Instructions from './components/Instructions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <Hero />
      <DownloadForm />
      <Features />
      <Instructions />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;