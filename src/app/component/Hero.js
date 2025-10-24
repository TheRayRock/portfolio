import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8">
    <div className="flex-1 max-w-xl">
   
      <h1 className="text-4xl md:text-5xl font-light">
  Hello I’m <span className="font-bold">Md Shahnawaz Alam.</span><br />
  <span className="font-bold">Backend <span className="outline-text">Developer</span></span><br />
  <span>at <span className="font-bold">Rodbez.</span></span>
</h1>

      <p className="text-gray-400 mt-4">
        I’m Sagar Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>
      <div className="flex space-x-4 mt-8">
        {/* Replace icons with react-icons or SVGs as needed */}
        <button className="p-2 rounded-md bg-black text-white"><FaFacebook /></button>
        <button className="p-2 rounded-md border"><FaGithub /></button>
        <button className="p-2 rounded-md border"><FaTwitter /></button>
        <button className="p-2 rounded-md border"><FaGithubAlt /></button>
      </div>
    </div>
    <div className="flex-1 flex justify-center mt-8 md:mt-0">
      {/* You can use a custom SVG or illustration image */}
      <img src="/Try Diagram - The most complete Nocode API builder.jpg" alt="Developer Illustration" className="h-150" />

      
    </div>
  </section>
);

export default Hero;
