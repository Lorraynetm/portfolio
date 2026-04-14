const projects = [
  {
   title: "Projeto Rocketseat",
    description:"Aplicação desenvolvida durante os estudos na Rocketseat, com foco em interfaces modernas e boas práticas de desenvolvimento front-end.",
    image: "/images/Rocketseat.png",
    github: "https://github.com/Lorraynetm/Projeto-rocketseat",
    demo: "#",
  },
  {
    title: "Analisador Gráfico",
    description:
      "Aplicação desenvolvida para análise de dados com visualização gráfica interativa, proporcionando insights de forma clara e intuitiva.",
    image: "/images/analisador-grafico.png",
    github: "https://github.com/Lorraynetm/Analisador-Grafico",
    demo: "#",
  },
  {
    title: "",
    description: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-950 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Meus <span className="text-purple-400">Projetos</span>
        </h2>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-purple-500/20 rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x400?text=Imagem+Nao+Encontrada";
                }}
              />

             
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {project.description}
                </p>

                
                <div className="flex gap-3 mt-4">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition text-white text-sm">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;