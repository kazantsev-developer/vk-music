import StatusBar from "./StatusBar";

export default function PhoneFrame({ children }) {
  return (
    <div className="relative w-[440px] h-[956px] shrink-0 bg-[#050505] rounded-[58px] p-[12px] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_0_2px_#2c2c35,0_0_0_6px_#18181c]">
      <div className="relative w-full h-full bg-[#050505] rounded-[46px] overflow-hidden">
        <StatusBar />
        {children}
        <div className="pointer-events-none absolute bottom-[8px] left-1/2 -translate-x-1/2 z-[70] w-[134px] h-[5px] rounded-full bg-white/70" />
      </div>
    </div>
  );
}
