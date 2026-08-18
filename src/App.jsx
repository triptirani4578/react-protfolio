import { useState } from "react";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx"
import Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Experience from "./Components/Experience.jsx"
import Services from "./Components/Services.jsx"
import Contact from "./Components/Contact.jsx"
import Footer from "./Components/Footer.jsx"
import Loader from  "./Components/Loader.jsx~"

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">

      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;