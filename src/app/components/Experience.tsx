const experiences = [
  {
    company: 'OpenFactor Group',
    role: 'Product Designer',
    period: '2024 - Present',
    description: 'Digital finance solutions including banking, lending, wallets, payments, and compliance platforms.',
  },
  {
    company: 'Digital Abundance',
    role: 'Product Designer',
    period: '2024 - 2025',
    description: 'Online academy and course platform design.',
  },
  {
    company: 'Pocket Food',
    role: 'UX Designer',
    period: '2023 - 2024',
    description: 'Meal planning application to reduce decision stress.',
  },
  {
    company: 'Digital Abundance',
    role: 'Lead UI/UX Designer',
    period: '2022 - 2023',
    description: 'Digital skill learning platform.',
  },
  {
    company: 'Digital Abundance',
    role: 'UI/UX Designer',
    period: '2021 - 2022',
    description: 'Digital skill learning platform.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-8 pb-8 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl mb-1">{exp.company}</h3>
                  <p className="text-primary">{exp.role}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
