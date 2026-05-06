import React from 'react'

export default function Sec_5() {
    return (
        <section className='mx-[20px] flex flex-col items-start justify-between gap-[48px] bg-[#F9F9FF] px-[20px] py-[72px] sm:mx-[50px] sm:px-[50px] lg:flex-row lg:items-center lg:py-[102px] xc:mx-[100px] xc:px-[80px]'>
            <div>
                <div className='w-[16px] h-[16px] bg-[#666DFF] '></div>
                <h2 className='mt-[16px] max-w-[492px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>Our customers love what we do</h2>
                <p className='mt-[16px] font-[500] text-[18px] leading-[28px] text-[#232536] '>Transform your idea into reality with finsweet</p>
                <p className='mt-[16px] font-[400] text-[16px] leading-[24px] text-[#232536] opacity-[87%] max-w-[492px] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <div className='mt-[24px] flex items-center gap-[12px]'>
                    <img src="/img/man1.png" alt="" />
                    <img src="/img/man2.png" alt="" />
                    <img src="/img/man3.png" alt="" />
                </div>
                <p className='mt-[14px] font-[500] text-[12px] text-[#232536] flex items-center '><span className='text-[16px]'>30</span>+ Customer Reviews</p>
            </div>
            <div className="w-full lg:w-auto">
                <div className="relative min-h-[359px] w-full max-w-[607px] bg-white">
                    <div className="absolute left-0 top-0 flex h-full w-[14px] flex-col">
                        <span className="h-[79px] bg-[#FFA155]" />
                        <span className="flex-1 bg-[#FFD3AF]" />
                        <span className="h-[49px] bg-[#444CFC]" />
                    </div>

                    <span className="absolute right-[40px] top-[20px] text-[64px] font-bold leading-none text-[#232536]">
                        "
                    </span>

                    <div className="pl-[36px] pr-[24px] pt-[52px] sm:pl-[57px] sm:pr-[48px]">
                        <h3 className="max-w-[498px] text-[20px] font-[600] leading-[30px] text-[#232536] sm:text-[24px] sm:leading-[36px]">
                            Finsweet has been a wonderful partner to work with. I have been a
                            customer now for the past few months now and I have had nothing
                            but positive experiences!
                        </h3>

                        <div className="mt-[32px] flex flex-col items-start gap-[20px] sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-[12px]">
                                <img
                                    src="/img/man1.png"
                                    alt="Johnny Andro"
                                    className="h-[38px] w-[38px] rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="text-[16px] font-semibold leading-[24px] text-[#232536]">
                                        Johnny Andro
                                    </h4>
                                    <p className="text-[14px] leading-[20px] text-[#5D5F6D]">
                                        Director, Company
                                    </p>
                                </div>
                            </div>

                            <img
                                src="/img/ipsum.png"
                                alt="logoipsum"
                                className=""
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-[-28px] left-1/2 flex -translate-x-1/2 items-center gap-[10px]">
                        <span className="h-[10px] w-[10px] rounded-full bg-[#232536]" />
                        <span className="h-[10px] w-[10px] rounded-full bg-[#D6D6E3]" />
                        <span className="h-[10px] w-[10px] rounded-full bg-[#D6D6E3]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
