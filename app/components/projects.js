export default function Projects({ projects }) {
    return (
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Projelerim</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Resim */}
              {project.images.length > 0 && (
                <img
                  src={project.images[0]?.url}
                  alt={project.name}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-6">
                {/* Proje Adı */}3
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                
                {/* Proje Özeti */}
                <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
  
                {/* Teknolojiler */}
                <div className="flex items-center space-x-2 mb-4">
                  {project.technologies.map((tech) => (
                    <img
                      key={tech.technology.id}
                      src={tech.technology.icon}
                      alt={tech.technology.name}
                      className="h-6 w-6 rounded-full"
                      title={tech.technology.name}
                    />
                  ))}
                </div>
  
                {/* Linkler */}
                <div className="flex space-x-4">
                  {project.links.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 text-sm underline"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  