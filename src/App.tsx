import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default App;