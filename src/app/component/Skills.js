import { IoLogoPython } from "react-icons/io5";




const skills = [
  { name: "Python", icon: "/python.png" },
  { name: "SQL", icon: "/sql-server.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "Java", icon: "/java.png" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "PyTorch", icon: "/icons/pytorch.svg" },
  { name: "React.js", icon: "/science.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "Streamlit", icon: "/icons/streamlit.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "OpenCV", icon: "/icons/opencv.svg" },
  { name: "Git", icon: "/github.png" },
  { name: "Postman", icon: "/icons/postman.svg" },
]


const Skills = () => (
  <section className="py-16 px-8">
    <h2 className="text-3xl font-bold mb-8 text-center">My <span className="font-light">Skills</span></h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-full">
      {skills.map(skill => (
        <div
          key={skill.name}
          className={`flex flex-col items-center justify-center border rounded-md py-8 ${skill.highlight ? "bg-black text-white" : ""}`}
        >
          <img src={skill.icon} alt={skill.name} className="h-10 mb-4" />
          <span className="text-lg font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
