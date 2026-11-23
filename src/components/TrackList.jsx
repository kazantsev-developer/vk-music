export default function TrackList({ tracks, activeIdx, isPlaying, onSelect }) {
  return (
    <div className="space-y-2">
      {tracks.map((t, i) => {
        const active = i === activeIdx;
        const badge =
          t.owner === "both"
            ? "bg-vk-pink/20 text-[#FF85DA]"
            : "bg-white/10 text-white/60";
        return (
          <button
            key={`${t.title}-${i}`}
            onClick={() => onSelect(i)}
            className={`w-full text-left p-2.5 rounded-2xl border flex items-center justify-between transition ${active ? "bg-[#1F1B26] border-[#E646B6]/40" : "bg-[#16161B] border-white/5 hover:bg-[#1F1F26]"}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white/95"
                style={{
                  backgroundImage: `linear-gradient(135deg,${t.color[0]},${t.color[1]})`,
                }}
              >
                {active && isPlaying ? (
                  <div className="flex items-end gap-[2.5px] h-4">
                    <div className="eq-1 w-[3px] bg-white rounded-full" />
                    <div className="eq-2 w-[3px] bg-white rounded-full" />
                    <div className="eq-3 w-[3px] bg-white rounded-full" />
                  </div>
                ) : (
                  <span className="text-[14px]">♪</span>
                )}
              </div>
              <div className="min-w-0">
                <div
                  className={`text-[13px] font-semibold truncate ${active ? "text-[#FF85DA]" : "text-white"}`}
                >
                  {t.title}
                </div>
                <div className="text-[11px] text-white/55 truncate">
                  {t.artist}
                </div>
              </div>
            </div>
            <span
              className={`shrink-0 ml-2 px-2 py-0.5 rounded-full text-[10px] font-medium ${badge}`}
            >
              {t.ownerText}
            </span>
          </button>
        );
      })}
    </div>
  );
}
