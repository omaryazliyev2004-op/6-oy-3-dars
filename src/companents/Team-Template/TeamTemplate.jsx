import { NavLink, useLocation, useParams } from "react-router-dom"

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
  const { state } = useLocation()
  const info = state?.info || teamData.find((member) => member.id === Number(id))


  return (
    <div className="mx-[20px] px-[20px] sm:mx-[50px] xc:mx-[100px] pt-[72px] sm:px-[50px] lg:pt-[120px] xc:px-[140px]">
      <div className="flex flex-col items-center py-[60px] text-center">
        <img
          src={info.img}
          alt={info.name}
          className="h-[160px] w-[160px] rounded-full object-cover"
        />

        <h1 className="mt-[24px] text-[32px] font-[600] text-[#232536]">
          {info.name}
        </h1>
        <p className="mt-[4px] text-[14px] text-[#444CFC]">{info.role}</p>
        <p className="mt-[16px] max-w-[480px] text-[14px] leading-[24px] text-[#232536] opacity-70">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
        </p>

        <div className="mt-[20px] flex gap-[16px]">
          <i className="fa-brands fa-facebook cursor-pointer text-[18px] text-[#232536] hover:text-[#444CFC]"></i>
          <i className="fa-brands fa-twitter cursor-pointer text-[18px] text-[#232536] hover:text-[#444CFC]"></i>
          <i className="fa-brands fa-instagram cursor-pointer text-[18px] text-[#232536] hover:text-[#444CFC]"></i>
        </div>
      </div>

      <div className="mb-[60px] rounded-[8px] bg-[#ECF8F9] px-[20px] py-[40px] sm:px-[60px] sm:py-[50px]">
        <div className="flex flex-col">
          <span className="h-[16px] w-[16px] bg-[#444CFC]"></span>
          <h3 className="mt-[10px] text-[24px] font-[600] text-[#232536]">
            Blog posts from 
          </h3>
        </div>

        <div className="mt-[48px] grid gap-[24px] lg:grid-cols-2">
          <div className="flex flex-col bg-white sm:flex-row sm:items-center">
            <img src="/img/blog1.png" alt="" className="h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]" />
            <div className="px-[24px] py-[32px]">
              <span className="text-[14px] font-[500] text-[#232536] opacity-[60%]">Jan 19, 2021</span>
              <h4 className="mt-[8px] max-w-[250px] text-[24px] font-[600] leading-[36px] text-[#232536]">
                Today's best design trends for digital products
              </h4>
              <a href="#" className="mt-[24px] flex items-center gap-[8px] text-[14px] font-[500] text-[#444CFC]">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-white sm:flex-row sm:items-center">
            <img src="/img/blog2.png" alt="" className="h-[220px] w-full object-cover sm:h-[248px] sm:w-[260px]" />
            <div className="px-[24px] py-[32px]">
              <span className="text-[14px] font-[500] text-[#232536] opacity-[60%]">Jan 19, 2021</span>
              <h4 className="mt-[8px] max-w-[250px] text-[24px] font-[600] leading-[36px] text-[#232536]">
                A practical guide to building a brand strategy
              </h4>
              <a href="#" className="mt-[24px] flex items-center gap-[8px] text-[14px] font-[500] text-[#444CFC]">
                Read More <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
