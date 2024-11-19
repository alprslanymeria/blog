import ProjectCard from "./projectCard";

export default function Projects({ projects }) {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Projelerim</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}