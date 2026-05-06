import React from 'react'

export default function Sec_6() {
    return (
        <section className='max-w-[1530px] bg-[#ECF8F9] px-[20px] py-[72px] sm:px-[50px] lg:py-[96px] xc:px-[140px]'>
            <div className='w-[16px] h-[16px] bg-[#666DFF] '></div>
            <h3 className='mt-[19px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>Read our latest blogs & news</h3>
            <div className='mt-[48px] grid gap-[24px] lg:grid-cols-2'>
                <div className='bg-white flex flex-col gap-[24px] sm:flex-row sm:items-center sm:gap-[32px]'>
                    <img src="/img/people1.svg" alt="" className='h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]' />
                    <div className='px-[24px] pb-[28px] sm:px-0 sm:pb-0 sm:pr-[24px]'>
                        <span className='font-[500] text-[14px] leading-[14px] text-[#232536] opacity-[60%] '>Jan 19, 2021</span>
                        <h4 className='mt-[8px] font-[600] text-[24px] leading-[36px] text-[#232536] max-w-[264px] '>Today’s best design trends for digital products</h4>
                        <a
                            href="#"
                            className=" mt-[24px] flex items-center gap-3 text-[16px] font-medium text-[#4c4cff]"
                        >
                            Read More
                            <span className="text-[24px] text-[#000000] leading-none">→</span>
                        </a>
                    </div>
                </div>
                <div className='bg-white flex flex-col gap-[24px] sm:flex-row sm:items-center sm:gap-[32px]'>
                    <img src="/img/people2.svg" alt="" className='h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]' />
                    <div className='px-[24px] pb-[28px] sm:px-0 sm:pb-0 sm:pr-[24px]'>
                        <span className='font-[500] text-[14px] leading-[14px] text-[#232536] opacity-[60%] '>Jan 19, 2021</span>
                        <h4 className='mt-[8px] font-[600] text-[24px] leading-[36px] text-[#232536] max-w-[264px] '>A practical guide to building a brand strategy</h4>
                        <a
                            href="#"
                            className=" mt-[24px] flex items-center gap-3 text-[16px] font-medium text-[#4c4cff]"
                        >
                            Read More
                            <span className="text-[24px] text-[#000000] leading-none">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
