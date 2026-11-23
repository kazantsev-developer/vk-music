import {
  Play,
  Settings2,
  Users,
  ListMusic,
  SlidersHorizontal,
  Heart,
  Clock,
  Sparkles,
  Flame,
  Headphones,
} from "lucide-react";

const tiles = [
  { icon: Heart, title: "Мои треки", sub: "1 428 треков" },
  { icon: Clock, title: "Недавнее", sub: "История" },
  { icon: ListMusic, title: "Собрано для вас", sub: "Все подборки" },
  { icon: Sparkles, title: "Новинки дня", sub: "Обновляется ежедневно" },
  { icon: Flame, title: "Открытия", sub: "Новое для вас" },
  { icon: Headphones, title: "На репите", sub: "Любимое за месяц" },
];

export default function HomeScreen({
  isPlaying,
  onTogglePlay,
  onOpenFriends,
  onToast,
}) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#050505] overflow-hidden">
      <div className="flex-1 flex flex-col justify-between px-3 pt-12 pb-[86px] overflow-y-auto no-scrollbar">
        <div
          className="relative pt-4 pb-4 px-4 rounded-[30px] flex-1 flex flex-col justify-between overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0047FF 0%, #5B3DF5 50%, #FF2E93 100%)",
          }}
        >
          <div className="pointer-events-none absolute -bottom-10 -left-8 w-56 h-56 rounded-full bg-[#FF4DA6]/35 blur-2xl" />
          <div className="pointer-events-none absolute top-14 -right-10 w-52 h-52 rounded-full bg-[#00A3FF]/30 blur-2xl" />

          <header className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 shrink-0">
                <img
                  src="/avatar.png"
                  alt="Александр Казанцев"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Александр Казанцев
              </span>
            </div>
            <div className="flex items-center gap-1 text-white/95">
              <button
                onClick={() => onToast("Очередь воспроизведения пуста")}
                className="p-1.5 rounded-full hover:bg-white/15 transition focus:outline-none"
              >
                <ListMusic className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  onToast("Настройки аудио: высокое качество (320 кбит/с)")
                }
                className="p-1.5 rounded-full hover:bg-white/15 transition focus:outline-none"
              >
                <Settings2 className="w-5 h-5" />
              </button>
            </div>
          </header>

          <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center pt-6 pb-2">
            <button
              onClick={onTogglePlay}
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition focus:outline-none"
            >
              {isPlaying ? (
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
              )}
            </button>

            <h1 className="mt-4 text-[23px] font-bold tracking-tight text-white">
              Слушать VK Микс
            </h1>
            <p className="mt-1 text-[13px] text-white/85">
              Музыкальные рекомендации для вас
            </p>

            <div className="mt-7 flex items-center justify-center gap-2.5">
              <button
                onClick={() =>
                  onToast("Настройка волны: по настроению и темпу")
                }
                className="h-10 inline-flex items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[13px] font-medium transition-all duration-300 whitespace-nowrap focus:outline-none"
              >
                <SlidersHorizontal className="w-4 h-4 shrink-0" />
                <span>Настроить</span>
              </button>

              <button
                onClick={onOpenFriends}
                className="group h-10 inline-flex items-center justify-center gap-1.5 px-4 rounded-full bg-white hover:bg-[#FF2E93]/40 hover:backdrop-blur-md text-black hover:text-white text-[13px] font-bold shadow-md active:scale-95 transition-all duration-300 whitespace-nowrap focus:outline-none"
              >
                <Users className="w-4 h-4 shrink-0 text-[#0047FF] group-hover:text-white transition-colors duration-300" />
                <span>Совместный микс</span>
                <span className="px-1.5 py-[1px] text-[9px] font-extrabold uppercase bg-[#FF2E93] text-black group-hover:bg-white/25 group-hover:text-white rounded-full transition-colors duration-300">
                  New
                </span>
              </button>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-white/85 pt-2">
            <span>‹</span>
            <span>Проведите, чтобы включить свои треки</span>
            <span>›</span>
          </div>
        </div>

        <div className="mt-3 space-y-2.5 shrink-0">
          <button
            onClick={onOpenFriends}
            className="w-full text-left p-3.5 rounded-2xl bg-[#141416] border border-white/10 flex items-center justify-between hover:bg-[#1C1C20] transition focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                <img
                  src="/avatar.png"
                  alt="АК"
                  className="w-9 h-9 rounded-full border-2 border-[#141416] object-cover"
                />
                <div className="w-9 h-9 rounded-full border-2 border-[#141416] bg-[#242428] flex items-center justify-center text-[11px] font-bold text-white">
                  МС
                </div>
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white">
                  Смешайте вкусы с друзьями
                </div>
                <div className="text-[11px] text-[#8E8E93] mt-0.5">
                  Узнайте процент совпадения треков
                </div>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-white/40 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            {tiles.map(({ icon: Icon, title, sub }) => (
              <button
                key={title}
                onClick={() => onToast(`${title} • ${sub}`)}
                className="text-left p-3 rounded-2xl bg-[#141416] border border-white/[0.07] hover:bg-[#1C1C20] transition focus:outline-none"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-[#202024] flex items-center justify-center text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-white truncate">
                      {title}
                    </div>
                    <div className="text-[10px] text-[#8E8E93] truncate">
                      {sub}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="absolute inset-x-0 bottom-0 z-30 pt-2.5 pb-7 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around px-6 text-[10px] font-medium">
          <button className="flex flex-col items-center gap-1 text-[#FF2E93] focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M5 10v10h14V10"
              />
            </svg>
            Главная
          </button>
          <button
            onClick={() => onToast("Обзор — скоро в прототипе")}
            className="flex flex-col items-center gap-1 text-[#8E8E93] hover:text-white transition focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z"
              />
            </svg>
            Обзор
          </button>
          <button
            onClick={() => onToast("Моя музыка — 1 428 треков")}
            className="flex flex-col items-center gap-1 text-[#8E8E93] hover:text-white transition focus:outline-none"
          >
            <ListMusic className="w-5 h-5" />
            Моя музыка
          </button>
        </div>
      </nav>
    </div>
  );
}
