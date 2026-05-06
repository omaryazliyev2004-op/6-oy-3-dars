import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import Sec_6 from "../Main/7-section/7-sec"


const jobs = [
  { id: 1, title: "Full Stack Developer", location: "Bengaluru · Full Time", salary: "$10K - $18K · No equity" },
  { id: 2, title: "Testing Engineer", location: "Remote · Full Time", salary: "$80K - $10K · No equity" },
  { id: 3, title: "Hr Manager", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 4, title: "Product Designer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 5, title: "Wordpress Developer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 6, title: "Jr. QA Tester", location: "California · Full Time", salary: "$14K - $23K · No equity" },
  { id: 7, title: "Sr. UX Designer", location: "California · Full Time", salary: "$14K - $23K · No equity" },
  { id: 8, title: "Social Media Manager", location: "Kolkata · Fulltime", salary: "$5K - $6K · Fresher" },
  { id: 9, title: "Golang Developer", location: "Mumbai · Fulltime", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
]

const tabContent = {
  Details: [
    "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
    "Design & Create highly engaging industry-related content in both photo, gif & video format",
    "Publish Posts on various social media channels",
    "Promote content on social networks and monitor engagement (e.g. comments and shares)",
    "Research industry-related topics",
    "Editing audio and sound design on projects",
    "Engage in opportunities to develop original content and concepts for web and mobile",
    "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
    "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels",
  ],
  Requirements: [
    "3+ years of experience in a similar role",
    "Strong communication and interpersonal skills",
    "Proficiency in design tools such as Figma, Adobe XD",
    "Experience with modern frameworks and tools",
    "Ability to work independently and in a team",
    "Strong problem-solving skills",
    "Bachelor's degree in relevant field preferred",
  ],
  Responsibilities: [
    "Lead and manage project timelines and deliverables",
    "Collaborate with cross-functional teams",
    "Ensure quality standards are met across all outputs",
    "Report progress to senior management",
    "Mentor junior team members",
    "Conduct research and present findings",
    "Participate in client meetings and presentations",
  ],
}

export default function Inner() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find(j => j.id === Number(id))
  const [activeTab, setActiveTab] = useState("Details")


  return (
    <>
      <div className="pt-[120px] max-w-[1536px] mx-auto px-[140px] pb-[96px]">
        <div className="flex items-start justify-between">
          <div className="pb-[24px] text-[14px] opacity-[87%] text-[#232536] ">
            <p>CAREER AT ETHER</p>
            <h1 className="text-[48px] font-[600] text-[#232536]">{job.title}</h1>
            <p className="mt-[12px] text-[#5D5F6D]">{job.location}</p>
            <p className="text-[#5D5F6D]">{job.salary}</p>
            <button className="mt-[32px] relative flex h-16 w-[182px] items-center justify-between overflow-hidden bg-[#4c4cff] px-5 pl-9 text-white">
              <span className="absolute left-0 top-0 h-[32px] w-[32px]">
                <span className="absolute left-0 top-0 h-[22px] w-[22px] bg-[#ffb067]" />
                <span className="absolute left-[22px] top-0 h-[10px] w-[10px] bg-white/30" />
                <span className="absolute left-0 top-[22px] h-[10px] w-[10px] bg-white/20" />
              </span>

              <span className="text-[18px] font-normal leading-none">Apply Now</span>
              <span className="text-[24px] leading-none">→</span>
            </button>
          </div>
          <div className="w-[515px] h-[324px] pt-[82px] pl-[80px] bg-[#FFE0C7] relative ">
            <div className="absolute top-0 right-0 ">
              <img src="/img/Shapes.png" alt="" />
            </div>
            <h4 className="font-[600] text-[24px] text-[#232536] ">Job Description</h4>
            <p className="font-[400] mt-[24px] text-[#000000] ">Remote, India , 4 to 5 Years Of Experience</p>
            <p className="font-[400] mt-[16px] text-[#000000] ">Department: Product Engineering</p>
            <p className="font-[400] mt-[16px] text-[#000000] ">Full Time 5 Position Available.</p>
          </div>

        </div>

        <div className="mt-[96px] bg-[#EEF9FA]">
          <div className="flex justify-center gap-[80px] border-b border-[#E0E0E0]">
            {Object.keys(tabContent).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-[20px] text-[18px] font-[600] relative transition-colors ${activeTab === tab
                  ? "text-[#444CFC]"
                  : "text-[#232536]"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#444CFC] rounded-t-full"></span>
                )}
              </button>
            ))}
          </div>

          <div className="px-[140px] py-[48px]">
            <ul className="flex flex-col gap-[20px]">
              {tabContent[activeTab].map((item, index) => (
                <li key={index} className="flex items-start gap-[12px] text-[#232536] leading-[28px]">
                  <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-[#232536] flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="mt-[94px]">
          <h2 className="text-[32px] font-[600] text-[#232536] mb-[32px]">Apply Now</h2>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#F5F7FA] px-[24px] py-[20px] text-[#232536] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#F5F7FA] px-[24px] py-[20px] text-[#232536] outline-none"
              />
            </div>

            <div className="flex gap-[16px]">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full bg-[#F5F7FA] px-[24px] py-[20px] text-[#232536] outline-none"
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="w-full bg-[#F5F7FA] px-[24px] py-[20px] text-[#232536] outline-none"
              />
            </div>

            <textarea
              placeholder="Why do you thing you are good fit for Ether?"
              rows={6}
              className="w-full bg-[#F5F7FA] px-[24px] py-[20px] text-[#232536] outline-none resize-none"
            />

            <div className="flex items-start gap-[12px] mt-[8px]">
              <input
                type="checkbox"
                id="privacy"
                className="mt-[4px] w-[18px] h-[18px] accent-[#444CFC] cursor-pointer flex-shrink-0"
              />
              <label htmlFor="privacy" className="text-[#5D5F6D] text-[14px] leading-[24px] cursor-pointer">
                I agree to accept the privacy policy. We will add your contact details provided in this form to our system for contacting you regarding your request.
              </label>
            </div>

            <div className="mt-[8px]">
              <button className="mt-[32px] relative flex h-16 w-[251px] items-center justify-between overflow-hidden bg-[#4c4cff] px-5 pl-9 text-white">
                <span className="absolute left-0 top-0 h-[32px] w-[32px]">
                  <span className="absolute left-0 top-0 h-[22px] w-[22px] bg-[#ffb067]" />
                  <span className="absolute left-[22px] top-0 h-[10px] w-[10px] bg-white/30" />
                  <span className="absolute left-0 top-[22px] h-[10px] w-[10px] bg-white/20" />
                </span>

                <span className="text-[18px] font-normal leading-none">Submit Application</span>
                <span className="text-[24px] leading-none">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <Sec_6 />
    </>
  )
}