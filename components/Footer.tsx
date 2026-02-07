
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal text-white py-12 border-t-4 border-gold">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl mb-4 text-gold">Mahanshu ❤️ Heemakshi</h2>
        <p className="font-hindi text-xl mb-6 opacity-90">|| महांशु संग हिमाक्षी ||</p>
        <div className="h-px bg-gold/30 w-1/2 mx-auto mb-6"></div>
        <p className="text-sm tracking-widest opacity-70 uppercase">
          February 2026 • Jodhpur, Rajasthan
        </p>
        <p className="mt-8 text-xs opacity-50">Designed with love for the couple.</p>
      </div>
    </footer>
  );
};

export default Footer;
