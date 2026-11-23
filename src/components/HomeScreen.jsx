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
  {
    icon: Heart,
    title: "Мои треки",
    sub: "1 428 треков",
    gradient: "from-[#2D81E0] to-[#7B3FE4]",
  },
  {
    icon: Clock,
    title: "Недавнее",
    sub: "История",
    gradient: "from-[#E646B6] to-[#7B3FE4]",
  },
  {
    icon: ListMusic,
    title: "Собрано для вас",
    sub: "Все подборки",
    gradient: "from-[#00D2FF] to-[#2D81E0]",
  },
  {
    icon: Sparkles,
    title: "Новинки дня",
    sub: "Обновляется ежедневно",
    gradient: "from-[#FF9A3C] to-[#E646B6]",
  },
  {
    icon: Flame,
    title: "Открытия",
    sub: "Новое для вас",
    gradient: "from-[#10B981] to-[#00A3FF]",
  },
  {
    icon: Headphones,
    title: "На репите",
    sub: "Любимое за месяц",
    gradient: "from-[#6C3CE9] to-[#E646B6]",
  },
];

export default function HomeScreen({
  isPlaying,
  onTogglePlay,
  onOpenFriends,
  onToast,
}) {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Фоновая волна */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] overflow-hidden">
        <div
          className="animate-vk-wave w-full h-full opacity-90"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, #2D81E0 0%, #7B3FE4 45%, #E646B6 78%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vk-bg/40 to-vk-bg" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-5 pt-14">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#2D81E0] to-[#E646B6]">
            <img
              src="/avatar.png"
              alt="Александр Казанцев"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">
            Александр Казанцев
          </span>
        </div>
        <div className="flex items-center gap-1 text-white/90">
          <button
            onClick={() => onToast("Очередь воспроизведения пуста")}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Очередь"
          >
            <ListMusic className="w-5 h-5" />
          </button>
          <button
            onClick={() =>
              onToast("Настройки аудио: высокое качество (320 кбит/с)")
            }
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Настройки"
          >
            <Settings2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="relative z-20 flex-1 overflow-y-auto no-scrollbar pb-[120px]">
        <div className="flex flex-col items-center text-center px-6 mt-6">
          <button
            onClick={onTogglePlay}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_8px_30px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 transition"
          >
            {isPlaying ? (
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
            )}
          </button>

          <h1 className="mt-4 text-[22px] font-bold tracking-tight">
            Слушать VK Микс
          </h1>
          <p className="mt-1 text-[13px] text-white/75">
            Музыкальные рекомендации для вас
          </p>

          <div className="mt-4 flex items-center gap-2.5">
            <button
              onClick={() => onToast("Настройка волны: по настроению и темпу")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 hover:bg-white/20 backdrop-blur-md text-[13px] font-medium border border-white/10 transition whitespace-nowrap"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Настроить
            </button>

            <button
              onClick={onOpenFriends}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#2D81E0] to-[#E646B6] text-white text-[13px] font-semibold shadow-[0_4px_20px_rgba(230,70,182,0.45)] hover:brightness-110 active:scale-95 transition whitespace-nowrap"
            >
              <Users className="w-4 h-4" />
              Совместный микс
              <span className="px-1.5 py-[1px] text-[9px] font-bold uppercase bg-black/30 rounded-full">
                New
              </span>
            </button>
          </div>
        </div>

        <div className="px-4 mt-7">
          <button
            onClick={onOpenFriends}
            className="w-full text-left p-3.5 rounded-2xl bg-gradient-to-r from-[#1c1b29] to-[#26192c] border border-white/10 flex items-center justify-between hover:border-[#E646B6]/50 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                <div className="w-9 h-9 rounded-full border-2 border-[#1c1b29] bg-gradient-to-br from-[#2D81E0] to-[#E646B6] flex items-center justify-center text-[11px] font-bold">
                  АК
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#1c1b29] bg-gradient-to-br from-[#E646B6] to-[#6C3CE9] flex items-center justify-center text-[11px] font-bold">
                  МС
                </div>
              </div>
              <div>
                <div className="text-[13px] font-semibold">
                  Смешайте вкусы с друзьями
                </div>
                <div className="text-[11px] text-white/55 mt-0.5">
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
        </div>

        <div className="px-4 mt-5 grid grid-cols-2 gap-2.5">
          {tiles.map(({ icon: Icon, title, sub, gradient }) => (
            <button
              key={title}
              onClick={() => onToast(`${title} • ${sub}`)}
              className="text-left p-3 rounded-2xl bg-vk-card border border-white/5 hover:bg-vk-cardHover transition"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 shrink-0 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold truncate">
                    {title}
                  </div>
                  <div className="text-[10px] text-white/50 truncate">
                    {sub}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <nav className="absolute inset-x-0 bottom-0 z-30 pt-2 pb-8 bg-vk-bg/85 backdrop-blur-xl border-t border-white/5">
        <div className="flex items-center justify-around px-6 text-[10px] font-medium">
          <button className="flex flex-col items-center gap-1 text-[#E646B6]">
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
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition"
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
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition"
          >
            <ListMusic className="w-5 h-5" />
            Моя музыка
          </button>
        </div>
      </nav>
    </div>
  );
}
