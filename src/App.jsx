import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Loader from  "./Components/Loader"

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