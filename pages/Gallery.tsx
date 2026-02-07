
import React from 'react';

/**
 * VERCEL / DEPLOYMENT INSTRUCTIONS:
 * Ensure your photos are in 'public/images/' folder.
 */

const Gallery: React.FC = () => {
  const images = [
    { src: '/images/gallery1.jpg', alt: 'Wedding Moment 1' },
    { src: '/images/gallery2.jpg', alt: 'Wedding Moment 2' },
    { src: '/images/gallery3.jpg', alt: 'Wedding Moment 3' },
    { src: '/images/gallery4.jpg', alt: 'Wedding Moment 4' },
    { src: '/images/gallery5.jpg', alt: 'Wedding Moment 5' },
    { src: '/images/gallery6.jpg', alt: 'Wedding Moment 6' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-serif text-5xl text-royal mb-4">Glimpses of Love</h2>
        <p className="font-hindi text-2xl text-gold mb-12">|| छायाचित्र ||</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border-4 border-white shadow-lg cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-royal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-2xl italic">M & H</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
