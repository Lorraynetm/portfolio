import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-950 w-full min-h-screen flex ">
      <div className="mt-50 px-6">
        <p className="text-3xl text-purple-400">Olá, eu sou</p>
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400">Lorrayne Tavares</h1>
        <TypeAnimation
          sequence={[
            "Front-End Developer", 1000,
            "",500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-2xl text-purple-400"
          cursor={true}
        />
        <p className="mt-4 text-gray-400 max-w-xl">
          Estudante de Engenharia de Software com foco em desenvolvimento
          front-end, criando interfaces modernas e responsivas com React e
          TypeScript.
        </p>
      </div>
    </section>
  );
}

export default Hero;