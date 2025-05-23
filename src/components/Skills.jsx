import mat from '../assets/mat.webp';
import motionImg from '../assets/motion.png';
import vsImg from '../assets/vs.png';

import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiNextdotjs, SiBootstrap,
  SiMongodb, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiTensorflow,
  SiGit, SiGithub, SiVercel, SiJupyter, SiAnaconda
} from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const iconSlideVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC size={32} color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus size={32} color="#00599C" /> },
        { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
        { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 size={32} color="#E34F26" /> },
        { name: "CSS", icon: <SiCss3 size={32} color="#1572B6" /> },
        { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs size={32} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={32} color="#FFFFFF" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
        { name: "Next.js", icon: <SiNextdotjs size={32} color="#FFFFFF" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={32} color="#7952B3" /> },
        { name: "Motion", icon: <img src={motionImg} alt="Framer Motion" width="32" height="32" /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql size={32} color="#4479A1" /> }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: <SiPandas size={32} color="#4B0082" /> },
        { name: "NumPy", icon: <SiNumpy size={32} color="#4D77AA" /> },
        { name: "Matplotlib", icon: <img src={mat} alt="Matplotlib" width="32" height="32" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={32} color="#F7931E" /> },
        { name: "PyTorch", icon: <SiPytorch size={32} color="#EE4C2C" /> },
        { name: "TensorFlow", icon: <SiTensorflow size={32} color="#FF6F00" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={32} color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub size={32} color="#FFFFFF" /> },
        { name: "Vercel", icon: <SiVercel size={32} color="#FFFFFF" /> },
        { name: "Jupyter", icon: <SiJupyter size={32} color="#F37626" /> },
        { name: "Anaconda", icon: <SiAnaconda size={32} color="#44A833" /> },
        { name: "VS Code", icon: <img src={vsImg} alt="VS Code" width="32" height="32" /> }
      ]
    }
  ];

  return (
    <div>
      <motion.h1
        className="my-20 text-center text-5xl font-thin tracking-tight text-white"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Skills
      </motion.h1>
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-center text-2xl font-semibold mb-6"
            variants={titleVariants}
          >
            {category.title}
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center w-32"
                variants={iconVariants(1 + skillIndex * 0.2)}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="mb-2"
                  variants={iconSlideVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-center text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;