import { ArrowLeft, Users, Share2 } from 'lucide-react';
import BalanceSlider from './BalanceSlider';
import TrackList from './TrackList';
import MiniPlayer from './MiniPlayer';

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
      {/* Верхняя цветная карточка с центрированием имён на разрезе синего и розового */}
      <div
        className="relative mx-3 mt-12 pt-4 pb-5 px-4 rounded-[30px] overflow-hidden shrink-0 flex flex-col justify-between min-h-[215px]"
        style={{
          background:
            'linear-gradient(180deg, #0038FF 0%, #2474FF 44%, #8EB8FF 54%, #F25CF9 60%, #E53EF0 100%)',
        }}
      >
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blendPinkFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9EC2FF" />
              <stop offset="12%" stopColor="#F466FA" />
              <stop offset="100%" stopColor="#E239ED" />
            </linearGradient>
            <filter id="blendCrestBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <path
            d="M -20 148 Q 100 162, 200 124 T 420 135 L 420 260 L -20 260 Z"
            fill="url(#blendPinkFill)"
            filter="url(#blendCrestBlur)"
          />
        </svg>

        <div
          className="pointer-events-none absolute inset-0 opacity-45 mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.06) 8px, rgba(0,0,0,0.25) 15px, rgba(255,255,255,0.5) 20px)',
          }}
        />
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

        {/* Аватары и имена отцентрированы по вертикали прямо на стыке синего и розового */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto pt-2">
          <div className="flex items-center justify-center -space-x-3">
            <img
              src="./avatar.png"
              alt="Александр"
              className="w-[58px] h-[58px] rounded-full border-[3px] border-white/35 object-cover shadow-lg"
            />
            <div className="z-10 px-2.5 py-1 rounded-full bg-white text-black text-[12px] font-extrabold shadow-md">
              {friend.match}%
            </div>
            <div className="w-[58px] h-[58px] rounded-full border-[3px] border-white/35 bg-[#141416] text-white flex items-center justify-center text-base font-bold shadow-lg">
              {friend.initials}
            </div>
          </div>

          <h2 className="mt-2.5 text-[19px] font-bold tracking-tight text-white drop-shadow-sm">
            {friend.pairTitle}
          </h2>
          <p className="text-[12px] text-white/90 mt-0.5 line-clamp-1">
            {friend.common}
          </p>
        </div>
      </div>

      {/* Слайдер баланса на равном удалении сверху от розового края и снизу от «Очереди волны» */}
      <div className="relative z-20 px-3 my-3 shrink-0">
        <BalanceSlider
          value={balance}
          friendFirstName={friend.firstName}
          onChange={onBalanceChange}
        />
      </div>

      {/* Очередь волны */}
      <div className="relative z-20 flex-1 px-3 pb-2 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-[13px] font-bold text-white">
            Очередь волны
          </span>
          <button
            onClick={onOpenFriendsSheet}
            className="inline-flex items-center gap-1 text-[12px] text-[#1D63FF] hover:text-[#F464F2] font-semibold whitespace-nowrap transition-colors focus:outline-none"
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

      {/* Мини-плеер */}
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
