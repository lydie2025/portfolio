const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">

      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        About
      </h2>

      <div className="space-y-4 leading-relaxed text-slate-400">
        <p>
          I'm a fullstack developer passionate about building{' '}
          <span className="font-medium text-slate-200">modern</span> and{' '}
          <span className="font-medium text-slate-200">accessible</span> web
          interfaces. I enjoy working at the intersection of design and engineering,
          where great experiences come to life.
        </p>

        <p>
          I specialize in{' '}
          <span className="font-medium text-slate-200">React</span>,{' '}
          <span className="font-medium text-slate-200">Node.js</span>, and
          building scalable full-stack applications — from crafting pixel-perfect
          UIs to designing clean backend APIs.
        </p>

        <p>
          When I'm not coding, I'm exploring new design trends, contributing to
          open-source projects, or helping clients on{' '}
          <span className="font-medium text-slate-200">Upwork</span> bring their
          ideas to life.
        </p>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
            Technologies I work with
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[
              'JavaScript (ES6+)',
              'TypeScript',
              'React / Next.js',
              'Node.js / Express',
              'Tailwind CSS',
              'PostgreSQL / MongoDB',
            ].map((tech) => (
              <li key={tech} className="flex items-center gap-2 text-slate-400">
                <span className="text-teal-400">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
