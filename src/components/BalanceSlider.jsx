export default function BalanceSlider({ value, friendFirstName, onChange }) {
  const friendLabel =
    friendFirstName === 'Алин' || friendFirstName === 'Алины'
      ? 'Алины'
      : friendFirstName === 'Дмитрий'
      ? 'Дмитрия'
      : `${friendFirstName}а`;

  return (
    <div className="w-full px-4 py-2.5 rounded-2xl bg-[#141416]/85 backdrop-blur-md border border-white/15">
      <div className="flex items-center justify-between text-[11px] text-white/85 font-medium mb-1.5">
        <span>Больше моего</span>
        <span className="text-white font-semibold">
          Баланс {100 - value} / {value}
        </span>
        <span>Больше {friendLabel}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(90deg, #F464F2 0%, #F464F2 ${value}%, #1D63FF ${value}%, #1D63FF 100%)`,
        }}
        className="vk-slider w-full block rounded-full"
      />
    </div>
  );
}
