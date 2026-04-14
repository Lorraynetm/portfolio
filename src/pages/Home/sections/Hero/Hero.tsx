import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-900 to-gray-950 w-full min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12 px-6">
        
       
        <div>
          <p className="text-3xl md:text-5xl font-bold text-purple-400">
            Olá, eu sou
          </p>

          <h1 className="pb-4 text-4xl md:text-7xl font-bold text-purple-400">
            Lorrayne Tavares
          </h1>

          <TypeAnimation
            sequence={[
              "Front-End Developer", 5000,
              "", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-4xl text-purple-400"
            cursor={true}
          />

          <p className="mt-4 text-gray-400 text-lg md:text-2xl max-w-xl">
            Estudante de Engenharia de Software com foco em desenvolvimento
            front-end, criando interfaces modernas e responsivas com React e
            TypeScript.
          </p>

          
          <div className="mt-6 pt-4 flex items-center gap-8 ">
            <a
              href="https://github.com/Lorraynetm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-purple-400 transition duration-300 transform hover:scale-110">
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/lorrayne-tavares-b99270210/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-purple-400 transition duration-300 transform hover:scale-110">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

      
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/developer.png"
            alt="Ilustração de Desenvolvedora"
            className="
              max-w-[550px]
              md:max-w-[650px]
              lg:max-w-[750px]
              xl:max-w-[850px]
              object-contain
              drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;