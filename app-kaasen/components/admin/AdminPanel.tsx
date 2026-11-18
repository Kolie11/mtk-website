type AdminPanelProps = { title: string; actions?: React.ReactNode; children: React.ReactNode };

export function AdminPanel({ title, actions, children }: AdminPanelProps) {
  return (
    <section className="flex flex-col gap-4 rounded-card border border-line bg-white p-[clamp(16px,2.4vw,24px)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="m-0 text-lg">{title}</h2>
        {actions}
      </div>
      {children}
    </section>
  );
}
