import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LeftPanel = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 px-6 py-12 md:px-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">MEWOUA LYDIE</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Fullstack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I create modern and accessible web interfaces designed to deliver the best user experience.
        </p>

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {[
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Technologies', href: '/technologie' },
            { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <li key={item.label}>
                <NavLink className="group flex items-center py-3" to={item.href}>
                  <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://github.com/lydie2025/" aria-label="GitHub">
            <Github size={24} />
          </a>
        </li>
        <li>
          <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://www.linkedin.com/in/lydie-mewoua-19a2b7322/" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </li>
        <li>
          <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="mklydie23xy@email.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </li>
        <li>
          <a className="block text-slate-400 hover:text-slate-200 transition-colors" href="https://www.upwork.com/freelancers/~016ddca0761fbc88ba?viewMode=1" aria-label="Upwork">
            <Briefcase size={24} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default LeftPanel;