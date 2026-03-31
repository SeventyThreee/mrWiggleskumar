import React from 'react';

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-water-deep">
      {/* Wave layer 1 (subtle, layered) */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-water-wave opacity-30"
        height="300"
        viewBox="0 0 2880 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,150 C480,300 960,0 1440,150 C1920,300 2400,0 2880,150 L2880,300 L0,300 Z"
          fill="#457B9D"
        />
      </svg>
      
      {/* Wave layer 2 */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] animate-water-wave opacity-20"
        style={{ animationDelay: "-7s", animationDuration: "20s" }}
        height="250"
        viewBox="0 0 2880 250"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C480,240 960,0 1440,120 C1920,240 2400,0 2880,120 L2880,250 L0,250 Z"
          fill="#A8DADC"
        />
      </svg>

      {/* Dripping water from top edge */}
      {[5, 15, 30, 45, 60, 75, 85, 95].map((left, i) => (
        <div
          key={i}
          className="absolute top-0 w-2 bg-water-accent/40 rounded-b-full animate-drip"
          style={{
            left: `${left}%`,
            height: "50px",
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${4 + i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveBackground;
