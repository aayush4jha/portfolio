import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

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
          className="text-5xl font-thin tracking-tight text-center mb-8 sm:mb-10 md:mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              className="rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row border border-gray-700 transform transition duration-300 hover:shadow-xl hover:border-blue-500 hover:scale-[1.01] sm:hover:scale-[1.02] bg-gray-800/50"
              variants={cardVariants}
            >
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <motion.h3
                    className="text-xl sm:text-2xl font-light tracking-tight text-white"
                    variants={textVariants}
                  >
                    {edu.institution}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 font-light text-sm sm:text-base sm:text-right"
                    variants={textVariants}
                  >
                    {edu.duration}
                  </motion.p>
                </div>
                <motion.p
                  className="text-gray-200 font-light text-sm sm:text-base mb-1"
                  variants={textVariants}
                >
                  {edu.location}
                </motion.p>
                <motion.p
                  className="text-gray-200 font-light text-sm sm:text-base mb-3"
                  variants={textVariants}
                >
                  {edu.degree}
                </motion.p>
                <motion.span
                  className="px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full w-fit"
                  variants={textVariants}
                >
                  Grade: {edu.grade}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;