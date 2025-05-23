import { motion } from 'framer-motion';
import sparsh from '../assets/sparsh1.png';
import bindi from '../assets/bindi1.png';
import aryan from '../assets/dental.png';
import space from '../assets/space.png';
import amkart from '../assets/amkart.png';
import watt from '../assets/watt.png';

const projectData = [
  {
    id: 1,
    title: "Watt Wise",
    description: "A machine learning model designed to predict electricity demand using advanced algorithms, enhancing energy efficiency and planning.",
    image: watt,
    tech: ["Multiple Linear Regression", "Random Forest", "XGBoost"],
    reportLink: "https://drive.google.com/file/d/1oakx8eNkumKCqM_i_C1K6OupgZd19-P3/view?usp=drive_link",
    sourceLink: "https://github.com/aayush4jha/Electricity-Demand-Projection",
  },
  {
    id: 2,
    title: "Sparsh",
    description: "A dynamic website developed for SVNIT's annual cultural festival, offering seamless event management and user engagement.",
    image: sparsh,
    tech: ["React", "Node.js", "Express.js"],
    liveLink: "https://www.sparsh-svnit.in/",
    sourceLink: "https://github.com/aayush4jha/sparsh",
  },
  {
    id: 3,
    title: "Bindi's Cupcakery",
    description: "A freelance e-commerce platform for a local bakery, built as part of Google Winter of Code, featuring a robust online ordering system.",
    image: bindi,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://example.com/bindis-cupcakery",
    sourceLink: "https://github.com/aayush4jha/bindis-cupcakery",
  },
  {
    id: 4,
    title: "Aryan Dental",
    description: "A professional freelance website for a dental clinic, providing an intuitive interface for appointment booking and patient services.",
    image: aryan,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://aryandental.vercel.app/",
    sourceLink: "https://github.com/aayush4jha/aryan-dental",
  },
  {
    id: 5,
    title: "Space Industry",
    description: "A sleek website created for Web Wonders, organized by Nexus at SVNIT, showcasing innovative web design techniques.",
    image: space,
    tech: ["HTML", "CSS"],
    liveLink: "https://space-industry-pi.vercel.app/",
    sourceLink: "https://github.com/aayush4jha/Space-Industry",
  },
  {
    id: 6,
    title: "Amkart",
    description: "An educational project built to master web development fundamentals, featuring a simple yet functional e-commerce interface.",
    image: amkart,
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://amkart.vercel.app/",
    sourceLink: "https://github.com/aayush4jha/AMKART",
  },
];

const Projects = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-transparent min-h-screen">
      <br />
      <br />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-thin tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-white">
          Projects
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row"
            >
              <motion.a
                href={project.reportLink || project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/3"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-square"
                />
              </motion.a>
              <motion.div
                className="p-4 sm:p-6 flex-1 flex flex-col justify-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index + 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;