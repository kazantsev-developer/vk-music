export default function StatusBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-40 flex items-center justify-between px-7 pt-3.5 pb-2 text-[12px] font-semibold text-white pointer-events-none">
      <span>10:51</span>
      <div className="w-[120px] h-[34px] bg-black rounded-full flex items-center justify-end px-3 border border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#1a1a2e] border border-white/10" />
      </div>
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C7.5 3 3.4 4.8 0.4 7.7L12 21.5L23.6 7.7C20.6 4.8 16.5 3 12 3Z" />
        </svg>
        <div className="w-6 h-3 rounded-[4px] border border-white/40 p-0.5 flex items-center">
          <div className="w-4 h-full bg-white rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}
