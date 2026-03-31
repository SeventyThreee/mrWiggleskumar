import { useState, useCallback } from "react";
import ComicPanel from "@/components/ComicPanel";
import SpeechBubble from "@/components/SpeechBubble";
import SoundEffect from "@/components/SoundEffect";
import WhamOverlay from "@/components/WhamOverlay";
import coverImage from "@/assets/mr-wiggles-kumar-cover.png";

const Index = () => {
  const [showWham, setShowWham] = useState(false);

  const handleDownload = useCallback(() => {
    setShowWham(true);
  }, []);

  const handleWhamComplete = useCallback(() => {
    setShowWham(false);
    // Trigger download (placeholder — replace with real file URL)
    const link = document.createElement("a");
    link.href = "#";
    link.download = "mr-wiggles-kumar-issue-1.pdf";
    link.click();
  }, []);

  return (
    <div className="paper-texture comic-cursor min-h-screen overflow-x-hidden">
      {showWham && <WhamOverlay onComplete={handleWhamComplete} />}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Floating sound effects */}
        <div className="absolute top-8 left-4 md:left-16 animate-comic-float">
          <SoundEffect text="BOING!" color="text-comic-blue" size="sm" />
        </div>
        <div className="absolute top-20 right-4 md:right-20 animate-comic-float-alt">
          <SoundEffect text="OOPS!" color="text-comic-yellow" size="sm" />
        </div>
        <div className="absolute bottom-32 left-8 md:left-32 animate-comic-float-alt" style={{ animationDelay: "1s" }}>
          <SoundEffect text="SPLASH!" color="text-comic-red" size="sm" />
        </div>

        {/* Title */}
        <h1
          className="font-bangers text-6xl sm:text-7xl md:text-9xl text-comic-red text-center leading-none mb-4 animate-wiggle"
          style={{
            WebkitTextStroke: '3px hsl(var(--comic-black))',
            paintOrder: 'stroke fill',
            transform: 'rotate(-2deg)',
          }}
        >
          Mr. Wiggles
          <br />
          Kumar
        </h1>

        {/* Speech bubble subtitle */}
        <SpeechBubble className="mt-6 mb-10">
          A ridiculously chaotic adventure
        </SpeechBubble>

        {/* CTA Button — Starburst */}
        <button
          onClick={handleDownload}
          className="relative group mt-4 focus:outline-none"
          aria-label="Download Comic"
        >
          <svg viewBox="0 0 300 300" className="w-48 h-48 md:w-56 md:h-56 transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
            <polygon
              points="150,10 175,100 260,40 200,120 290,150 200,180 260,260 175,200 150,290 125,200 40,260 100,180 10,150 100,120 40,40 125,100"
              fill="hsl(var(--comic-yellow))"
              stroke="hsl(var(--comic-black))"
              strokeWidth="4"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="font-bangers text-2xl md:text-3xl text-comic-black"
            >
              Download
            </span>
            <span className="font-bangers text-2xl md:text-3xl text-comic-black">
              Comic
            </span>
            <span className="font-comic text-xs md:text-sm text-comic-black/70 mt-1 font-bold">
              Free · Issue #1
            </span>
          </div>
        </button>
      </section>

      {/* Comic Preview Strip */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2
          className="font-bangers text-4xl md:text-6xl text-comic-blue text-center mb-12"
          style={{
            WebkitTextStroke: '2px hsl(var(--comic-black))',
            paintOrder: 'stroke fill',
          }}
        >
          Sneak Peek!
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          <ComicPanel rotation={-3} className="w-64 h-72 md:w-72 md:h-80">
            <div className="w-full h-full flex items-center justify-center bg-comic-yellow/20 p-4">
              <div className="text-center">
                <span className="font-bangers text-5xl text-comic-red block mb-2">POW!</span>
                <p className="font-comic text-sm text-comic-black font-bold">Mr. Wiggles meets his nemesis...</p>
              </div>
            </div>
          </ComicPanel>

          <ComicPanel rotation={2} className="w-64 h-72 md:w-72 md:h-80">
            <div className="w-full h-full flex items-center justify-center bg-comic-blue/10 p-4">
              <div className="text-center">
                <span className="font-bangers text-5xl text-comic-blue block mb-2">ZOOM!</span>
                <p className="font-comic text-sm text-comic-black font-bold">A wild chase through the city!</p>
              </div>
            </div>
          </ComicPanel>

          <ComicPanel rotation={-1.5} className="w-64 h-72 md:w-72 md:h-80">
            <div className="w-full h-full flex items-center justify-center bg-comic-red/10 p-4">
              <div className="text-center">
                <span className="font-bangers text-5xl text-comic-yellow block mb-2">KABOOM!</span>
                <p className="font-comic text-sm text-comic-black font-bold">Things get... explosive.</p>
              </div>
            </div>
          </ComicPanel>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative halftone border-t-4 border-comic-black py-12 mt-8">
        <div className="text-center relative z-10">
          <p className="font-comic text-lg text-foreground font-bold">
            A comic by Jeevakrishna Vetrivel :)
          </p>
          <p className="font-bangers text-3xl md:text-4xl text-comic-blue mt-4 italic">
            To be continued…
          </p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <button
          onClick={handleDownload}
          className="w-full py-4 bg-comic-yellow border-[3px] border-comic-black font-bangers text-xl text-comic-black shadow-[4px_4px_0_hsl(var(--comic-black))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          📥 Download Comic — Free!
        </button>
      </div>
    </div>
  );
};

export default Index;
