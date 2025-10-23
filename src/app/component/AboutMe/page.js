// components/AboutMe.js
const AboutMe = () => (
  <section className="bg-white py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
    <div className="border-2 border-black rounded-lg p-3 flex-shrink-0 max-w-[340px]">
      <img src="/Notioly.jpg" alt="About illustration" className="block w-full h-auto" />
    </div>
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold mb-4">About <span className="font-extrabold">Me</span></h2>
      {/* <p className="text-gray-700 text-base">
        I’m a passionate, self-proclaimed designer ... User experience, pixel perfect design, and ... performance code matters to me.<br /><br />
        I began my journey as a web developer ... new challenges and the latest frameworks ... building projects, edge app solutions using ...<br /><br />
        When I’m not building in stealth mode ... on Twitter ... or indie hacker ... You can email me for collaboration ... or follow me on GitHub.
      </p> */}
      <p className="text-gray-700 text-base">
  Results-driven Data Engineer with hands-on experience in Python, SQL, and cloud technologies. Skilled in building scalable data pipelines, data integration, and automation workflows. Background in machine learning and AI projects with a focus on enabling data-driven decision making. Passionate about leveraging modern tools like Cognite Data Fusion and AWS for real-time analytics and data accessibility.<br /><br />
  Enjoy collaborating in dynamic teams, leading challenging projects, and continuously exploring new technologies to drive innovative solutions. Familiar with frameworks such as TensorFlow, PyTorch, React.js, and tools like Streamlit and MongoDB.<br /><br />
  Achievements include leading AI projects for agri-tech and healthcare applications, building NLP chatbots, and contributing to data product development. Eager to deliver impactful engineering solutions and grow as a technology leader.
</p>

    </div>
  </section>
);

export default AboutMe;
