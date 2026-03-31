interface SoundEffectProps {
  text: string;
  color?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-2xl md:text-3xl",
  md: "text-3xl md:text-5xl",
  lg: "text-5xl md:text-7xl",
};

const SoundEffect = ({ text, color = "text-comic-red", className = "", size = "md" }: SoundEffectProps) => (
  <span
    className={`font-bangers ${sizes[size]} ${color} select-none animate-comic-float drop-shadow-[3px_3px_0_hsl(var(--comic-black))] ${className}`}
    style={{
      WebkitTextStroke: '2px hsl(var(--comic-black))',
      paintOrder: 'stroke fill',
    }}
  >
    {text}
  </span>
);

export default SoundEffect;
