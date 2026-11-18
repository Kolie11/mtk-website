import React from 'react';

// Partner & Hersteller
export default function Partner({ v }) {
  return (
    <>
    {v.partnersOld && (
      <>
        <section className="p-[clamp(40px,5vw,72px)_clamp(16px,3vw,36px)_0]" id="kPartner">
          <div className="max-w-[1280px] mx-auto my-0 flex flex-col gap-[clamp(20px,2.4vw,32px)]">
            <div className="flex flex-col gap-[12px]">
              <span className="text-[length:11.5px] tracking-[.22em] uppercase text-[#3a4bb8] font-bold">
                {"Partner"}
              </span>
              <h2 className="text-[length:clamp(26px,3.2vw,42px)]">
                {"Wir arbeiten zusammen mit …"}
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,170px),1fr))] gap-[12px]">
              {(v.partners || []).map((pt, index) => (
                <React.Fragment key={index}>
                  <a className="grid place-items-center h-[96px] p-[18px] rounded-[18px] bg-[#fff] [border:1px_solid_rgba(20,28,92,.08)] [transition:border-color_.2s_ease,transform_.25s_ease] hover:border-[color:#141c5c]! hover:[transform:translateY(-3px)]!" href={pt?.url} target="_blank" rel="noopener" title={pt?.name}>
                    {pt?.hasLogo && (
                      <>
                        <img className="max-w-full max-h-[56px] object-contain block" src={pt?.logo} alt={pt?.name} />
                      </>
                    )}
                    {pt?.noLogo && (
                      <>
                        <span className="text-[length:15px] font-bold text-[#141c5c] text-center">
                          {pt?.name}
                        </span>
                      </>
                    )}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </>
    )}
    </>
  );
}
