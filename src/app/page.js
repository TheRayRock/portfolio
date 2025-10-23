
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skills from '@/app/component/Skills'
import Experience from '@/app/component/Experience'
// import AboutMe from '@/app/component/AboutMe/page'
import AboutMe from './component/AboutMe/page'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      <div className="max-w- mx-auto border rounded-xl shadow-lg p-4">
        <Navbar />
        <Hero />
        <Skills />
         <Experience />
      <AboutMe />
      </div>
    </div>
  )
}

