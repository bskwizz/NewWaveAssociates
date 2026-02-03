interface CTABarProps {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function CTABar({ text, buttonText, onButtonClick }: CTABarProps) {
  return (
    <div className="py-8" style={{
      background: `radial-gradient(1200px 600px at 15% -10%, rgba(1,163,219,0.25), transparent 50%),
                   radial-gradient(800px 400px at 85% 110%, rgba(56,73,93,0.25), transparent 50%),
                   linear-gradient(180deg, #f7f9fb 0%, #eef3f7 100%)`
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <button
            onClick={onButtonClick}
            className="px-8 py-3 bg-[#f05e00] text-white rounded-md font-medium hover:bg-[#d94f00] transition-all hover:scale-105 relative group whitespace-nowrap"
          >
            {buttonText}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#EF5919] transition-all group-hover:w-3/4"></span>
          </button>
          <p className="text-[#38495D] text-lg font-medium max-w-2xl">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
