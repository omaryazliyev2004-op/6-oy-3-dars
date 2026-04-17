import React from 'react'

export default function Sec_6() {
    return (
        <section className='max-w-[1530px] px-[140px] bg-[#ECF8F9] py-[96px] '>
            <div className='w-[16px] h-[16px] bg-[#666DFF] '></div>
            <h3 className='mt-[19px] font-[600] text-[48px] leading-[58px] text-[#232536] '>Read our latest blogs & news</h3>
            <div className='flex items-center justify-between mt-[48px] '>
                <div className='w-[600px] h-[248px] bg-white flex items-center gap-[32px] '>
                    <img src="/img/people1.svg" alt="" />
                    <div>
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
                <div className='w-[600px] h-[248px] bg-white flex items-center gap-[32px] '>
                    <img src="/img/people2.svg" alt="" />
                    <div>
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
