type SuccessMessageProps = {
  title: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export function SuccessMessage({ title, children, action, className = "" }: SuccessMessageProps) {
  return (
    <div role="status" aria-live="polite" className={`flex flex-col items-start gap-3 ${className}`}>
      <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-kaasen-yellow text-[22px] font-extrabold text-kaasen-blue">
        ✓
      </span>
      <h3 className="m-0 text-[22px]">{title}</h3>
      {children && <p className="m-0 text-body leading-[1.65] text-ink/80">{children}</p>}
      {action}
    </div>
  );
}
