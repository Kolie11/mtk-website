type CloseButtonProps = { onClick: () => void; label?: string; className?: string };

export function CloseButton({ onClick, label = "Schließen", className = "" }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`grid size-10 flex-none place-items-center rounded-full border border-line-strong bg-white text-lg text-kaasen-blue transition-colors hover:bg-kaasen-blue hover:text-kaasen-yellow ${className}`}
    >
      <span aria-hidden="true">×</span>
    </button>
  );
}
