const experiences = [
  {
    icon: "/download.png", // change to your logo or any icon
    role: "Backend Developer at Rodbez",
    duration: "Sep 2025 – Present",
    description:
      "Currently working as a Backend Developer at Rodbez, where I build and manage server-side logic, APIs, and database integrations to improve system performance and reliability.",
  },
  {
    icon: "/1703484450952.jpg", // change to your logo or any icon
    role: "Intern at Infinitminds Digital Lab – Patna",
    duration: "Jan 2025 – Jun 2025",
    description:
      "Built and maintained web applications using React.js, Node.js, and Express.js. Developed REST APIs, worked with MySQL and MongoDB databases, and assisted in UI design, deployment, and AWS cloud integration.",
  },
];

const Experience = () => (
  <section className="bg-black py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white  text-center">My <span className="font-light">Experience</span></h2>
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`rounded-lg border border-gray-700 px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between ${
            idx === 1 ? "bg-gray-800" : "bg-gray-900"
          }`}
        >
          <div className="flex items-center mb-3 md:mb-0">
            <div className="w-32 h-14 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center mr-3 border border-gray-500">
              <img
                src={exp.icon}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="text-lg font-semibold text-white">
                {exp.role}
              </span>
              <p className="text-gray-200 font-light text-sm mt-1">
                {exp.description}
              </p>
            </div>
          </div>
          <span className="ml-auto text-sm font-medium text-gray-400">
            {exp.duration}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
