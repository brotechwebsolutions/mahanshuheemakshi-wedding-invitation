
import React from 'react';

/**
 * VERCEL / DEPLOYMENT INSTRUCTIONS:
 * Ensure your photos are in 'public/images/' folder.
 */

const Story: React.FC = () => {
  const storyPoints = [
    {
      title: "First Meeting",
      hindiTitle: "प्रथम मिलन",
      description: "It all started with a simple hello and a shared interest in traditional Rajasthani arts. The connection was instant.",
      hindiDesc: "एक साधारण नमस्ते से शुरू हुई यह कहानी, जो धीरे-धीरे अटूट प्रेम में बदल गई।",
      image: "/images/story1.jpg"
    },
    {
      title: "The Engagement",
      hindiTitle: "सगाई समारोह",
      description: "Under the golden sun of Jodhpur, we exchanged rings and promised a lifetime of togetherness with our family's blessings.",
      hindiDesc: "जोधपुर की सुनहरी धूप के नीचे, हमने अंगूठियों का आदान-प्रदान किया और सात जन्मों का वादा किया।",
      image: "/images/story2.jpg"
    },
    {
      title: "Our Journey",
      hindiTitle: "हमारा सफर",
      description: "Building dreams together, exploring the Blue City, and preparing for our beautiful life as one.",
      hindiDesc: "एक साथ सपने संजोना, नीली नगरी की गलियों में घूमना और नए जीवन की तैयारी करना।",
      image: "/images/story3.jpg"
    },
    {
      title: "The Wedding",
      hindiTitle: "विवाह बंधन",
      description: "The big day is here! We are ready to start our new chapter in the presence of all our loved ones.",
      hindiDesc: "शुभ दिन आ गया है! हम अपने प्रियजनों की उपस्थिति में नए जीवन की शुरुआत के लिए तैयार हैं।",
      image: "/images/story4.jpg"
    }
  ];

  return (
    <div className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-royal mb-4 italic">Our Story</h2>
          <p className="font-hindi text-2xl text-gold">|| हमारी कहानी ||</p>
        </div>

        <div className="space-y-24">
          {storyPoints.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="rounded-xl shadow-lg border-4 border-gold temple-arch h-64 w-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-serif text-royal mt-2">{item.title}</h3>
                <h4 className="text-hindi text-xl text-gray-700 mt-1">{item.hindiTitle}</h4>
                <div className="h-0.5 w-12 bg-gold my-4 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <p className="font-hindi text-gray-500 leading-relaxed italic">{item.hindiDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
