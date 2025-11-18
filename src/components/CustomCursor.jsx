import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add to trail
      setTrail(prev => [...prev.slice(-5), {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }]);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  // Only show on desktop
  if (window.innerWidth < 768) return null;

  return (
    <>
      {/* Trail sparkles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length * 0.6})`
          }}
        />
      ))}

      {/* Main cursor sparkle */}
      {isVisible && (
        <div
          className="custom-cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {/* Flower petals - 5 rounded petals */}
            <g className="cursor-flower">
              {/* Top petal */}
              <ellipse cx="13" cy="6" rx="3.5" ry="5" fill="url(#petalGradient)" opacity="0.9"/>
              {/* Top-right petal */}
              <ellipse cx="18.5" cy="9" rx="3.5" ry="5" fill="url(#petalGradient)" opacity="0.85" transform="rotate(72 18.5 9)"/>
              {/* Bottom-right petal */}
              <ellipse cx="16.5" cy="16" rx="3.5" ry="5" fill="url(#petalGradient)" opacity="0.8" transform="rotate(144 16.5 16)"/>
              {/* Bottom-left petal */}
              <ellipse cx="9.5" cy="16" rx="3.5" ry="5" fill="url(#petalGradient)" opacity="0.8" transform="rotate(216 9.5 16)"/>
              {/* Top-left petal */}
              <ellipse cx="7.5" cy="9" rx="3.5" ry="5" fill="url(#petalGradient)" opacity="0.85" transform="rotate(288 7.5 9)"/>

              {/* Center of flower */}
              <circle cx="13" cy="12" r="3" fill="#FFFFFF" opacity="0.95"/>
              <circle cx="13" cy="12" r="2" fill="url(#centerGradient)"/>
            </g>

            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6FC5BF"/>
                <stop offset="50%" stopColor="#7AB8DB"/>
                <stop offset="100%" stopColor="#A892C7"/>
              </linearGradient>
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="#7AB8DB"/>
                <stop offset="100%" stopColor="#6FC5BF"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
