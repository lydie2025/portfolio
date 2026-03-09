import About from './sections/About';
import Projects from './sections/Projects';
// import Experience from './sections/Experience';
// import Projects from './sections/Projects';

const RightPanel = () => {
  return (
    <main id="content" className="lg:w-1/2 lg:py-24 px-6 pt-12 pb-24 md:px-12">
      <About />
      {/* <Experience /> */}
      {<Projects />}
    </main>
  );
};

export default RightPanel;