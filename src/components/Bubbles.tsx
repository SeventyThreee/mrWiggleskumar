import React from 'react';

const Bubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 6 + Math.random() * 18,
    delay: Math.random() * 15,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full border border-water-accent/30 bg-water-accent/10 animate-bubble"
          style={{
            left: b.left,
            bottom: "-30px",
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
