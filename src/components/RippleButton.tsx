import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const RippleButton = ({ children, onClick, className }: RippleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      {/* Rotating Ring */}
      <motion.div
        className="absolute -inset-4 rounded-full border-4 border-dashed border-water-accent/60 opacity-0 group-hover:opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Expanding Ripples (constant subtle) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-water-accent/20 border border-water-accent/40"
            initial={{ width: "100%", height: "100%", opacity: 0.5 }}
            animate={{ 
              width: ["100%", "250%"], 
              height: ["100%", "250%"], 
              opacity: [0.5, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 1,
              ease: "easeOut" 
            }}
          />
        ))}
      </div>

      {/* Main Button */}
      <motion.button
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative z-10 px-10 py-5 bg-comic-yellow text-black font-bangers text-3xl md:text-4xl",
          "comic-border-thick rounded-sm overflow-hidden",
          "hover:bg-accent hover:text-white transition-colors duration-300",
          className
        )}
      >
        {/* Hover Splash/Glow */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 2, opacity: 0.3 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 bg-water-accent blur-xl"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-water-accent/40 rounded-full blur-lg"
              />
            </>
          )}
        </AnimatePresence>

        <span className="relative z-20 flex flex-col items-center">
          <span className="text-sm font-comic-body tracking-widest mb-1 opacity-80 uppercase">READ NOW!</span>
          {children}
        </span>
      </motion.button>
    </div>
  );
};

export default RippleButton;
