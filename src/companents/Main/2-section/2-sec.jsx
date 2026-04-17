import React from "react";

const cards = [
  {
    title: "On Time Delivery",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    title: "Best Quality",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    title: "Support Assist",
    text: "Through True Rich Attended does no end it his mother since real had half every him.",
  },
];

export default function Sec_2() {
  return (
    <section className="mt-[96px] max-w-[1530px] px-[140px] bg-[#ECF8F9] px-[80px] py-[96px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-[80px]">
        <div className="max-w-[620px]">
          <p className="text-[14px] font-medium uppercase tracking-[3px] text-[#232536]">
            Our Expertise
          </p>

          <h2 className="mt-[16px] max-w-[520px] text-[48px] font-semibold leading-[58px] text-[#232536]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h2>

          <p className="mt-[24px] max-w-[510px] text-[16px] leading-[28px] text-[#5D5F6D]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="relative w-full max-w-[515px]">
          <span className="absolute left-0 top-[-8px] h-[16px] w-[16px] bg-[#444CFC]" />

          <div className="space-y-[12px] bg-transparent">
            {cards.map((item, index) => (
              <div
                key={index}
                className="flex gap-[16px] bg-white px-[24px] py-[28px] shadow-[0_2px_12px_rgba(35,37,54,0.06)]"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FFE6D2] text-[18px]">
                  <img src="/img/icon1.png" alt="" />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold leading-[28px] text-[#232536]">
                    {item.title}
                  </h3>
                  <p className="mt-[6px] text-[14px] leading-[24px] text-[#5D5F6D]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[10px] flex">
            <span className="h-[8px] w-[120px] bg-[#F7941D]" />
            <span className="h-[8px] flex-1 bg-[#444CFC]" />
          </div>
        </div>
      </div>
    </section>
  );
}
