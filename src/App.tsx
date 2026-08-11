import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import EngineeringDna from './components/sections/EngineeringDna';
import About from './components/About';
import Experience from './components/Experience';
import AiRagSection from './components/sections/AiRagSection';
import FeaturedProjects from './components/sections/FeaturedProjects';
import GitHubExplorer from './components/sections/GitHubExplorer';
import Skills from './components/Skills';
import Achievements from './components/sections/Achievements';
import GallerySection from './components/sections/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringDna />
        <Experience />
        <FeaturedProjects />
        <GitHubExplorer />
        <AiRagSection />
        <Skills />
        <Achievements />
        <GallerySection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
