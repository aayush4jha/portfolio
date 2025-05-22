const projectData = [
  {
    id: 1,
    title: "WattWise",
    description: "A machine learning model designed to predict electricity demand using advanced algorithms, enhancing energy efficiency and planning.",
    image: "https://via.placeholder.com/600x400",
    tech: ["Multiple Linear Regression", "Random Forest", "XGBoost"],
    reportLink: "https://example.com/wattwise-report.pdf",
    sourceLink: "https://github.com/aayush4jha/wattwise",
  },
  {
    id: 2,
    title: "Sparsh",
    description: "A dynamic website developed for SVNIT's annual cultural festival, offering seamless event management and user engagement.",
    image: "https://via.placeholder.com/600x400",
    tech: ["React", "Node.js", "Express.js"],
    liveLink: "https://example.com/sparsh",
    sourceLink: "https://github.com/aayush4jha/sparsh",
  },
  {
    id: 3,
    title: "Bindi's Cupcakery",
    description: "A freelance e-commerce platform for a local bakery, built as part of Google Winter of Code, featuring a robust online ordering system.",
    image: "https://via.placeholder.com/600x400",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://example.com/bindis-cupcakery",
    sourceLink: "https://github.com/aayush4jha/bindis-cupcakery",
  },
  {
    id: 4,
    title: "Aryan Dental",
    description: "A professional freelance website for a dental clinic, providing an intuitive interface for appointment booking and patient services.",
    image: "https://via.placeholder.com/600x400",
    tech: ["React", "Node.js", "Express.js"],
    liveLink: "https://example.com/aryan-dental",
    sourceLink: "https://github.com/aayush4jha/aryan-dental",
  },
  {
    id: 5,
    title: "Space-Industry",
    description: "A sleek website created for Web Wonders, organized by Nexus at SVNIT, showcasing innovative web design techniques.",
    image: "https://via.placeholder.com/600x400",
    tech: ["HTML", "CSS"],
    liveLink: "https://example.com/space-industry",
    sourceLink: "https://github.com/aayush4jha/space-industry",
  },
  {
    id: 6,
    title: "AMKART",
    description: "An educational project built to master web development fundamentals, featuring a simple yet functional e-commerce interface.",
    image: "https://via.placeholder.com/600x400",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://example.com/amkart",
    sourceLink: "https://github.com/aayush4jha/amkart",
  },
];

const Projects = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-thin tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-white">
          Projects
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row border border-gray-700 transform transition duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-[1.01] sm:hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
              />
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="text-xl sm:text-2xl font-light tracking-tight mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-200 font-light text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {project.reportLink ? (
                    <a
                      href={project.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm sm:text-base rounded hover:from-blue-500 hover:to-purple-600 transition w-full sm:w-auto text-center"
                    >
                      Report
                    </a>
                  ) : (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm sm:text-base rounded hover:from-blue-500 hover:to-purple-600 transition w-full sm:w-auto text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white text-sm sm:text-base rounded hover:from-green-500 hover:to-teal-600 transition w-full sm:w-auto text-center"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;