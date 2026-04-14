import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={50} /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} /> },
  { name: "JavaScript", icon: <FaJs size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "React.js", icon: <FaReact size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
  { name: "Git", icon: <FaGitAlt size={50} /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Minhas{" "}
          <span className="text-purple-400">Habilidades</span>
        </h2>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              {/* Ícone */}
              <div className="
                w-28 h-28 flex items-center justify-center
                rounded-full border-2 border-purple-400
                text-purple-400
                shadow-lg shadow-purple-500/20
                transition-all duration-300
                group-hover:bg-purple-400
                group-hover:text-gray-900
                group-hover:scale-110
              ">
                {skill.icon}
              </div>

              {/* Nome */}
              <p className="mt-4 font-semibold tracking-wide text-gray-300 group-hover:text-purple-400 transition">
                {skill.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;