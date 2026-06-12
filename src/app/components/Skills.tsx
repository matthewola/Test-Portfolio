const skills = {
  design: [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'InVision',
    'Framer',
    'Principle',
  ],
  development: [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Webflow',
    'WordPress',
  ],
  methodology: [
    'User Research',
    'Wireframing',
    'Prototyping',
    'Usability Testing',
    'Design Systems',
    'Information Architecture',
    'Interaction Design',
    'Responsive Design',
  ],
  tools: [
    'Notion',
    'Slack',
    'Jira',
    'Trello',
    'Miro',
    'FigJam',
    'Maze',
    'Hotjar',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4">Skills & Tools</h2>
        <p className="text-muted-foreground mb-12">
          Technologies and methodologies I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-6">Design Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Development</h3>
            <div className="flex flex-wrap gap-3">
              {skills.development.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Methodology</h3>
            <div className="flex flex-wrap gap-3">
              {skills.methodology.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Collaboration</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
