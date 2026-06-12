import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Clock, Target, User, GitBranch } from 'lucide-react';
import { getProjectById } from '../data/projects';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm">
              {project.category}
            </span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start gap-4 p-6 border border-border rounded-lg">
            <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-1">Year</h3>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-border rounded-lg">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-1">Timeframe</h3>
              <p className="text-muted-foreground">{project.timeframe}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-border rounded-lg">
            <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-1">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl md:text-4xl mb-6">About the Project</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.about}
            </p>
          </section>

          <section>
            <div className="flex items-start gap-4 mb-6">
              <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl mb-4">Project Goal</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.goal}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4 mb-6">
              <User className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-4xl mb-4">My Role</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card p-8 md:p-12 rounded-lg">
            <div className="flex items-start gap-4 mb-8">
              <GitBranch className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <h2 className="text-3xl md:text-4xl">Process Flow</h2>
            </div>

            <div className="space-y-6">
              {project.processFlow.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl mb-8">Project Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: project.screenshots }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground">
                    Screenshot {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl mb-6">Interested in working together?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/"
                  className="px-8 py-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
