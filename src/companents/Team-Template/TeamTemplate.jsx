import { useParams } from 'react-router-dom'

const teamData = [
  { id: 1, name: "Javena Melo", role: "Support Assist", img: "/img/adam1.png" },
  { id: 2, name: "John Smith", role: "Developer", img: "/img/adam2.png" },
  { id: 3, name: "Alex Brown", role: "Designer", img: "/img/adam3.png" },
  { id: 4, name: "Sara Jones", role: "UI/UX Designer", img: "/img/adam4.png" },
  { id: 5, name: "Mike Ross", role: "Marketing", img: "/img/adam5.png" },
  { id: 6, name: "Anna White", role: "Developer", img: "/img/adam6.png" },
  { id: 7, name: "Tom Black", role: "SEO Specialist", img: "/img/adam7.png" },
  { id: 8, name: "Lisa Green", role: "Content Writer", img: "/img/adam8.png" },
]

export default function TeamTemplate() {
  const { id } = useParams()
  const member = teamData.find(m => m.id === Number(id))

  return (
    <div className="max-w-[1536px] px-[20px] pt-[72px] sm:px-[50px] lg:pt-[120px] xc:px-[140px]">

      <div className="flex flex-col items-center text-center py-[60px]">
        <img
          src={member.img}
          alt={member.name}
          className="w-[160px] h-[160px] rounded-full object-cover"
        />
        <h1 className="mt-[24px] font-[600] text-[32px] text-[#232536]">{member.name}</h1>
        <p className="text-[#444CFC] text-[14px] mt-[4px]">{member.role}</p>
        <p className="mt-[16px] max-w-[480px] text-[#232536] opacity-70 text-[14px] leading-[24px]">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
        </p>
        <div className="flex gap-[16px] mt-[20px]">
          <i className="fa-brands fa-facebook text-[#232536] text-[18px] cursor-pointer hover:text-[#444CFC]"></i>
          <i className="fa-brands fa-twitter text-[#232536] text-[18px] cursor-pointer hover:text-[#444CFC]"></i>
          <i className="fa-brands fa-instagram text-[#232536] text-[18px] cursor-pointer hover:text-[#444CFC]"></i>
        </div>
      </div>

      <div className="mb-[60px] rounded-[8px] bg-[#ECF8F9] px-[20px] py-[40px] sm:px-[60px] sm:py-[50px]">
        <div className="flex flex-col">
          <span className="w-[16px] h-[16px] bg-[#444CFC] "></span>
          <h3 className="font-[600] mt-[10px] text-[24px] text-[#232536]">Blog posts from {member.name.split(' ')[0]}</h3>
        </div>
        <div className="mt-[48px] grid gap-[24px] lg:grid-cols-2">
          <div className='flex flex-col bg-[#FFFFFF] sm:flex-row sm:items-center'>
            <img src="/img/blog1.png" alt="" className='h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]' />
            <div className='px-[24px] py-[32px]'>
              <span className='font-[500] text-[14px] opacity-[60%] text-[#232536] '>Jan 19, 2021</span>
              <h4 className='mt-[8px] font-[600] text-[24px] leading-[36px] text-[#232536] max-w-[250px] '>Today’s best design trends for digital products</h4>
              <a href="#" className="text-[#444CFC] mt-[24px] text-[14px] font-[500] flex items-center gap-[8px]">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className='flex flex-col bg-[#FFFFFF] sm:flex-row sm:items-center'>
            <img src="/img/blog2.png" alt="" className='h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]' />
            <div className='px-[24px] py-[32px]'>
              <span className='font-[500] text-[14px] opacity-[60%] text-[#232536] '>Jan 19, 2021</span>
              <h4 className='mt-[8px] font-[600] text-[24px] leading-[36px] text-[#232536] max-w-[250px] '>A practical guide  building a brand strategy</h4>
              <a href="#" className="text-[#444CFC] mt-[24px] text-[14px] font-[500] flex items-center gap-[8px]">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
