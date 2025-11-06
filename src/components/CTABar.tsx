interface CTABarProps {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function CTABar({ text, buttonText, onButtonClick }: CTABarProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border-t border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#38495D] text-lg font-medium max-w-2xl">
            {text}
          </p>
          <button
            onClick={onButtonClick}
            className="px-8 py-3 bg-[#01A3DB] text-white rounded-md font-medium hover:bg-[#0192C5] transition-all hover:scale-105 relative group whitespace-nowrap"
          >
            {buttonText}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#EF5919] transition-all group-hover:w-3/4"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
