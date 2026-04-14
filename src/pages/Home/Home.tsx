import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/About/Skills"; 
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import Navbar from "./sections/Header/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default Home;