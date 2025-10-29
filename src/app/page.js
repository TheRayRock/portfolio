import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Experience/Experience";

// import AboutMe from '@/app/component/AboutMe/page'
import AboutMe from "./component/AboutMe/AboutMe";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import chat from "./component/chat/page";
import ChatPage from "./component/chat/page";
import ContactForm from "./component/ConatctForm/page";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans scroll-smooth">
      <div className="max-w- mx-auto border rounded-xl shadow-lg ">
        <Navbar />
        <Hero />

        <div className="fixed bottom-4 right-4 z-50">
  <ChatPage />
</div>

        <section id="skills" className="min-h-screen py-16">
          <h2>
            <Skills />
          </h2>
        </section>

        <section id="" className="min-h-screen py-16">
          <h2>
            <Experience />
          </h2>
        </section>

        <section id="about" className="min-h-screen py-16">
          <h2>
            <AboutMe />
          </h2>
        </section>

        <section id="projects" className="min-h-screen py-16">
          <h2>
            <Projects />
          </h2>
        </section>


                <section id="contactform" className="min-h-screen py-16">
          <h2>
              <ContactForm />
          </h2>
        </section>

      

       

        <Footer />
      </div>
    </div>
  );
}
