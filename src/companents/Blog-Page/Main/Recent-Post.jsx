import React from 'react'

export default function RecentPost() {
    return (
        <section className='mx-[20px] px-[20px] sm:mx-[50px] xc:mx-[100px] py-[72px] sm:px-[50px] lg:py-[96px] xc:px-[140px]'>
            <h2 className='mb-[48px] text-[32px] font-[700] text-[#232536] sm:text-[40px]'>Read Recent Post</h2>

            <div className='grid gap-[24px] lg:grid-cols-2'>

                <div className='flex flex-col border-[2px] border-transparent transition-all duration-300 hover:border-[#F5A623] sm:flex-row'>
                    <div className='h-[220px] w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-[260px]'>
                        <img src="/img/post1.png" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center px-[32px] py-[24px]'>
                        <h3 className='font-[700] text-[22px] text-[#232536] leading-[32px] mb-[24px]'>
                            Today's best design trends for digital products
                        </h3>
                        <div className='flex items-center gap-[12px]'>
                            <img src="/img/profil.png" alt="" className='w-[36px] h-[36px] rounded-full object-cover' />
                            <div>
                                <p className='font-[500] text-[14px] text-[#232536]'>Andrew Jonson</p>
                                <p className='text-[13px] text-[#5D5F6D]'>Jan 19, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col border-[2px] border-transparent transition-all duration-300 hover:border-[#F5A623] sm:flex-row'>
                    <div className='h-[220px] w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-[260px]'>
                        <img src="/img/post2.png" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center px-[32px] py-[24px]'>
                        <h3 className='font-[700] text-[22px] text-[#232536] leading-[32px] mb-[24px]'>
                            Today's best design trends for digital products
                        </h3>
                        <div className='flex items-center gap-[12px]'>
                            <img src="/img/profil.png" alt="" className='w-[36px] h-[36px] rounded-full object-cover' />
                            <div>
                                <p className='font-[500] text-[14px] text-[#232536]'>Andrew Jonson</p>
                                <p className='text-[13px] text-[#5D5F6D]'>Jan 19, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col border-[2px] border-transparent transition-all duration-300 hover:border-[#F5A623] sm:flex-row'>
                    <div className='h-[220px] w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-[260px]'>
                        <img src="/img/post3.png" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center px-[32px] py-[24px]'>
                        <h3 className='font-[700] text-[22px] text-[#232536] leading-[32px] mb-[24px]'>
                            Today's best design trends for digital products
                        </h3>
                        <div className='flex items-center gap-[12px]'>
                            <img src="/img/profil.png" alt="" className='w-[36px] h-[36px] rounded-full object-cover' />
                            <div>
                                <p className='font-[500] text-[14px] text-[#232536]'>Andrew Jonson</p>
                                <p className='text-[13px] text-[#5D5F6D]'>Jan 19, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col border-[2px] border-transparent transition-all duration-300 hover:border-[#F5A623] sm:flex-row'>
                    <div className='h-[220px] w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-[260px]'>
                        <img src="/img/post4.png" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center px-[32px] py-[24px]'>
                        <h3 className='font-[700] text-[22px] text-[#232536] leading-[32px] mb-[24px]'>
                            Today's best design trends for digital products
                        </h3>
                        <div className='flex items-center gap-[12px]'>
                            <img src="/img/profil.png" alt="" className='w-[36px] h-[36px] rounded-full object-cover' />
                            <div>
                                <p className='font-[500] text-[14px] text-[#232536]'>Andrew Jonson</p>
                                <p className='text-[13px] text-[#5D5F6D]'>Jan 19, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
