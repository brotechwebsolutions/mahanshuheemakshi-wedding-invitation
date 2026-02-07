
import React, { useState } from 'react';
import { Send, MapPin } from 'lucide-react';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attending: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-royal mb-4 italic">Confirm Presence</h2>
          <p className="font-hindi text-2xl text-gold">|| प्रतिउत्तर (आर.एस.वी.पी.) ||</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-gold temple-arch">
            {submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="text-6xl mb-6">🙏</div>
                <h3 className="text-royal font-serif text-3xl mb-4">Thank you for confirming your presence!</h3>
                <p className="text-gray-600 mb-8 italic">We are looking forward to celebrating with you.</p>
                <p className="font-hindi text-2xl text-gold">आपका हार्दिक धन्यवाद!</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-gold border-b border-gold hover:text-royal hover:border-royal transition-colors font-semibold"
                >
                  Fill another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-royal uppercase tracking-widest">Full Name / नाम</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full p-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-royal uppercase tracking-widest">Phone Number / मोबाइल</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="Enter your number"
                    className="w-full p-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-royal uppercase tracking-widest">Number of Guests</label>
                    <select 
                      className="w-full p-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-royal uppercase tracking-widest">Attending?</label>
                    <select 
                      className="w-full p-3 bg-cream border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      value={formData.attending}
                      onChange={(e) => setFormData({...formData, attending: e.target.value})}
                    >
                      <option value="yes">Yes, Definitely!</option>
                      <option value="no">No, Sending Love</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-royal text-gold font-bold uppercase tracking-[0.2em] rounded-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit / भेजें</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Map Side */}
          <div className="space-y-8">
            <div className="p-8 bg-white border-2 border-gold rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gold/10 rounded-full">
                  <MapPin className="text-royal" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-royal">The Location</h3>
                  <p className="text-gray-600">Jodhpur, Rajasthan</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border-2 border-gold/20 shadow-inner h-[350px]">
                <iframe 
                  title="Venue Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.721471383377!2d73.0104868!3d26.2907489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c12a7a40b49%3A0xc06889753a39e7c5!2sChandpole%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 p-4 bg-cream rounded-lg border-l-4 border-gold">
                <p className="text-sm font-semibold text-royal uppercase mb-1 italic">Venue Address:</p>
                <p className="text-gray-700">Shivbadi, Vidyashala Road, Chandpole, Jodhpur</p>
                <p className="text-hindi mt-1">शिवबाड़ी, विद्याशाला रोड, चांदपोल, जोधपुर</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
