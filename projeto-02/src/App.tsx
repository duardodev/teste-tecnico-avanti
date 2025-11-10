import { GitHubUserFinder } from './components/github-user-finder';
import camada from './assets/camada.svg';
import ellipseOne from './assets/ellipse-1.svg';
import ellipseTwo from './assets/ellipse-2.svg';

function App() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
      <img src={camada} alt="" className="absolute left-[73px] top-[28px] -z-10" />
      <img src={ellipseOne} alt="" className="absolute right-0 -z-10 top-0" />
      <img src={ellipseTwo} alt="" className="absolute left-0 top-[198px] -z-10" />

      <main className="max-w-[1156px] min-h-[537px] p-10 w-full bg-[#000000]">
        <GitHubUserFinder />
      </main>
    </div>
  );
}

export default App;
