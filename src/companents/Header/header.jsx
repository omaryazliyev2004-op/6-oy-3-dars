import React from 'react'

export default function Header() {
    return (
        <div className='max-w-[1536px]  bg-[#232536] ' >
            <header className='bg-[#232536] px-[50px] xc:px-[140px] h-[80px]  flex items-center justify-between '>
                <a href="#">
                    <img src="/img/Logo.svg" alt="" />
                </a>
                <div className='hidden gap-[32px] aq:flex'>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)] ' href="#">Home</a>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)] opacity-[60%]  ' href="#">Service</a>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)] opacity-[60%]  ' href="#">Company</a>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)] opacity-[60%]  ' href="#">Career</a>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)] opacity-[60%]  ' href="#">Blog</a>
                    <a className='font-medium leading-[24px] text-[rgba(255_255_2551)]  opacity-[60%] ' href="#">Contact us</a>
                    <a
                        className="font-medium leading-[24px] text-[#FFD3AF] flex items-center gap-[10px] "
                        href="#"
                    >
                        Clone project{" "}
                        <i
                            className="fa-solid fa-arrow-right"
                            style={{ color: "rgba(255, 255, 255, 1)" }}
                        ></i>
                    </a>
                </div>
                <div className='aq:hidden '>
                    <i
                        className="fa-solid fa-bars text-[24px]"
                        style={{ color: "rgba(255, 255, 255, 1)" }}
                    ></i>
                </div>
            </header>
            <nav className='flex items-center justify-between px-[50px] xc:px-[140px] pt-[96px]'>
                <div className=''>
                    <div className='w-[24px] h-[24px] bg-[#FFFFFF0F] rotation-[90]'></div>
                    <h2 className='mt-[24px] text-[56px] leading-[68px] text-[#FFFFFF] max-w-[600px]  '>Transform Your Idea Into Reality with Finsweet</h2>
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
                <div>
                    <div className="relative inline-block bg-[#23253a] p-7">
                        <img src="/img/Image.svg" alt="" />
                        <span className="absolute left-7 top-7 h-[26px] w-[26px] bg-[#f6a25c]" />
                        <span className="absolute left-7 top-[53px] h-[14px] w-[14px] bg-[#4c4cff]" />
                        <span className="absolute left-7 bottom-7 h-[26px] w-[26px] bg-[#f6a25c]" />
                        <span className="absolute left-7 bottom-[53px] h-[14px] w-[14px] bg-[#4c4cff]" />

                        <span className="absolute right-7 top-7 h-[74px] w-[24px] bg-[#f6a25c]" />
                        <span className="absolute right-7 top-[101px] h-[200px] w-[24px] bg-[#ffd4ad]" />
                        <span className="absolute right-7 top-[301px] h-[46px] w-[24px] bg-[#4c4cff]" />
                    </div>

                </div>
            </nav>
            <div className='flex items-center pt-[32px] pb-[32px] justify-between px-[50px] xc:px-[140px]'>
                <div>
                    <span className='font-medium text-[14px] leading-[20px] text-[#FFFFFF] opacity-[60%] '>Our Clients</span>
                    <p className='text-[#FFFFFF] font-medium text-[18px] leading-[28px] '>We've Worked with</p>
                </div>
                <img src="/img/a1.png" alt="" />
                <img src="/img/a2.png" alt="" />
                <img src="/img/a3.png" alt="" />
                <img src="/img/a4.png" alt="" />
                <img src="/img/a5.png" alt="" />
            </div>
        </div>
    )
}
