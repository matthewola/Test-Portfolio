import { ArrowUpRight, Mail, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Matthew_Ola_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-accent rounded-full">
          <span className="text-sm text-accent-foreground">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          UI/UX Specialist &<br />
          Creative Product Designer
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Building user-centered digital experiences for founders, startups, and next-gen brands that create competitive advantages.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Let's work together
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:thematthewola@gmail.com"
            className="px-8 py-4 border border-border rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get in touch
          </a>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-4 border border-border rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
