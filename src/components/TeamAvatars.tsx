import { TEAM as team } from '../data/team';

interface TeamAvatarsProps {
  /** Extra classes for the wrapper (e.g. vertical spacing). */
  className?: string;
}

// Overlapping cluster of rounded, full-color headshots.
export default function TeamAvatars({ className = '' }: TeamAvatarsProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      {team.map((member, index) => (
        <div
          key={member.name}
          className={`relative w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full ring-4 ring-white overflow-hidden bg-gray-100 shadow-lg transition-transform duration-300 hover:z-10 hover:scale-105 ${
            index > 0 ? '-ml-5 sm:-ml-6 lg:-ml-8' : ''
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${member.image}`}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('bg-gradient-to-br', 'from-[#01A3DB]', 'to-[#38495D]');
                const initials = document.createElement('div');
                initials.className = 'w-full h-full flex items-center justify-center';
                initials.innerHTML = `<span class="text-white text-2xl lg:text-3xl font-bold">${member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}</span>`;
                parent.appendChild(initials);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}
