import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaDiscord } from "react-icons/fa";


const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8">
    <div className="flex-1 max-w-xl">
   
      <h1 className="text-4xl md:text-5xl font-light">
  Hello I’m <span className="font-bold">Md Shahnawaz Alam.</span><br />
  <span className="font-bold">Backend <span className="outline-text">Developer</span></span><br />
  <span>at <span className="font-bold">Rodbez.</span></span>
</h1>

      <p className="text-gray-400 mt-4">
        I love creating both — smooth backends and eye-catching frontend designs.
I enjoy mixing logic with creativity to make cool, working projects.
      </p>
      {/* <div className="flex space-x-4 mt-8">
        <button className="p-2 rounded-md bg-black text-white"><FaFacebook /></button>
        <button className="p-2 rounded-md border"><FaGithub /></button>
        <button className="p-2 rounded-md border"><FaTwitter /></button>
        <button className="p-2 rounded-md border"><FaGithubAlt /></button>
      </div> */}


<div className="flex space-x-4 mt-8">
  <a
    href="https://www.linkedin.com/in/md-shahnawaz-alam-1463981b7/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md border transition-all duration-300 hover:bg-black hover:text-white"
  >
    <FaLinkedin className="text-xl" />
  </a>
  <a
    href="https://github.com/TheRayRock"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md border transition-all duration-300 hover:bg-black hover:text-white"
  >
    <FaGithub className="text-xl" />
  </a>
  <a
    href="https://discord.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md border transition-all duration-300 hover:bg-black hover:text-white"
  >
    <FaDiscord className="text-xl" />
  </a>
</div>

    </div>
    <div className="flex-1 flex justify-center mt-8 md:mt-0">
      {/* You can use a custom SVG or illustration image */}
      <img src="/Try Diagram - The most complete Nocode API builder.jpg" alt="Developer Illustration" className="h-150" />

      
    </div>
  </section>
);

export default Hero;
