import { IoLogoPython } from "react-icons/io5";




const skills = [
  { name: "Python", icon: "/python.png"},
  { name: "SQL", icon: "/sql-server.png"},
  { name: "JavaScript", icon: "/java-script.png"},
  { name: "Java", icon: "/java.png" },
  { name: "TensorFlow", icon: "/tensorflow_logo_icon_144808.png"},
  { name: "Nextjs", icon: "/brand-nextjs-rudgxaojzrlmuedym64wo9.webp"},
  { name: "React.js", icon: "/library.png"},
  { name: "Node.js", icon: "/nodejs.png"},
  { name: "Streamlit", icon: "/streamlit_logo_icon_249495.png"},
  { name: "MySQL", icon: "/mysql.png"},
  { name: "MongoDB", icon: "/database.png"},
  { name: "AWS", icon: "/file.png"},
  { name: "OpenCV", icon: "/icons/opencv.svg"},
  { name: "Git", icon: "/github.png"},
  { name: "Postman", icon: "/free-postman-logo-icon-svg-download-png-3032239.webp"},
]


const Skills = () => (
  <section className="py-16 px-8">
    <h2 className="text-3xl font-bold mb-8 text-center">My <span className="font-light">Skills</span></h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-full">
      {skills.map(skill => (
        // <div
        //   key={skill.name}
        //   className={`flex flex-col items-center justify-center border rounded-md py-8 transition-all duration-300 
        //   ${skill.highlight ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}

        // >
        //   <img src={skill.icon} alt={skill.name} className="h-10 mb-4" />
        //   <span className="text-lg font-semibold">{skill.name}</span>
        // </div>
<div
key={skill.name}
 
  className={`group flex flex-col items-center justify-center border rounded-md py-8 px-6 cursor-pointer 
    transition-all duration-300 ease-in-out
    ${skill.highlight 
      ? "bg-black text-white" 
      : "bg-white text-black hover:bg-black hover:text-white"}`}
>
  <img
    src={skill.icon}
    alt={skill.name}
    className={`h-10 mb-4 transition-all duration-300 
      ${skill.highlight ? "invert" : "group-hover:invert"}`}
  />
  <span className="text-lg font-semibold">{skill.name}</span>
</div>



      ))}
    </div>
  </section>
);

export default Skills;
