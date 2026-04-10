const projects = [
  {
    title: "",
    description: "",
  },
  {
    title: "Dashboard Financeiro",
    description: "Painel financeiro com gráficos e estatísticas.",
  },
  {
    title: "",
    description: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Meus Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-purple-500/20 p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <div className="flex gap-3 mt-4">
                <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                  GitHub
                </button>
                <button className=" bg-purple-500 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                  Ver Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;