import { SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { useRef } from "react";

export default function MiniPlayer({
  track,
  isPlaying,
  progress,
  onToggle,
  onNext,
  onPrev,
  onSeek,
}) {
  const barRef = useRef(null);

  const handleSeek = (e) => {
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    onSeek(ratio);
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-vk-card border border-white/10 p-2.5">
      <div
        className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg,${track.color[0]},${track.color[1]})`,
        }}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[2.5px] h-4">
            <div className="eq-1 w-[3px] bg-white rounded-full" />
            <div className="eq-2 w-[3px] bg-white rounded-full" />
            <div className="eq-3 w-[3px] bg-white rounded-full" />
          </div>
        ) : (
          <span className="text-[15px] text-white/95">♪</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-semibold truncate">{track.title}</div>
        <div className="text-[11px] text-white/55 truncate">
          {track.artist} • Совместный микс
        </div>
        <div
          ref={barRef}
          onClick={handleSeek}
          className="mt-1.5 h-1.5 rounded-full bg-white/15 cursor-pointer relative overflow-hidden"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-vk-blue via-vk-purple to-vk-pink"
            style={{ width: `${Math.min(100, progress * 100)}%` }}
          />
        </div>
      </div>

      <button
        onClick={onPrev}
        className="w-8 h-8 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
        aria-label="Предыдущий"
      >
        <SkipBack className="w-4 h-4" fill="currentColor" />
      </button>
      <button
        onClick={onToggle}
        className="w-9 h-9 shrink-0 rounded-full bg-white text-black flex items-center justify-center active:scale-95 transition"
        aria-label="Play/Pause"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" fill="currentColor" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
        )}
      </button>
      <button
        onClick={onNext}
        className="w-8 h-8 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
        aria-label="Следующий"
      >
        <SkipForward className="w-4 h-4" fill="currentColor" />
      </button>
    </div>
  );
}
