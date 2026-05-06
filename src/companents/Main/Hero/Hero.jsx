import React from 'react'

export default function Hero() {
    return (
        <section className='bg-[#232536]'>
            <nav className='mx-[20px] flex flex-col items-start justify-between gap-[48px] px-[20px] pt-[64px] sm:mx-[50px] sm:px-[50px] lg:flex-row lg:items-center lg:pt-[96px] xc:mx-[100px] xc:px-[80px]'>
                <div className=''>
                    <div className='w-[24px] h-[24px] bg-[#FFFFFF0F] rotation-[90]'></div>
                    <h2 className='mt-[24px] max-w-[600px] text-[34px] font-semibold leading-[44px] text-[#FFFFFF] sm:text-[44px] sm:leading-[56px] lg:text-[56px] lg:leading-[68px]'>Transform Your Idea Into Reality with Finsweet</h2>
                    <p className='max-w-[480px] font-normal leading-[24px] text-[#FFFFFF] opacity-[60%] mt-[24px] '>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <button className="mt-[32px] relative flex h-16 w-[219px] items-center justify-between overflow-hidden bg-[#4c4cff] px-5 pl-9 text-white">
                        <span className="absolute left-0 top-0 h-[32px] w-[32px]">
                            <span className="absolute left-0 top-0 h-[22px] w-[22px] bg-[#ffb067]" />
                            <span className="absolute left-[22px] top-0 h-[10px] w-[10px] bg-white/30" />
                            <span className="absolute left-0 top-[22px] h-[10px] w-[10px] bg-white/20" />
                        </span>

                        <span className="text-[18px] font-normal leading-none">Request Quote</span>
                        <span className="text-[24px] leading-none">→</span>
                    </button>
                </div>
                <div className='w-full lg:w-auto'>
                    <div className="relative inline-block w-full max-w-[560px] bg-[#23253a] p-3 sm:p-7">
                        <img src="/img/Image.png" alt="" className='w-full' />
                        <span className="absolute left-3 top-3 h-[20px] w-[20px] bg-[#f6a25c] sm:left-7 sm:top-7 sm:h-[26px] sm:w-[26px]" />
                        <span className="absolute left-3 top-[32px] h-[12px] w-[12px] bg-[#4c4cff] sm:left-7 sm:top-[53px] sm:h-[14px] sm:w-[14px]" />
                        <span className="absolute bottom-3 left-3 h-[20px] w-[20px] bg-[#f6a25c] sm:bottom-7 sm:left-7 sm:h-[26px] sm:w-[26px]" />
                        <span className="absolute bottom-[32px] left-3 h-[12px] w-[12px] bg-[#4c4cff] sm:bottom-[53px] sm:left-7 sm:h-[14px] sm:w-[14px]" />

                        <span className="absolute right-3 top-3 h-[18%] w-[14px] bg-[#f6a25c] sm:right-7 sm:top-7 sm:w-[24px]" />
                        <span className="absolute right-3 top-[22%] h-[42%] w-[14px] bg-[#ffd4ad] sm:right-7 sm:w-[24px]" />
                        <span className="absolute right-3 top-[64%] h-[13%] w-[14px] bg-[#4c4cff] sm:right-7 sm:w-[24px]" />
                    </div>

                </div>
            </nav>
            <div className='mx-[20px] grid grid-cols-2 items-center gap-[24px] px-[20px] pb-[32px] pt-[32px] sm:mx-[50px] sm:px-[50px] md:grid-cols-3 lg:flex lg:justify-between xc:mx-[100px] xc:px-[80px]'>
                <div className='col-span-2 md:col-span-3 lg:col-span-1'>
                    <span className='font-medium text-[14px] leading-[20px] text-[#FFFFFF] opacity-[60%] '>Our Clients</span>
                    <p className='text-[#FFFFFF] font-medium text-[18px] leading-[28px] '>We've Worked with</p>
                </div>
                <img src="/img/a1.png" alt="" className='max-w-[140px]' />
                <img src="/img/a2.png" alt="" className='max-w-[140px]' />
                <img src="/img/a3.png" alt="" className='max-w-[140px]' />
                <img src="/img/a4.png" alt="" className='max-w-[140px]' />
                <img src="/img/a5.png" alt="" className='max-w-[140px]' />
            </div>
        </section>
    )
}
