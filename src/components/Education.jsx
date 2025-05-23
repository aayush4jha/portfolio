import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: delay,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Sardar Vallabhbhai National Institute of Technology",
      location: "Surat, Gujarat",
      duration: "2023 - Present",
      degree: "B.Tech - Artificial Intelligence",
      grade: "9.44/10 (Till Sem-3)",
    },
    {
      id: 2,
      institution: "Loyola High School",
      location: "Patna, Bihar",
      duration: "2022 - 2023",
      degree: "12th (CBSE)",
      grade: "95.20%",
    },
    {
      id: 3,
      institution: "Loyola High School",
      location: "Patna, Bihar",
      duration: "2020 - 2021",
      degree: "10th (CBSE)",
      grade: "98.20%",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-transparent min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={container(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl font-thin tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-white"
        >
          Education
        </motion.h2>
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start">
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <motion.h3
                    variants={container(index * 0.3 + 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-xl sm:text-2xl font-light tracking-tight text-white"
                  >
                    {edu.institution}
                  </motion.h3>
                  <motion.p
                    variants={container(index * 0.3 + 0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-gray-200 font-light text-sm sm:text-base sm:text-right"
                  >
                    {edu.duration}
                  </motion.p>
                </div>
                <motion.p
                  variants={container(index * 0.3 + 0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-gray-200 font-light text-sm sm:text-base mb-1"
                >
                  {edu.location}
                </motion.p>
                <motion.p
                  variants={container(index * 0.3 + 0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-gray-200 font-light text-sm sm:text-base mb-3"
                >
                  {edu.degree}
                </motion.p>
                <motion.span
                  variants={container(index * 0.3 + 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full w-fit"
                >
                  Grade: {edu.grade}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;