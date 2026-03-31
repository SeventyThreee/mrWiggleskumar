import { useEffect } from "react";

interface WhamOverlayProps {
  onComplete: () => void;
}

const WhamOverlay = ({ onComplete }: WhamOverlayProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-comic-black/60 animate-fade-in">
      <div className="relative animate-wham-burst">
        {/* Starburst */}
        <svg viewBox="0 0 400 400" className="w-72 h-72 md:w-96 md:h-96">
          <polygon
            points="200,20 230,140 340,60 260,160 380,200 260,240 340,340 230,260 200,380 170,260 60,340 140,240 20,200 140,160 60,60 170,140"
            fill="hsl(var(--comic-yellow))"
            stroke="hsl(var(--comic-black))"
            strokeWidth="5"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-bangers text-6xl md:text-8xl text-comic-red"
          style={{
            WebkitTextStroke: '3px hsl(var(--comic-black))',
            paintOrder: 'stroke fill',
          }}
        >
          WHAM!
        </span>
      </div>
    </div>
  );
};

export default WhamOverlay;
