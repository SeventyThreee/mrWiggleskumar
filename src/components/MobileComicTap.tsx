import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileComicTap = () => {
  const [taps, setTaps] = useState<{ id: number; x: number; y: number; text: string }[]>([]);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      const newTap = {
        id: Date.now(),
        x: touch.clientX,
        y: touch.clientY,
        text: ['SPLASH!', 'POW!', 'KAPOW!', 'WIGGLE!'][Math.floor(Math.random() * 4)]
      };
      setTaps(prev => [...prev, newTap]);
      setTimeout(() => {
        setTaps(prev => prev.filter(t => t.id !== newTap.id));
      }, 800);
    };

    window.addEventListener('touchstart', handleTouch);
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] md:hidden">
      <AnimatePresence>
        {taps.map(tap => (
          <motion.div
            key={tap.id}
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1.5, opacity: 1, rotate: 10 }}
            exit={{ scale: 2, opacity: 0, rotate: 30 }}
            className="absolute font-bangers text-white"
            style={{ left: tap.x, top: tap.y, translateX: '-50%', translateY: '-50%' }}
          >
            <div className="bg-comic-red border-2 border-black px-2 py-1 shadow-lg">
              {tap.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MobileComicTap;
