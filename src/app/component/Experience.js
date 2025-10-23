// components/Experience.js
const experiences = [
  {
    icon: "/icons/google.svg", // Replace with your SVG or icon path
    role: "Lead Software Engineer at Google",
    duration: "Nov 2019 – Present",
    description: "As a Senior Software Engineer at Google, I played a pivotal role ... millions of users worldwide."
  },
  {
    icon: "/icons/youtube.svg",
    role: "Software Engineer at Youtube",
    duration: "Jan 2017 – Oct 2019",
    description: "At Youtube, I served as a Software Engineer, focusing on the design ... seamless functionality and scalability."
  },
  {
    icon: "/icons/apple.svg",
    role: "Junior Software Engineer at Apple",
    duration: "Jan 2016 – Dec 2017",
    description: "During my tenure at Apple, I held the role of Software Architect ... leadership to a cross-functional team."
  }
];

const Experience = () => (
  <section className="bg-black py-16 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">My <span className="font-extrabold">Experience</span></h2>
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {experiences.map((exp, idx) => (
        <div key={idx} className={`rounded-lg border border-gray-700 px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between ${idx === 1 ? "bg-gray-800" : "bg-gray-900"}`}>
          <div className="flex items-center mb-3 md:mb-0">
            <img src={exp.icon} alt="" className="w-6 h-6 mr-3" />
            <div>
              <span className="text-lg font-semibold text-white">{exp.role}</span>
              <p className="text-gray-200 font-light text-sm mt-1">{exp.description}</p>
            </div>
          </div>
          <span className="ml-auto text-sm font-medium text-gray-400">{exp.duration}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
