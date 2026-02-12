import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-transparent min-h-screen font-sans selection:bg-accent selection:text-black transition-colors duration-300 relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
