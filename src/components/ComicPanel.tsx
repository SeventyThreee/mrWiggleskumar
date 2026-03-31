interface ComicPanelProps {
  rotation?: number;
  children: React.ReactNode;
  className?: string;
}

const ComicPanel = ({ rotation = 0, children, className = "" }: ComicPanelProps) => (
  <div
    className={`relative border-[4px] border-comic-black bg-comic-panel overflow-hidden shadow-[6px_6px_0_hsl(var(--comic-black))] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-[8px_8px_0_hsl(var(--comic-black))] cursor-pointer ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Halftone overlay */}
    <div className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--comic-black)) 1px, transparent 1px)`,
        backgroundSize: '6px 6px',
      }}
    />
    {children}
  </div>
);

export default ComicPanel;
