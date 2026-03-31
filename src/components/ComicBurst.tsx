import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComicBurstProps {
  text: string;
  className?: string;
  rotate?: number;
  variant?: 'comic' | 'splash';
}

const ComicBurst = ({ text, className, rotate = 0, variant = 'comic' }: ComicBurstProps) => {
  return (
    <motion.div
      className={cn("absolute z-20 pointer-events-none", className)}
      initial={{ scale: 0, rotate: rotate - 20, opacity: 0 }}
      whileInView={{ scale: 1, rotate: rotate, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.2
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Burst Background */}
        <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-32 md:h-32">
          {variant === 'comic' ? (
            <polygon
              points="100,10 120,80 190,70 140,110 180,170 110,140 100,190 80,140 20,170 60,110 10,70 80,80"
              fill="#E63946"
              stroke="black"
              strokeWidth="4"
            />
          ) : (
            <path
              d="M100,20 C110,60 180,40 150,100 C190,130 140,180 100,160 C60,180 10,130 50,100 C20,40 90,60 100,20 Z"
              fill="#A8DADC"
              stroke="#1D3557"
              strokeWidth="4"
            />
          )}
        </svg>
        
        {/* Text */}
        <span className="absolute font-bangers text-xl md:text-2xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] uppercase tracking-tighter">
          {text}
        </span>
        
        {/* Splash Drops if variant is splash */}
        {variant === 'splash' && (
          <>
            <motion.div 
              className="absolute -top-4 -left-2 w-3 h-3 bg-water-accent rounded-full border border-water-deep"
              animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-2 right-4 w-2 h-2 bg-water-accent rounded-full border border-water-deep"
              animate={{ y: [0, -15, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ComicBurst;
