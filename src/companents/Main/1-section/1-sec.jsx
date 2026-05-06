import React from 'react'

export default function Sec_1() {
    return (
        <section className='mx-[20px] px-[20px] py-[72px] sm:mx-[50px] sm:px-[50px] lg:py-[98px] xc:mx-[100px] xc:px-[80px]'>
            <div className='grid gap-[32px] lg:grid-cols-2 lg:items-center'>
                <div>
                    <p className='font-medium text-[14px] leading-[20px] space-x-[3px] text-[#000000] '>ABOUT US</p>
                    <h2 className='mt-[16px] text-[32px] font-bold leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>The company leads entire webdesign process from concept to delivery.</h2>
                </div>
                <div>
                    <h4 className='text-[28px] font-bold leading-[40px] text-[#232536] sm:text-[36px] sm:leading-[54px]'>The Era Of Technology.</h4>
                    <p className='font-normal mt-[16px] leading-[24px] text-[#5D5F6D] '>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
            </div>
            <div className="relative mt-[48px] block bg-white p-3">
                <div className="grid gap-2 sm:grid-cols-3">
                    <img
                        src="/img/rasm1.svg"
                        alt="team"
                        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[446px]"
                    />
                    <img
                        src="/img/rasm2.svg"
                        alt="meeting"
                        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[446px]"
                    />
                    <img
                        src="/img/rasm3.svg"
                        alt="office"
                        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[446px]"
                    />
                </div>

                <span className="absolute right-3 top-3 h-[82px] w-[10px] bg-[#f5a25d]" />
                <span className="absolute right-3 top-[95px] h-[104px] w-[10px] bg-[#ffd7b5]" />
                <span className="absolute right-3 top-[199px] h-[58px] w-[10px] bg-[#4c4cff]" />
            </div>
            <div className="mt-[48px] flex flex-wrap items-start gap-10">
                <div>
                    <h3 className="text-[36px] font-semibold text-[#23233a]">1560+</h3>
                    <div className="mt-2 flex items-center gap-[2px]">
                        <span className="h-[4px] w-[10px] bg-[#4c4cff]"></span>
                        <span className="h-[4px] w-[46px] bg-[#f5a25d]"></span>
                    </div>
                    <p className="mt-2 text-[16px] text-[#23233a]">Project Delivered</p>
                </div>

                <div>
                    <h3 className="text-[36px] font-semibold text-[#23233a]">100+</h3>
                    <div className="mt-2 flex items-center gap-[2px]">
                        <span className="h-[4px] w-[10px] bg-[#4c4cff]"></span>
                        <span className="h-[4px] w-[46px] bg-[#f5a25d]"></span>
                    </div>
                    <p className="mt-2 text-[16px] text-[#23233a]">Professional</p>
                </div>

                <div>
                    <h3 className="text-[36px] font-semibold text-[#23233a]">950+</h3>
                    <div className="mt-2 flex items-center gap-[2px]">
                        <span className="h-[4px] w-[10px] bg-[#4c4cff]"></span>
                        <span className="h-[4px] w-[46px] bg-[#f5a25d]"></span>
                    </div>
                    <p className="mt-2 text-[16px] text-[#23233a]">Happy Client</p>
                </div>

                <div>
                    <h3 className="text-[36px] font-semibold text-[#23233a]">10 yrs</h3>
                    <div className="mt-2 flex items-center gap-[2px]">
                        <span className="h-[4px] w-[10px] bg-[#4c4cff]"></span>
                        <span className="h-[4px] w-[46px] bg-[#f5a25d]"></span>
                    </div>
                    <p className="mt-2 text-[16px] text-[#23233a]">Experience</p>
                </div>

                <a
                    href="#"
                    className="mt-6 flex items-center gap-3 text-[16px] font-medium text-[#4c4cff] sm:ml-auto"
                >
                    Read about us
                    <span className="text-[24px] text-[#000000] leading-none">→</span>
                </a>
            </div>


        </section>
    )
}
