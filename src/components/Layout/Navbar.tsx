import React from 'react';
import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-400 selection:bg-teal-300 selection:text-teal-900 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* SECTION GAUCHE : Fixe sur desktop */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">MEWOUA LYDIE</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Fullstack Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I create modern and accessible web interfaces designed to deliver the best user experience.
            </p>

            {/* NAVIGATION - Style spécifique avec barres horizontales */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience">
                    <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Experience</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Projects</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
            <li className="text-xs">
              <a className="block hover:text-slate-200" href="https://github.com/lydie2025/"><Github size={24} /></a>
            </li>
            <li className="text-xs">
              <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/lydie-mewoua-19a2b7322/"><Linkedin size={24} /></a>
            </li>
            <li className="text-xs">
              <a className="block hover:text-slate-200" href="https://mail.google.com/mail/u/0/?hl=fr#inbox"><Mail size={24} /></a>
            </li>
            <li className="text-xs">
              <a className="block hover:text-slate-200" href="https://www.upwork.com/freelancers/~016ddca0761fbc88ba?viewMode=1"><Briefcase size={24} /></a>
            </li>
          </ul>
        </header>

        {/* SECTION DROITE : Scrollable */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="space-y-4 leading-relaxed">
              <p>
                I’m a frontend engineer with a specialty in web accessibility, focused on building <span className="font-medium text-slate-200">pixel-perfect</span>, intuitive user interfaces. I enjoy working at the intersection of design and engineering...
              </p>
              <p>
                Currently, I’m a senior frontend engineer at <span className="font-medium text-slate-200">Klaviyo</span>, where I work on the component library team to help maintain and evolve our design system.
              </p>
              <p>
                Previously, I’ve worked across a wide range of environments, including <span className="font-medium text-slate-200">Apple</span>, <span className="font-medium text-slate-200">Starry Internet</span>, and <span className="font-medium text-slate-200">Upstatement</span>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Navbar;