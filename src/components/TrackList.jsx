import { Music } from 'lucide-react';

export default function TrackList({ tracks, activeIdx, isPlaying, onSelect }) {
  return (
    <div className="space-y-2.5">
      {tracks.map((t, i) => {
        const active = i === activeIdx;
        return (
          <button
            key={`${t.title}-${i}`}
            onClick={() => onSelect(i)}
            className={`w-full text-left p-3 rounded-2xl flex items-center justify-between transition focus:outline-none ${
              active
                ? 'bg-[#F464F2] text-black'
                : 'bg-[#141416] hover:bg-[#1E1E22] text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${
                  active ? 'bg-black/15 text-black' : 'bg-[#222226] text-white/70'
                }`}
              >
                {active && isPlaying ? (
                  <div className="flex items-end gap-[2.5px] h-4">
                    <div className={`eq-1 w-[3px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
                    <div className={`eq-2 w-[3px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
                    <div className={`eq-3 w-[3px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
                  </div>
                ) : (
                  <Music className="w-[18px] h-[18px]" strokeWidth={2.2} />
                )}
              </div>
              <div className="min-w-0">
                <div className={`text-[13px] font-bold truncate ${active ? 'text-black' : 'text-white'}`}>
                  {t.title}
                </div>
                <div
                  className={`text-[11px] font-medium truncate ${
                    active ? 'text-black/75' : 'text-[#8E8E93]'
                  }`}
                >
                  {t.artist}
                </div>
              </div>
            </div>

            <span
              className={`shrink-0 ml-2 px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                active
                  ? 'bg-black/15 text-black font-bold'
                  : t.owner === 'friend'
                  ? 'bg-[#1D63FF] text-white'
                  : 'bg-[#222226] text-white/80'
              }`}
            >
              {t.ownerText}
            </span>
          </button>
        );
      })}
    </div>
  );
}
