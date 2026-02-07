
import React from 'react';

/**
 * VERCEL / DEPLOYMENT INSTRUCTIONS:
 * 1. Create a folder named 'public' in your project root.
 * 2. Create a folder named 'images' INSIDE 'public'. 
 *    Path should be: public/images/
 * 3. Add your photos there.
 * 4. IMPORTANT: Ensure names are all lowercase (e.g., hero.jpg) 
 *    as Vercel is case-sensitive.
 */

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Added leading slash / for absolute pathing from public folder */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/images/hero.jpg")' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 animate-slideDown">
            <span className="text-gold font-hindi text-2xl block mb-2">|| श्री गणेशाय नमः ||</span>
            <div className="h-0.5 w-16 bg-gold mx-auto"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl text-royal mb-4 tracking-tight">
            Mahanshu <span className="text-gold italic">&</span> Heemakshi
          </h1>
          
          <div className="font-hindi text-2xl md:text-4xl text-gray-700 mb-8 space-y-2">
            <p>महांशु एवं हिमाक्षी के शुभ विवाह समारोह में सादर आमंत्रण</p>
          </div>

          <div className="space-y-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <p className="italic">"You're Invited to celebrate our Wedding Ceremony"</p>
            <p className="font-hindi opacity-90">"परिवारजनों के आशीर्वाद से आप सपरिवार पधारकर वर-वधू को आशीर्वाद प्रदान करें।"</p>
            <p className="text-gray-500">"With the blessings of our families, we cordially invite you and your family to grace the occasion and bless the couple."</p>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="border-2 border-gold p-1 rounded-full w-fit mb-6 animate-bounce">
              <div className="bg-gold h-2 w-2 rounded-full"></div>
            </div>
            <p className="font-serif text-gold text-2xl tracking-[0.2em] uppercase">Save the Date</p>
            <p className="text-3xl text-royal font-bold mt-2">February 9, 2026</p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="p-8 border-4 border-double border-gold rounded-xl bg-cream shadow-xl temple-arch">
              <h3 className="text-royal font-serif text-3xl mb-6 text-center">Wedding Details</h3>
              
              <div className="space-y-6 text-center">
                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-1">Date & Time</h4>
                  <p className="text-gray-800 text-lg">Monday, 9 February 2026</p>
                  <p className="text-gray-600">Afternoon | दोपहर</p>
                </div>

                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-1">Venue</h4>
                  <p className="text-gray-800 text-lg">Shivbadi, Vidyashala Road</p>
                  <p className="text-gray-600">Chandpole, Jodhpur, Rajasthan</p>
                  <p className="text-hindi mt-1">शिवबाड़ी, विद्याशाला रोड, चांदपोल, जोधपुर (राजस्थान)</p>
                </div>

                <div className="pt-6 border-t border-gold/20">
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-1">Hosted By</h4>
                  <p className="text-royal font-serif text-xl">Mr. Mahendra Kumar Vyas & Family</p>
                  <p className="text-hindi text-lg mt-1">निमंत्रक: श्री महेन्द्र कुमार व्यास एवं परिवार</p>
                  <p className="text-gray-600 mt-2 font-mono text-sm">+91 9461546047 | +91 8946961089</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/images/hero.jpg" 
                alt="Jodhpur Wedding" 
                className="rounded-2xl shadow-2xl temple-arch border-8 border-gold w-full max-w-sm"
              />
              <div className="absolute -bottom-6 -right-6 bg-royal text-white p-6 rounded-lg shadow-xl font-hindi text-xl">
                शुभ विवाह
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
