import { X, ChevronRight } from "lucide-react";

export default function FriendsSheet({ open, friends, onSelect, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`absolute inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 z-50 rounded-t-[28px] bg-[#15151A] border-t border-white/10 pb-8 transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center pt-2.5 pb-1">
          <div className="w-9 h-1 rounded-full bg-white/25" />
        </div>
        <div className="px-5 pt-2">
          <div className="flex items-start justify-between">
            <h3 className="text-[17px] font-bold">Совместный VK Микс</h3>
            <button
              onClick={onClose}
              className="p-1.5 -mt-1 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1 text-[12px] text-white/60 leading-snug">
            Выберите друга из ВКонтакте - алгоритмы объединят ваши любимые треки
            в бесконечную волну.
          </p>
        </div>
        <div className="mt-4 px-4 space-y-2 max-h-[420px] overflow-y-auto no-scrollbar">
          {friends.map((f, i) => (
            <button
              key={f.id}
              onClick={() => onSelect(i)}
              className="w-full text-left flex items-center gap-3 p-2.5 rounded-2xl bg-[#141416] hover:bg-[#232330] border border-white/5 hover:border-white/15 transition"
            >
              <div className="relative shrink-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold"
                  style={{ backgroundImage: f.avatarGradient }}
                >
                  {f.initials}
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-[1px] rounded-full bg-[#050505] border border-white/15 text-[9px] font-bold text-[#7CE3B0]">
                  {f.match}%
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-semibold truncate">
                  {f.name}
                </div>
                <div className="text-[11px] text-white/50 truncate">
                  {f.meta}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
