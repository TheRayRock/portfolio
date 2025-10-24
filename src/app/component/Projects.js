// components/Projects.js
const projects = [
  {
    id: "01",
    title: "Crop Disease Classification AI Data Pipeline",
    description: "Built an end-to-end deep learning pipeline to classify plant diseases using image data. Integrated preprocessing, training, and deployment stages similar to a real ETL pipeline.",
    tech: "TensorFlow, Keras, OpenCV, Python",
    image:"/download.jpg"
  },
  {
    id: "02",
    title: "Hypertensive Retinopathy Detection (Healthcare AI)",
    description: "Developed and deployed a deep learning model to diagnose hypertensive retinopathy from images, with real-time inference using Streamlit.",
    tech: "PyTorch, OpenCV, Streamlit",
     image:"/Stargardt Disease _ National Eye Institute.jpg"
  },
  {
    id: "03",
    title: "AI ChatBot NLP Generative AI",
    description: "Designed an interactive chatbot with LangChain, GPT models, and Wikipedia API for accurate contextual responses.",
    tech: "Python, OpenAI API, Streamlit",
     image:"/Ai Chatbot Engaging in a Lively Online Conversation_.jpg"
  },
  {
    id: "04",
    title: "Movie Recommendation System",
    description: "Created a collaborative filtering-based recommendation system based on user history and preferences.",
    tech: "Python, Pandas, Scikit-Learn",
     image:"/Masterpiece TV series.jpg"
  }
]


const ProjectCard = ({ project, reverse }) => (
<div className={`flex flex-col md:flex-row md:items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-8 mb-14`}>
  <div className="w-full md:w-180">
    <div className="bg-[#16181A] p-4 md:p-6 rounded-2xl shadow-xl border border-gray-800">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl w-full  md:w-180 md:h-90 object-cover"
      />
    </div>
  </div>
  <div className="md:w-1/2 w-full flex flex-col justify-center">
    <div className="text-3xl font-extrabold text-white opacity-80 mb-2">{project.id}</div>
    <div className="text-2xl font-bold text-white mb-2">{project.title}</div>
    <div className="text-gray-300 mb-3">{project.description}</div>
    <a
      href="#"
      className="text-gray-400 hover:text-white transition text-base inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 inline ml-1">
        <path d="M14 3H21V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21H3V3H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  </div>
</div>

);

const Projects = () => (
  <section className="bg-black px-6 md:px-16 py-20  max-w-full">
    <h2 className="text-3xl md:text-4xl text-white font-semibold text-center mb-16">My <span className="font-extrabold">Projects</span></h2>
    {projects.map((project, idx) => (
      <ProjectCard project={project} reverse={idx % 2 === 1} key={project.id} />
    ))}
  </section>
);

export default Projects;
