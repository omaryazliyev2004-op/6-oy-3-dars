import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './companents/Header/header'
import Footer from './companents/Footer/footer'
import Main from './companents/Main/Main'
import Company from './companents/Company-Page/Company'
import TeamTemplate from "./companents/Team-Template/TeamTemplate"
import Career from './companents/Career-Page/Career'
import Inner from './companents/Inner/Inner'
import Blog from './companents/Blog-Page/Blog'
import Blog_Inner from './companents/Blog-Inner/Blog_Inner'
import Contact from './companents/Contact-Page/Contact'
import PrivacyPolicy from './companents/PrivacyPolicy-Page/PrivacyPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team/:id" element={<TeamTemplate />} />
        <Route path="/career-inner/:id" element={<Inner />} />
        <Route path="/bloginner" element={<Blog_Inner />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
