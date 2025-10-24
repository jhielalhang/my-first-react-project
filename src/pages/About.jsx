import React, { useState, useEffect } from "react";
import "./About.css";

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
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            background: 'white',
            borderRadius: '50%',
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

const About = () => {
  return (
    
      
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h2>About Me</h2>
        <p>
          Hi! I'm Jela, and I'm just starting my journey as a web developer. 
          I'm learning React, JavaScript, and other web technologies to build 
          websites and applications. I'm excited to grow my skills and create 
          projects that solve real problems. Every day is a new opportunity 
          to learn something new!
        </p>
        <div className="skills">
          <span className="skill-badge">React</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
        </div>
      </div>
    
  );
};

export default About;