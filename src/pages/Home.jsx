import React, { useState, useEffect } from 'react';

const StarField = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarField />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8" style={{ paddingTop: '80px' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
            </div>
          </div>

          <h1 className="text-7xl font-light text-white mb-6 leading-tight">
            Bonjour!<br />I am Jela Caratao
          </h1>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
           Hello! I'm April Jela Caratao, a passionate and driven IT student at Cebu Technological University - Danao Campus. Welcome to my portfolio, where I showcase my projects, experiences, and skills in the field of Information Technology. This space is a reflection of my journey, growth, and dedication to my craft. Feel free to explore my work, and I hope you find it informative and inspiring. Let's connect and see how we can create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;