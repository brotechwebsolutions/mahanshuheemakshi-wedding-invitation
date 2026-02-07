
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Haldi Ceremony",
      hindiTitle: "पाठ बैठाना / हल्दी",
      date: "Saturday, 7 Feb 2026",
      hindiDate: "7 फरवरी",
      time: "4:00 PM onwards",
      color: "bg-yellow-50",
      icon: "🌼"
    },
    {
      title: "Griha Shanti",
      hindiTitle: "गृह शांति",
      date: "Sunday, 8 Feb 2026",
      hindiDate: "8 फरवरी",
      time: "11:00 AM",
      color: "bg-orange-50",
      icon: "🕯️"
    },
    {
      title: "Baraat Departure",
      hindiTitle: "बारात प्रस्थान",
      date: "Monday, 9 Feb 2026",
      hindiDate: "9 फरवरी",
      time: "6:30 PM",
      color: "bg-red-50",
      icon: "🐎"
    },
    {
      title: "Reception & Dinner",
      hindiTitle: "बारात स्वागत एवं प्रीतिभोज",
      date: "Monday, 9 Feb 2026",
      hindiDate: "9 फरवरी",
      time: "7:30 PM",
      color: "bg-royal text-white",
      icon: "🍽️"
    },
    {
      title: "Wedding Ceremony",
      hindiTitle: "विवाह संस्कार (फेरे)",
      date: "Tuesday, 10 Feb 2026",
      hindiDate: "10 फरवरी",
      time: "11:00 AM",
      color: "bg-gold/10",
      icon: "👰"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-royal mb-4">Wedding Schedule</h2>
          <p className="font-hindi text-2xl text-gold">|| कार्यक्रम ||</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className={`p-8 rounded-2xl shadow-lg border-2 border-gold relative overflow-hidden transition-transform hover:-translate-y-2 ${event.color.includes('bg-royal') ? 'bg-royal text-white' : 'bg-white'}`}>
              <div className="absolute top-0 right-0 p-4 text-4xl opacity-20">{event.icon}</div>
              
              <h3 className="text-2xl font-serif mb-1">{event.title}</h3>
              <h4 className={`text-xl font-hindi mb-6 ${event.color.includes('bg-royal') ? 'text-gold' : 'text-royal'}`}>{event.hindiTitle}</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-gold" />
                  <div>
                    <p className="font-semibold">{event.date}</p>
                    <p className="text-sm opacity-80 font-hindi">{event.hindiDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-gold" />
                  <p>{event.time}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gold" />
                  <p className="text-sm">Jodhpur, Rajasthan</p>
                </div>
              </div>

              <div className="mt-8 h-1 w-full bg-gold/30 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-10 bg-white border-4 border-double border-gold rounded-xl temple-arch shadow-2xl">
          <h3 className="text-royal font-serif text-3xl mb-4">A Grand Celebration Awaits</h3>
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            We can't wait to celebrate these auspicious moments with you and your family. Your presence will multiply our joy.
          </p>
          <p className="font-hindi text-xl text-royal mt-4">आपकी गरिमामयी उपस्थिति ही हमारा परम सौभाग्य होगा।</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
