import { buttonClass } from "@/components/ui/buttonStyles";

type ProFormSuccessProps = { title: string; onReset: () => void };

export function ProFormSuccess({ title, onReset }: ProFormSuccessProps) {
  return (
    <div role="status" className="flex flex-col items-start gap-3 rounded-[20px] bg-cream p-6">
      <span aria-hidden="true" className="grid size-[46px] place-items-center rounded-full bg-kaasen-yellow text-xl font-extrabold text-kaasen-blue">
        ✓
      </span>
      <strong className="text-xl text-kaasen-blue">{title}</strong>
      <span className="text-[14.5px] leading-[1.6] text-ink/78">Wir melden uns schnellstmöglich bei Ihnen.</span>
      <button type="button" onClick={onReset} className={buttonClass("outline", "sm", "text-[13.5px]")}>
        Neue Anfrage
      </button>
    </div>
  );
}
