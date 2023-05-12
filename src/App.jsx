import './App.css';
import Hero from './components/Hero';
import PreNFT from './components/PreNFT';
import SignUpCTA from './components/SignUpCTA';
import Simplicity from './components/Simplicity';

function App() {
  return (
    <div className="w-[1440px]">
      <Hero />
      <SignUpCTA />
      <PreNFT />
      <Simplicity />
    </div>
  );
}

export default App;
