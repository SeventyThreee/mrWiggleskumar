interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
}

const SpeechBubble = ({ children, className = "" }: SpeechBubbleProps) => (
  <div className={`relative inline-block ${className}`}>
    <div className="bg-white border-[3px] border-comic-black rounded-[2rem] px-6 py-3 relative font-comic text-lg md:text-xl text-comic-black">
      {children}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-comic-black" />
      <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-white" />
    </div>
  </div>
);

export default SpeechBubble;
