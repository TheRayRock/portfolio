
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Skills from '@/app/component/Skills'
import Experience from '@/app/component/Experience'

// import AboutMe from '@/app/component/AboutMe/page'
import AboutMe from './component/AboutMe'
import Projects from './component/Projects'
import Footer from './component/Footer'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      <div className="max-w- mx-auto border rounded-xl shadow-lg ">
        <Navbar />
        <Hero />
        
         
      
      
    

      <section id="skills" className="min-h-screen py-16"> 
  <h2><Skills /></h2>
</section>

<section id="" className="min-h-screen py-16">
  <h2><Experience /></h2>
</section>

<section id="about" className="min-h-screen py-16">
  <h2><AboutMe /></h2>
</section>

<section id="projects" className="min-h-screen py-16">
  <h2><Projects /></h2>
</section>


  <Footer />

      </div>
    </div>
  )
}

