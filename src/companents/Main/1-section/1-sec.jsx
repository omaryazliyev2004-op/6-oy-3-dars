import React from 'react'

export default function Sec_1() {
    return (
        <section className='pt-[120px] pb-[98px] max-w-[1530px] px-[140px]'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-medium text-[14px] leading-[20px] space-x-[3px] text-[#000000] '>ABOUT US</p>
                    <h2 className='mt-[16px] font-bold text-[48px] leading-[58px] text-[#232536] '>The company leads entire webdesign process from concept to delivery.</h2>
                </div>
                <div>
                    <h4 className='font-bold text-[36px] leading-[54px] text-[#232536]'>The Era Of Technology.</h4>
                    <p className='font-normal mt-[16px] leading-[24px] text-[#5D5F6D] '>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
            </div>
            <div className="relative inline-block bg-white p-3 mt-[48px] ">
                <div className="grid grid-cols-3 gap-1">
                    <img
                        src="/img/rasm1.svg"
                        alt="team"
                        className="h-[446px] object-cover"
                    />
                    <img
                        src="/img/rasm2.svg"
                        alt="meeting"
                        className="h-[446px] object-cover"
                    />
                    <img
                        src="/img/rasm3.svg"
                        alt="office"
                        className="h-[446px] object-cover"
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
                    className="ml-auto mt-6 flex items-center gap-3 text-[16px] font-medium text-[#4c4cff]"
                >
                    Read about us
                    <span className="text-[24px] text-[#000000] leading-none">→</span>
                </a>
            </div>


        </section>
    )
}
