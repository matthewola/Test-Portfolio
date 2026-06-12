import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Selected Work</h2>
            <p className="text-muted-foreground">
              Recent projects spanning product design, branding, and user experience
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group border border-border rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-muted-foreground">{project.year}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <div className="aspect-video bg-muted rounded-lg mb-6" />

              <h3 className="text-2xl mb-2">{project.title}</h3>
              <p className="text-sm text-primary mb-3">{project.category}</p>
              <p className="text-muted-foreground">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
