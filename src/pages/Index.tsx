import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WaveBackground from '@/components/WaveBackground';
import Bubbles from '@/components/Bubbles';
import ComicBurst from '@/components/ComicBurst';
import RippleButton from '@/components/RippleButton';
import CustomCursor from '@/components/CustomCursor';
import MobileComicTap from '@/components/MobileComicTap';
import ComicSticker from '@/components/ComicSticker';
import { cn } from '@/lib/utils';

// Assets
import titleImg from '@/assets/title.png';
import posterImg from '@/assets/poster.png';
import preview1 from '@/assets/preview1.jpg';
import preview2 from '@/assets/preview2.jpg';
import preview3 from '@/assets/preview3.jpg';

const Index = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Mr Wiggles Kumar comic.pdf";
    link.download = "Mr Wiggles Kumar comic.pdf";
    link.click();
  };

  return (
    <div className="relative min-h-screen bg-water-deep overflow-x-hidden paper-texture cursor-none">
      <CustomCursor />
      <MobileComicTap />
      <div className="halftone-overlay" />
      <WaveBackground />
      <Bubbles />

      {/* Comic Stickers on the sides */}
      <div className="fixed left-2 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-20 pointer-events-none">
        <ComicSticker src="/s1.png" rotate={-15} delay={0.2} className="scale-75 md:scale-100" />
        <ComicSticker src="/s3.png" rotate={10} delay={0.4} className="scale-75 md:scale-100" />
        <ComicSticker src="/s5.png" rotate={-5} delay={0.6} className="scale-75 md:scale-100" />
        <ComicSticker src="/s7.png" rotate={12} delay={0.8} className="scale-75 md:scale-100" />
      </div>

      <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-20 pointer-events-none">
        <ComicSticker src="/s2.png" rotate={8} delay={0.3} className="scale-75 md:scale-100" />
        <ComicSticker src="/s4.png" rotate={-12} delay={0.5} className="scale-75 md:scale-100" />
        <ComicSticker src="/s6.png" rotate={15} delay={0.7} className="scale-75 md:scale-100" />
        <ComicSticker src="/s8.png" rotate={-10} delay={0.9} className="scale-75 md:scale-100" />
      </div>

      <main className="relative z-10">
        {/* Header Section */}
        <header className="pt-16 pb-8 px-16 flex flex-col items-center">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <img 
              src={titleImg} 
              alt="Mr. Wiggles Kumar" 
              className="w-80 md:w-[450px] lg:w-[550px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
            />
            {/* Bobbing effect hint */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-water-accent/20 blur-md rounded-full" />
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center px-4 pb-12">
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.8 }}
            style={{ y: yParallax }}
          >
            {/* Water Splash Overlays at corners */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-water-accent/30 blur-xl rounded-full z-0" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-water-accent/20 blur-xl rounded-full z-0" />
            
            <div className="relative z-10 comic-border-thick bg-white p-2">
              <img 
                src={posterImg} 
                alt="Mr. Wiggles Kumar Comic Poster" 
                className="w-[280px] md:w-[350px] lg:w-[400px] block"
              />
            </div>
            
            {/* Speech bubble */}
            <motion.div 
              className="absolute -top-10 -right-20 bg-white border-4 border-black p-4 rounded-3xl hidden md:block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <p className="font-bangers text-xl text-black">OH NO! WATER EVERYWHERE!</p>
              <div className="absolute -bottom-4 left-4 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-black border-r-[15px] border-r-transparent" />
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6 mt-8">
            <RippleButton onClick={handleDownload}>
              DOWNLOAD COMIC
            </RippleButton>
            <p className="font-comic-body text-white/70 text-sm font-bold tracking-widest bg-black/30 px-4 py-1 rounded-full">
              FREE PDF • 40 MB • ISSUE #1
            </p>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.h2 
            className="font-bangers text-4xl md:text-5xl text-comic-yellow text-center mb-16 drop-shadow-[4px_4px_0_black]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SNEAK PEEK!
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/1.png", rotate: -3, delay: 0 },
              { src: "/2.png", rotate: 2, delay: 0.2 },
              { src: "/3.png", rotate: -1.5, delay: 0.4 },
            ].map((panel, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 40, rotate: panel.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: panel.rotate }}
                viewport={{ once: true }}
                transition={{ delay: panel.delay }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              >
                {/* Water splashes crossing panel edges */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-water-accent/40 rounded-full blur-md group-hover:bg-water-accent/60 transition-colors" />
                
                <div className="comic-border-thick bg-white p-1 overflow-hidden">
                  <img 
                    src={panel.src} 
                    alt={`Preview Panel ${i + 1}`} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 pb-12 flex flex-col items-center border-t border-white/10 bg-black/20">
          <div className="text-center mb-8">
            <h3 className="font-bangers text-2xl text-comic-red mb-2 water-reflection inline-block">
              TO BE CONTINUED...
            </h3>
            <p className="font-comic-body text-comic-yellow font-bold">
              A comic by Jeevakrishna Vetrivel :)
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-water-accent transition-colors">
              <span className="sr-only">Social</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-water-accent transition-colors">
              <span className="sr-only">Social</span>
            </div>
          </div>
          
          <p className="mt-8 text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © 2026 MR. WIGGLES KUMAR • ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
