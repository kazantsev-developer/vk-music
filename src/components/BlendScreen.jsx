import { ArrowLeft, Users, Share2 } from "lucide-react";
import BalanceSlider from "./BalanceSlider";
import TrackList from "./TrackList";
import MiniPlayer from "./MiniPlayer";

export default function BlendScreen({
  friend,
  balance,
  onBalanceChange,
  tracks,
  activeIdx,
  isPlaying,
  progress,
  onSelectTrack,
  onTogglePlay,
  onNext,
  onPrev,
  onSeek,
  onBack,
  onOpenFriendsSheet,
  onShare,
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-[#050505] overflow-hidden">
      <div
        className="relative mx-3 mt-12 pt-4 pb-4 px-4 rounded-[30px] overflow-hidden shrink-0"
        style={{
          background:
            "linear-gradient(180deg, #0047FF 0%, #5B3DF5 52%, #FF2E93 100%)",
        }}
      >
        <header className="relative z-10 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/25 hover:bg-black/35 backdrop-blur-md text-[13px] font-medium text-white transition whitespace-nowrap focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>

          <span className="text-[13px] font-semibold text-white">
            Совместный VK Микс
          </span>

          <button
            onClick={onShare}
            title="Поделиться в ВК"
            className="p-2 rounded-full bg-black/25 hover:bg-black/35 backdrop-blur-md text-white transition focus:outline-none"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </header>

        <div className="relative z-10 flex flex-col items-center text-center mt-3">
          <div className="flex items-center justify-center -space-x-3">
            <img
              src="./avatar.png"
              alt="Александр"
              className="w-15 h-15 w-[60px] h-[60px] rounded-full border-[3px] border-white/30 object-cover shadow-lg"
            />
            <div className="z-10 px-2.5 py-1 rounded-full bg-white text-black text-[12px] font-extrabold shadow-md">
              {friend.match}%
            </div>
            <div className="w-[60px] h-[60px] rounded-full border-[3px] border-white/30 bg-[#141416] text-white flex items-center justify-center text-base font-bold shadow-lg">
              {friend.initials}
            </div>
          </div>

          <h2 className="mt-2.5 text-[18px] font-bold tracking-tight text-white">
            {friend.pairTitle}
          </h2>
          <p className="text-[12px] text-white/85 mt-0.5 line-clamp-1">
            {friend.common}
          </p>

          <div className="w-full mt-3">
            <BalanceSlider
              value={balance}
              friendFirstName={friend.firstName}
              onChange={onBalanceChange}
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 flex-1 px-3 pt-4 pb-2 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-[13px] font-bold text-white">
            Очередь волны
          </span>
          <button
            onClick={onOpenFriendsSheet}
            className="inline-flex items-center gap-1 text-[12px] text-[#FF2E93] hover:text-[#ff5ca8] font-semibold whitespace-nowrap focus:outline-none"
          >
            <Users className="w-3.5 h-3.5" />
            Сменить друга
          </button>
        </div>

        <TrackList
          tracks={tracks}
          activeIdx={activeIdx}
          isPlaying={isPlaying}
          onSelect={onSelectTrack}
        />
      </div>

      <div className="relative z-20 px-3 pt-2 pb-6 bg-[#050505] shrink-0">
        <MiniPlayer
          track={tracks[activeIdx] || tracks}
          isPlaying={isPlaying}
          progress={progress}
          onToggle={onTogglePlay}
          onNext={onNext}
          onPrev={onPrev}
          onSeek={onSeek}
        />
      </div>
    </div>
  );
}
