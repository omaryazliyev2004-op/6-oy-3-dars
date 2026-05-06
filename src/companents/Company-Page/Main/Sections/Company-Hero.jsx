import React from 'react'

export default function Company_Hero() {
  return (
    <section className='max-w-[1530px] px-[20px] py-[72px] sm:px-[50px] lg:py-[98px] xc:px-[140px]'>
      <div className='flex flex-col items-start justify-between gap-[32px] lg:flex-row'>
        <div>
          <div className='w-[28px] h-[28px] bg-[#FFD3AFFF] '></div>
          <p className='mt-[24px] font-[500] text-[14px] space-x-[3px] text-[#000000] '>COMPANY</p>
          <h2 className='mt-[20px] max-w-[664px] text-[32px] font-[600] leading-[42px] text-[#232536] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]'>Award-winning Company seen and used by millions around the world.</h2>
          <p className='mt-[24px] max-w-[700px] font-[400] leading-[24px] text-[#232536] '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
        </div>
        <div>
          <img src="/img/Shapes.svg" alt="" />
        </div>
      </div>
      <div>
        <div className='flex justify-end'>
          <div className='w-[346px] h-[20px] flex items-center justify-end mt-[64px] '>
            <span className='bg-[#FFA155] w-[30%] h-[20px] '></span>
            <span className='bg-[#FFD3AF] w-[50%] h-[20px] '></span>
            <span className='bg-[#444CFC] w-[20%] h-[20px] '></span>
          </div>
        </div>
        <div className='grid gap-[20px] sm:grid-cols-3'>
          <img src="/img/people3.svg" alt="" className='w-full object-cover' />
          <img src="/img/people4.svg" alt="" className='w-full object-cover' />
          <img src="/img/people5.svg" alt="" className='w-full object-cover' />
        </div>
      </div>
    </section>
  )
}
