import React from "react";

export default function Sec_6() {
  return (
    <section className="mx-[20px] bg-white px-[20px] py-[72px] sm:mx-[50px] sm:px-[50px] lg:py-[120px] xc:mx-[100px] xc:px-[80px]">
      <div className="relative min-h-[333px] w-full overflow-hidden bg-[#666DFF] px-[24px] py-[56px] sm:px-[48px] lg:px-[96px] lg:py-[72px]">
        <div className="absolute left-0 top-0 grid grid-cols-2 gap-0">
          <span className="h-[20px] w-[20px] bg-[#FFA155]" />
          <span className="h-[20px] w-[20px] bg-[#FFD3AF]" />
          <span className="h-[20px] w-[20px] bg-[#FFD3AF]" />
          <span className="h-[20px] w-[20px] bg-[#666DFF]" />
        </div>

        <div className="absolute right-0 top-0 flex h-full w-[12px] flex-col">
          <span className="h-[39px] bg-[#FFA155]" />
          <span className="h-[125px] bg-[#FFD3AF]" />
          <span className="flex-1 bg-[#666DFF]" />
          <span className="h-[32px] bg-[#444CFC]" />
        </div>

        <div className="flex h-full flex-col items-start justify-between gap-[32px] lg:flex-row lg:items-center lg:gap-[60px]">
          <div className="max-w-[490px]">
            <p className="text-[14px] font-medium uppercase tracking-[3px] text-white">
              Newsletter
            </p>

            <h2 className="mt-[14px] text-[28px] font-semibold leading-[40px] text-white sm:text-[36px] sm:leading-[54px]">
              Subscribe our News Letter
              <br />
              to get Latest Updates.
            </h2>
          </div>

          <form className="w-full max-w-[454px]">
            <input
              type="email"
              placeholder="Paresh@Pixoto.com"
              className="h-[64px] w-full border-none bg-white px-[28px] text-[16px] text-[#232536] outline-none placeholder:text-[#A0A3BD]"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
