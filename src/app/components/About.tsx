export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Digital designer focused on building user-centered experiences
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>
              I specialize in digital product design for web and mobile applications,
              bringing ideas to life through creative strategy and functional design systems.
            </p>
            <p>
              My approach blends user-centered experiences with engaging interfaces,
              defining, designing, and launching concepts that enhance customer experience
              and business profitability.
            </p>
            <p>
              I collaborate on interactive mockups, UI solutions, and landing pages that
              deliver competitive advantages for founders and startups worldwide.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="p-6 border border-border rounded-lg">
            <h3 className="mb-2">Product Design</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end digital product design for web and mobile
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="mb-2">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">
              User interfaces that balance aesthetics with functionality
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="mb-2">Design Systems</h3>
            <p className="text-sm text-muted-foreground">
              Scalable component libraries and style guides
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg">
            <h3 className="mb-2">Brand Identity</h3>
            <p className="text-sm text-muted-foreground">
              Visual identity that resonates with your audience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
