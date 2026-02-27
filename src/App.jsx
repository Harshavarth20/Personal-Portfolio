import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen">

      <Navbar />

      <Hero />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;