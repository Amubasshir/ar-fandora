import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NFTRights from './components/NFTRights';
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
      <NFTRights />
      <Footer />
    </div>
  );
}

export default App;
