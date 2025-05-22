import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-100 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-black"></div>
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
