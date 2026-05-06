import React from 'react'

export default function Contact() {
    return (
        <section className='px-[140px] py-[96px]'>
            <div className='flex items-start justify-between gap-[80px]'>

                <div className='flex-1'>
                    <div className='w-[24px] h-[24px] bg-[#FFD3AF]'></div>
                    <p className='mt-[24px] font-[500] text-[14px] tracking-[3px] text-[#232536]'>CONTACT US</p>
                    <h2 className='mt-[16px] font-[700] text-[48px] leading-[58px] text-[#232536]'>
                        Have a Question ? <br />
                        Let's Get in Touch with us 👋
                    </h2>
                    <p className='mt-[16px] text-[#232536] opacity-[70%]'>
                        Fill up the Form and our team will get back to within 24 hrs
                    </p>

                    <div className='mt-[48px] flex flex-col gap-[32px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <label className='text-[14px] text-[#232536]'>Name</label>
                            <input
                                type='text'
                                placeholder='Paresh Srichandan'
                                className='border-b border-[#232536] outline-none pb-[8px] text-[#232536] placeholder:text-[#232536] bg-transparent'
                            />
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            <label className='text-[14px] text-[#232536]'>E-mail</label>
                            <input
                                type='email'
                                placeholder='Paresh@pixeto.com'
                                className='border-b border-[#232536] outline-none pb-[8px] text-[#232536] placeholder:text-[#232536] bg-transparent'
                            />
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            <label className='text-[14px] text-[#232536]'>Subject</label>
                            <input
                                type='text'
                                placeholder='For web design work Enquire'
                                className='border-b border-[#232536] outline-none pb-[8px] text-[#232536] placeholder:text-[#232536] bg-transparent'
                            />
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            <label className='text-[14px] text-[#232536]'>Messege</label>
                            <input
                                type='text'
                                placeholder='Type your Messege'
                                className='border-b border-[#FFA155] outline-none pb-[8px] text-[#232536]  bg-transparent'
                            />
                        </div>
                    </div>

                    <div className='mt-[48px] flex items-center gap-[16px]'>
                        <button className="mt-[32px] relative flex h-16 w-[213px] items-center justify-between overflow-hidden bg-[#4c4cff] px-5 pl-9 text-white">
                            <span className="absolute left-0 top-0 h-[32px] w-[32px]">
                                <span className="absolute left-0 top-0 h-[22px] w-[22px] bg-[#ffb067]" />
                                <span className="absolute left-[22px] top-0 h-[10px] w-[10px] bg-white/30" />
                                <span className="absolute left-0 top-[22px] h-[10px] w-[10px] bg-white/20" />
                            </span>

                            <span className="text-[18px] font-normal leading-none">Send Messege</span>
                            <span className="text-[24px] leading-none">→</span>
                        </button>
                    </div>
                </div>

                <div className='relative w-[420px] flex-shrink-0'>
                    <div className='absolute -top-[16px] -right-[16px] flex'>
                        <div className='w-[48px] h-[32px] bg-[#FFD3AF]'></div>
                        <div className='w-[32px] h-[32px] bg-[#FFA155]'></div>
                    </div>

                    <div className='bg-[#444CFC] px-[48px] py-[64px] text-white relative z-10'>

                        <div className='mb-[40px]'>
                            <p className='text-[14px] opacity-[70%] mb-[16px]'>Location</p>
                            <div className='border-b border-white opacity-[30%] mb-[16px]'></div>
                            <p className='font-[600] text-[20px] leading-[30px]'>
                                DLF Cybercity, Bhubaneswar, <br /> India, &52050
                            </p>
                        </div>

                        <div className='mb-[40px]'>
                            <p className='text-[14px] opacity-[70%] mb-[16px]'>Working Hour</p>
                            <div className='border-b border-white opacity-[30%] mb-[16px]'></div>
                            <p className='font-[600] text-[20px]'>Monday To Friday</p>
                            <p className='font-[600] text-[20px]'>9:00 AM to 8:00 PM</p>
                            <p className='text-[14px] opacity-[70%] mt-[8px]'>Our Support Team is available 24Hrs</p>
                        </div>

                        <div className='mb-[48px]'>
                            <p className='text-[14px] opacity-[70%] mb-[16px]'>Contact Us</p>
                            <div className='border-b border-white opacity-[30%] mb-[16px]'></div>
                            <p className='font-[600] text-[20px]'>020 7993 2905</p>
                            <p className='text-[14px] opacity-[70%] mt-[4px]'>Hello@ether.com</p>
                        </div>

                        <div className='flex items-center gap-[24px]'>
                            <i className='fa-brands fa-facebook text-white text-[20px] cursor-pointer hover:opacity-70'></i>
                            <i className='fa-brands fa-twitter text-white text-[20px] cursor-pointer hover:opacity-70'></i>
                            <i className='fa-brands fa-instagram text-white text-[20px] cursor-pointer hover:opacity-70'></i>
                            <i className='fa-brands fa-linkedin text-white text-[20px] cursor-pointer hover:opacity-70'></i>
                        </div>
                    </div>

                    <div className='absolute -bottom-[0px] -left-[16px]'>
                        <div className='w-[32px] h-[48px] bg-[#FFA155]'></div>
                    </div>
                </div>

            </div>
            <div className="mt-[80px] w-full h-[450px]">
                <iframe
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=New+York&output=embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}