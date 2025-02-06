import React, { useEffect, useState } from 'react';

const PricingSection: React.FC = () => {


    const [darkMode, setDarkMode] = useState(
        document.documentElement.classList.contains('dark')
      );
    
      useEffect(() => {
        const observer = new MutationObserver(() => {
          setDarkMode(document.documentElement.classList.contains('dark'));
        });
    
        observer.observe(document.documentElement, { attributes: true });
    
        return () => observer.disconnect();
      }, []);
    
  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: [
        "Enhanced Hearing",
        "Noise Reduction",
        "Basic Support",
      ],
    },
    {
      name: "Premium",
      price: "$19.99/month",
      features: [
        "Enhanced Hearing",
        "Advanced Noise Reduction",
        "Personalized Settings",
        "Priority Support",
      ],
    },
    {
      name: "Ultimate",
      price: "$29.99/month",
      features: [
        "Enhanced Hearing",
        "AI-Powered Noise Reduction",
        "Personalized Settings",
        "24/7 Premium Support",
        "Exclusive Features",
      ],
    },
  ];

  return (
    <section className={`py-12 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100'
          : 'bg-gradient-to-br from-blue-100 via-indigo-50 to-white text-gray-800'
      }`}>
      <div className="max-w-6xl px-4 mx-auto md:px-6">
        <h2 className="text-3xl font-extrabold text-center mb-8 md:text-4xl lg:text-5xl">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-6 ${
                darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
              }`}>
              <h3 className="text-2xl font-bold mb-4 text-center ">{plan.name}</h3>
              <p className="text-xl font-medium text-center mb-6">{plan.price}</p>
              <ul className="list-disc pl-6 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`mb-2 ${
                    darkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;