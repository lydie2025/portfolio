import  Contact  from './sections/Contact';
import About from './sections/About';
import Projects from './sections/Projects';
import Technologie from './sections/Technologie';


const RightPanel = () => {
  return (
    <main id="content" className="lg:w-1/2 lg:py-24 px-6 pt-12 pb-24 md:px-12">
      <About />
      <Projects />
      <Technologie />
      <Contact />
    </main>
  );
};

export default RightPanel;