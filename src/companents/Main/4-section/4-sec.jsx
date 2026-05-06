import React from "react";

const processCards = [
  {
    number: "01",
    title: "Discover",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "💡",
    highlighted: true,
  },
  {
    number: "02",
    title: "Designing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "✍️",
  },
  {
    number: "03",
    title: "Development",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "🧑‍💻",
  },
  {
    number: "04",
    title: "Testing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "🧪",
  },
  {
    number: "05",
    title: "Deployment",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "🚀",
  },
  {
    number: "06",
    title: "Maintenance",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    icon: "🛠️",
    highlighted: true,
  },
];

export default function Sec_4() {
  return (
    <section className="mx-[20px] bg-white px-[20px] py-[72px] sm:mx-[50px] sm:px-[50px] lg:py-[100px] xc:mx-[100px] xc:px-[80px]">
      <div>
        <div className="flex items-start justify-between gap-[24px]">
          <div className="max-w-[625px]">
            <p className="text-[14px] font-medium uppercase tracking-[3px] text-[#232536]">
              Our Process
            </p>

            <h2 className="mt-[16px] max-w-[770px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]">
              The process we are working With Our client 
            </h2>

            <p className="mt-[16px] max-w-[530px] text-[16px] leading-[28px] text-[#5D5F6D]">
              Through True Rich Attended does no end it his mother since real had
              half every him case in packages enquire we up ecstatic unsatiable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[2px] pt-[10px]">
            <span className="h-[8px] w-[8px] bg-[#FFD3AF]" />
            <span className="h-[8px] w-[8px] bg-[#444CFC]" />
            <span className="h-[8px] w-[8px] bg-[#444CFC]" />
            <span className="h-[8px] w-[8px] bg-[#FFD3AF]" />
          </div>
        </div>

        <div className="mt-[56px] grid gap-[24px] md:grid-cols-2 lg:mt-[68px] lg:grid-cols-3 lg:gap-[32px]">
          {processCards.map((item) => (
            <div
              key={item.number}
              className="relative border border-[#E8E8EC] bg-white px-[30px] py-[32px]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#2325361A] bg-white text-[16px]">
                  {item.icon}
                </div>

                <span className="text-[24px] font-semibold leading-none text-[#D6D6D6]">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-[24px] text-[16px] font-semibold leading-[28px] text-[#232536]">
                {item.title}
              </h3>

              <p className="mt-[8px] max-w-[240px] text-[14px] leading-[24px] text-[#5D5F6D]">
                {item.text}
              </p>

              {item.highlighted && (
                <div className="absolute bottom-0 left-0 flex h-[6px] w-full">
                  <span className="w-[110px] bg-[#FFA155]" />
                  <span className="w-[70px] bg-[#FFD3AF]" />
                  <span className="flex-1 bg-[#444CFC]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
