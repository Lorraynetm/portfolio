import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default Home;