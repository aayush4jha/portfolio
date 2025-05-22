import mat from '../assets/mat.webp';
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiNextdotjs, SiBootstrap,
  SiMongodb, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiPytorch, SiTensorflow,
  SiGit, SiGithub, SiVercel, SiJupyter, SiAnaconda
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC size={48} color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus size={48} color="#00599C" /> },
        { name: "Python", icon: <SiPython size={48} color="#3776AB" /> },
        { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript size={48} color="#3178C6" /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 size={48} color="#E34F26" /> },
        { name: "CSS", icon: <SiCss3 size={48} color="#1572B6" /> },
        { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs size={48} color="#339933" /> },
        { name: "Express.js", icon: <SiExpress size={48} color="#FFFFFF" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
        { name: "Next.js", icon: <SiNextdotjs size={48} color="#FFFFFF" /> },
        { name: "Bootstrap", icon: <SiBootstrap size={48} color="#7952B3" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql size={48} color="#4479A1" /> },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: <SiPandas size={48} color="#4B0082" /> },
        { name: "NumPy", icon: <SiNumpy size={48} color="#4D77AA" /> },
        { name: "Matplotlib", icon: <img src={mat} alt="Matplotlib" width="48" height="48" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={48} color="#F7931E" /> },
        { name: "PyTorch", icon: <SiPytorch size={48} color="#EE4C2C" /> },
        { name: "TensorFlow", icon: <SiTensorflow size={48} color="#FF6F00" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={48} color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub size={48} color="#FFFFFF" /> },
        { name: "Vercel", icon: <SiVercel size={48} color="#FFFFFF" /> },
        { name: "Jupyter", icon: <SiJupyter size={48} color="#F37626" /> },
        { name: "Anaconda", icon: <SiAnaconda size={48} color="#44A833" /> },
      ],
    },
  ];

  return (
    <div>
      <h1 className="my-20 text-center text-5xl font-thin tracking-tight text-white">
        Skills
      </h1>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-center text-2xl font-semibold mb-6">{category.title}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center w-32"
              >
                <div className="mb-2">{skill.icon}</div>
                <span className="text-center text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

//import bindi from '../assets/bindi.png';
//import aryan from '../assets/aryan.png';
