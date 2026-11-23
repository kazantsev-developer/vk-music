export default function Toast({ toast }) {
  return (
    <div
      className={`pointer-events-none transition-all duration-300 absolute top-14 inset-x-5 z-50 bg-[#26262E]/95 backdrop-blur-md text-white text-[12px] font-medium px-4 py-2.5 rounded-2xl border border-white/10 shadow-xl text-center ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      {toast?.message}
    </div>
  );
}
