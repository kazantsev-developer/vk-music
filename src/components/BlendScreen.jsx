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
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[380px] pointer-events-none overflow-hidden">
        <div
          className="animate-vk-wave w-full h-full opacity-90 transition-all duration-700"
          style={{ background: friend.waveGradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0C]/65 to-[#0A0A0C]" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-4 pt-14">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-[13px] font-medium hover:bg-black/50 transition whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </button>

        <span className="text-[13px] font-semibold text-white/95">
          Совместный VK Микс
        </span>

        <button
          onClick={onShare}
          title="Поделиться в ВК"
          className="p-2 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50 transition"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </header>

      <div className="relative z-20 flex flex-col items-center text-center px-5 mt-3">
        <div className="flex items-center justify-center -space-x-3">
          <img src="/avatar.png" alt="Александр" className="w-16 h-16 rounded-full border-[3px] border-[#0A0A0C] object-cover shadow-lg" />
          <div className="z-10 px-2.5 py-1 rounded-full bg-white text-black text-[12px] font-extrabold shadow-md">
            {friend.match}%
          </div>
          <div
            className="w-16 h-16 rounded-full border-[3px] border-[#0A0A0C] flex items-center justify-center text-base font-bold shadow-lg"
            style={{ backgroundImage: friend.avatarGradient }}
          >
            {friend.initials}
          </div>
        </div>

        <h2 className="mt-2.5 text-[19px] font-bold tracking-tight">
          {friend.pairTitle}
        </h2>
        <p className="text-[12px] text-white/75 mt-0.5 line-clamp-1">
          {friend.common}
        </p>

        <div className="w-full mt-3.5">
          <BalanceSlider
            value={balance}
            friendFirstName={friend.firstName}
            onChange={onBalanceChange}
          />
        </div>
      </div>

      <div className="relative z-20 flex-1 px-4 mt-3 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[13px] font-bold text-white/90">
            Очередь волны
          </span>
          <button
            onClick={onOpenFriendsSheet}
            className="inline-flex items-center gap-1 text-[12px] text-[#529EF4] hover:text-[#7ab6fa] font-medium whitespace-nowrap"
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

      <div className="relative z-20 px-4 pt-2 pb-6 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C] to-transparent">
        <MiniPlayer
          track={tracks[activeIdx] || tracks[0]}
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
