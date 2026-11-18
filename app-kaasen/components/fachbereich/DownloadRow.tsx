type DownloadRowProps = { title: string; kicker?: string; format: string; url: string | null };

const actionClass = "flex-none rounded-full px-3.5 py-[9px] text-[12.5px] font-bold";

/** One file row: format badge, title, download link (disabled while the PDF is pending). */
export function DownloadRow({ title, kicker, format, url }: DownloadRowProps) {
  return (
    <li className="flex items-center gap-3 rounded-[16px] border border-line bg-white p-3.5">
      <span aria-hidden="true" className="grid h-[52px] w-11 flex-none place-items-center rounded-lg bg-kaasen-blue text-[11px] font-extrabold tracking-[.06em] text-kaasen-yellow">
        {format}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        {kicker && <span className="text-[11px] font-bold uppercase tracking-[.1em] text-accent">{kicker}</span>}
        <strong className="text-sm leading-[1.35] text-kaasen-blue">{title}</strong>
      </span>
      {url ? (
        <a href={url} download className={`${actionClass} bg-kaasen-yellow text-kaasen-blue hover:bg-kaasen-blue hover:text-kaasen-yellow`}>
          Herunterladen<span className="sr-only">: {title}</span>
        </a>
      ) : (
        <span aria-disabled="true" title="PDF folgt" className={`${actionClass} bg-sand text-kaasen-blue/60`}>
          PDF folgt
        </span>
      )}
    </li>
  );
}
