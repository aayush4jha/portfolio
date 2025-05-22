import mat from '../assets/mat.png';
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
        { name: "C", icon: <SiC size={48} /> },
        { name: "C++", icon: <SiCplusplus size={48} /> },
        { name: "Python", icon: <SiPython size={48} /> },
        { name: "JavaScript", icon: <SiJavascript size={48} /> },
        { name: "TypeScript", icon: <SiTypescript size={48} /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 size={48} /> },
        { name: "CSS", icon: <SiCss3 size={48} /> },
        { name: "React", icon: <SiReact size={48} /> },
        { name: "Node.js", icon: <SiNodedotjs size={48} /> },
        { name: "Express.js", icon: <SiExpress size={48} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
        { name: "Next.js", icon: <SiNextdotjs size={48} /> },
        { name: "Bootstrap", icon: <SiBootstrap size={48} /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb size={48} /> },
        { name: "MySQL", icon: <SiMysql size={48} /> },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: <SiPandas size={48} /> },
        { name: "NumPy", icon: <SiNumpy size={48} /> },
        { name: "Matplotlib", icon: <img src={mat} alt="Matplotlib" width="48" height="48" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={48} /> },
        { name: "PyTorch", icon: <SiPytorch size={48} /> },
        { name: "TensorFlow", icon: <SiTensorflow size={48} /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit size={48} /> },
        { name: "GitHub", icon: <SiGithub size={48} /> },
        { name: "Vercel", icon: <SiVercel size={48} /> },
        { name: "Jupyter", icon: <SiJupyter size={48} /> },
        { name: "Anaconda", icon: <SiAnaconda size={48} /> },
      ],
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
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