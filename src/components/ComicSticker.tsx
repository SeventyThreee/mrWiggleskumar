import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComicStickerProps {
  src: string;
  className?: string;
  rotate?: number;
  delay?: number;
}

const ComicSticker = ({ src, className, rotate = 0, delay = 0 }: ComicStickerProps) => {
  return (
    <motion.div
      className={cn("relative pointer-events-auto select-none drop-shadow-lg", className)}
      initial={{ scale: 0, rotate: rotate - 10, opacity: 0 }}
      whileInView={{ scale: 1, rotate: rotate, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: delay
      }}
      whileHover={{ scale: 1.1, rotate: rotate + 5 }}
    >
      {/* Tape Effect */}
      <div 
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/40 backdrop-blur-[1px] border border-white/20 z-10 rotate-[-2deg]"
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
      />
      
      {/* Sticker Image */}
      <div className="bg-white p-1 pb-2 border-2 border-black rounded-sm overflow-hidden rotate-[1deg]">
        <img 
          src={src} 
          alt="Comic Sticker" 
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
        />
      </div>

      {/* Optional Second Tape */}
      <div 
        className="absolute -bottom-2 -right-2 w-8 h-3 bg-white/30 backdrop-blur-[1px] border border-white/20 z-10 rotate-[15deg]"
      />
    </motion.div>
  );
};

export default ComicSticker;
