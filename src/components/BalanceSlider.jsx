export default function BalanceSlider({ value, onChange, friendFirstName }) {
  const label =
    value <= 45
      ? `Мои ${100 - value}% / ${friendFirstName} ${value}%`
      : value >= 55
        ? `Мои ${100 - value}% / ${friendFirstName} ${value}%`
        : "Баланс 50 / 50";

  return (
    <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
      <div className="flex justify-between text-[10.5px] text-white/55 mb-1.5">
        <span>Больше моего</span>
        <span>Больше {friendFirstName}а</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="vk-slider w-full"
      />
      <div className="mt-1.5 text-center text-[11px] font-semibold text-white/80">
        {label}
      </div>
    </div>
  );
}
