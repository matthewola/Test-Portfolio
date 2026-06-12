import { Building2, ArrowUpRight } from 'lucide-react';

const companyProjects = [
  {
    company: 'OpenFactor Group',
    logo: 'OFG',
    period: '2024 - Present',
    role: 'Product Designer',
    projects: [
      {
        name: 'Digital Banking Platform',
        description: 'Redesigned core banking interface serving 100K+ users with improved accessibility and streamlined workflows.',
        impact: '35% reduction in task completion time',
      },
      {
        name: 'Lending Dashboard',
        description: 'Created comprehensive loan management system for financial advisors with real-time analytics.',
        impact: '50% faster loan processing',
      },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Digital Abundance',
    logo: 'DA',
    period: '2021 - 2025',
    role: 'Product Designer → Lead UI/UX Designer',
    projects: [
      {
        name: 'Course Platform Redesign',
        description: 'Led complete redesign of online learning platform, improving course discovery and student engagement.',
        impact: '60% increase in course completion',
      },
      {
        name: 'Mobile Learning App',
        description: 'Designed mobile-first experience for on-the-go learning with offline capabilities.',
        impact: '40% growth in mobile users',
      },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Pocket Food',
    logo: 'PF',
    period: '2023 - 2024',
    role: 'UX Designer',
    projects: [
      {
        name: 'Smart Meal Planner',
        description: 'Developed AI-powered meal planning feature that learns user preferences and dietary restrictions.',
        impact: '70% daily active user retention',
      },
      {
        name: 'Grocery Integration',
        description: 'Integrated seamless grocery ordering directly from meal plans with major retailers.',
        impact: '45% conversion to purchase',
      },
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function CompanyProjects() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Company Projects</h2>
          <p className="text-muted-foreground">
            Key projects delivered while working with leading organizations
          </p>
        </div>

        <div className="space-y-12">
          {companyProjects.map((company, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-8 md:p-12 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div
                    className={`w-20 h-20 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center text-white mb-4`}
                  >
                    <span className="text-2xl">{company.logo}</span>
                  </div>
                  <h3 className="text-2xl mb-2">{company.company}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{company.role}</p>
                  <p className="text-sm text-muted-foreground">{company.period}</p>
                </div>

                <div className="md:w-2/3 space-y-6">
                  {company.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="group p-6 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl">{project.name}</h4>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        <Building2 className="w-4 h-4" />
                        {project.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
