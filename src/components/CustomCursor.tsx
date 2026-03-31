import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Splash/Comic Ring */}
      <motion.div
        className="absolute w-10 h-10 border-2 border-black rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
        }}
        animate={{
          scale: isClicked ? 0.8 : (isPointer ? 1.5 : 1),
          backgroundColor: isPointer ? 'rgba(168, 218, 220, 0.4)' : 'transparent',
          borderWidth: isClicked ? '4px' : '2px',
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-comic-red border border-black rounded-full"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -4,
          top: -4,
        }}
        animate={{
          scale: isClicked ? 2 : 1,
        }}
      />

      {/* Comic Splash Effect on Pointer */}
      {isPointer && !isClicked && (
        <motion.div
          className="absolute font-bangers text-[10px] text-white pointer-events-none select-none"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            left: 15,
            top: -15,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-comic-red border border-black px-1 py-0.5 rotate-[15deg] shadow-sm">
            SPLASH!
          </div>
        </motion.div>
      )}

      {/* CLICK! text on click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute font-bangers text-sm text-white pointer-events-none select-none"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
              left: -25,
              top: -40,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1.5, rotate: 10 }}
            exit={{ opacity: 0, scale: 2, rotate: 30 }}
          >
            <div className="bg-comic-yellow text-black border-2 border-black px-2 py-0.5 shadow-md">
              CLICK!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
