import React from 'react'

export default function RecentPost() {
    return (
        <section className='px-[140px] py-[96px]'>
            <h2 className='font-[700] text-[40px] text-[#232536] mb-[48px]'>Read Recent Post</h2>

            <div className='grid grid-cols-2 gap-[24px]'>

                <div className='flex border-[2px]  border-transparent hover:border-[#F5A623] transition-all duration-300'>
                    <div className='w-[260px] flex-shrink-0 overflow-hidden'>
                        <img src="/img/post1.png" alt="" className='w-full h-full object-cover' />
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

                <div className='flex border-[2px] border-transparent hover:border-[#F5A623] transition-all duration-300'>
                    <div className='w-[260px] flex-shrink-0 overflow-hidden'>
                        <img src="/img/post2.png" alt="" className='w-full h-full object-cover' />
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

                <div className='flex border-[2px] border-transparent hover:border-[#F5A623] transition-all duration-300'>
                    <div className='w-[260px] flex-shrink-0 overflow-hidden'>
                        <img src="/img/post3.png" alt="" className='w-full h-full object-cover' />
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

                <div className='flex border-[2px] border-transparent hover:border-[#F5A623] transition-all duration-300'>
                    <div className='w-[260px] flex-shrink-0 overflow-hidden'>
                        <img src="/img/post4.png" alt="" className='w-full h-full object-cover' />
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