// Weiterleitung zum Nextcloud-Upload
export default function RezeptUploadModal({ v }) {
  return (
    <>
    {v.rezUploadOpen && (
      <>
        <div className="fixed inset-0 z-[120] grid place-items-center p-[16px] bg-[color:rgba(20,28,92,.55)] [backdrop-filter:blur(4px)]">
          <div className="w-[min(520px,100%)] max-h-[calc(100vh_-_32px)] overflow-auto flex flex-col gap-[16px] p-[clamp(22px,3vw,32px)] rounded-[24px] bg-[#f7f4ec] text-[#282828] box-border" role="dialog" aria-label="Rezept hochladen">
            <div className="flex items-start justify-between gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <span className="text-[length:11px] tracking-[.14em] uppercase text-[#3a4bb8] font-bold">
                  {"Schritt 2 von 2 · Rezept hochladen"}
                </span>
                <h2 className="text-[length:clamp(22px,2.6vw,30px)] m-0">
                  {"Danke — jetzt Rezept hochladen."}
                </h2>
              </div>
              <button className="flex-none grid place-items-center w-[40px] h-[40px] [border:1px_solid_rgba(20,28,92,.16)] rounded-full bg-[#fff] text-[#141c5c] text-[length:18px] cursor-pointer" onClick={v.closeUpload} aria-label="Schließen">
                {"×"}
              </button>
            </div>
            <p className="m-0 text-[length:14.5px] leading-[1.65] text-[color:rgba(40,40,40,.78)]">
              {"Ihre Angaben sind bei uns eingegangen. Laden Sie Ihr Rezept jetzt auf unserer Nextcloud hoch — verschlüsselt, Serverstandort Deutschland."}
            </p>
            <a className="inline-flex items-center justify-center gap-[10px] p-[15px_24px] rounded-full bg-[#141c5c] text-[#fbf389] text-[length:15px] font-bold hover:bg-[#282828]!" href="https://nextcloud.kaasen.de/index.php/s/n6CBiiSMew9knW4" target="_blank" rel="noopener">
              {"Zur Nextcloud-Upload-Seite"}
            </a>
            <span className="text-[length:12.5px] leading-[1.55] text-[color:rgba(40,40,40,.7)]">
              {"Die Upload-Seite öffnet sich in einem neuen Tab."}
            </span>
          </div>
        </div>
      </>
    )}
    </>
  );
}
