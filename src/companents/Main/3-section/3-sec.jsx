import React from 'react'

export default function Sec_3() {
    return (
        <section className="mx-[20px] bg-[#FFE6D2] px-[20px] py-[72px] sm:mx-[50px] sm:px-[50px] lg:py-[96px] xc:mx-[100px] xc:px-[80px]">
            <div>
                <p className='text-[14px] leading-[20px] space-x-[3px] text-[#000000] opacity-[87%] font-[500] '>OUR SERVICES</p>
                <h2 className='mt-[12px] max-w-[730px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>We build software solutions that solve client's business challenges</h2>
                <button className="mt-[40px] relative flex h-16 w-[219px] items-center justify-between overflow-hidden bg-[#4c4cff] px-5 pl-9 text-white">
                    <span className="absolute left-0 top-0 h-[32px] w-[32px]">
                        <span className="absolute left-0 top-0 h-[22px] w-[22px] bg-[#ffb067]" />
                        <span className="absolute left-[22px] top-0 h-[10px] w-[10px] bg-white/30" />
                        <span className="absolute left-0 top-[22px] h-[10px] w-[10px] bg-white/20" />
                    </span>

                    <span className="text-[18px] font-normal leading-none">Start a Project</span>
                    <span className="text-[24px] leading-none">→</span>
                </button>
            </div>
            <div className='mt-[56px] grid gap-[24px] md:grid-cols-2 lg:mt-[80px] lg:grid-cols-3'>
                <div className='min-h-[335px] bg-[#FFFFFF] px-[28px] py-[36px] sm:px-[48px] sm:py-[44px]'>
                    <div className='w-[47px] h-[47px] bg-[#FFA1551A] rounded-[50%] grid items-center justify-center '>
                        <img src="/img/icon4.png" alt="" />
                    </div>
                    <h4 className='mt-[16px] font-[600] leading-[28px] text-[#000000] '>Technical support</h4>
                    <p className='max-w-[300px] font-[400] leading-[24px] tetx-[#5D5F6D] mt-[10px] '>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <a className='flex items-center gap-[10px] mt-[24px] font-[500] text-[#444CFC] ' href="#">
                        Read more
                        <span className="text-[24px] text-[#000000] leading-none">→</span>

                    </a>
                </div>
                <div className='min-h-[335px] bg-[#FFFFFF] px-[28px] py-[36px] sm:px-[48px] sm:py-[44px]'>
                    <div className='w-[47px] h-[47px] bg-[#FFA1551A] rounded-[50%] grid items-center justify-center '>
                        <img src="/img/icon5.png" alt="" />
                    </div>
                    <h4 className='mt-[16px] font-[600] leading-[28px] text-[#000000] '>Testing Management</h4>
                    <p className='max-w-[300px] font-[400] leading-[24px] tetx-[#5D5F6D] mt-[10px] '>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <a className='flex items-center gap-[10px] mt-[24px] font-[500] text-[#444CFC] ' href="#">
                        Read more
                        <span className="text-[24px] text-[#000000] leading-none">→</span>

                    </a>
                </div>
                <div className='min-h-[335px] bg-[#FFFFFF] px-[28px] py-[36px] sm:px-[48px] sm:py-[44px]'>
                    <div className='w-[47px] h-[47px] bg-[#FFA1551A] rounded-[50%] grid items-center justify-center '>
                        <img src="/img/icon6.png" alt="" />
                    </div>
                    <h4 className='mt-[16px] font-[600] leading-[28px] text-[#000000] '>Development</h4>
                    <p className='max-w-[300px] font-[400] leading-[24px] tetx-[#5D5F6D] mt-[10px] '>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <a className='flex items-center gap-[10px] mt-[24px] font-[500] text-[#444CFC] ' href="#">
                        Read more
                        <span className="text-[24px] text-[#000000] leading-none">→</span>

                    </a>
                </div>
            </div>
        </section>
    )
}
