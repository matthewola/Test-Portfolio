import { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
// import CompanyProjects from './CompanyProjects';
import Skills from './Skills';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Navigation from './Navigation';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <Hero />
        <About />
        <Projects />
        {/* <CompanyProjects /> */}
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-muted-foreground">© 2025 Matthew Ola. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
