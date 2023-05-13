import './App.css';
import CrowdFunding from './components/Crowdfunding';
import Footer from './components/Footer';
import FutureTalent from './components/FutureTalent';
import Hero from './components/Hero';
import MarketPlace from './components/MarketPlace';
import PreNFT from './components/PreNFT';
import SignUpCTA from './components/SignUpCTA';
import Simplicity from './components/Simplicity';

function App() {
  return (
    <div>
      <Hero />
      <SignUpCTA />
      <PreNFT />
      <Simplicity />
      <FutureTalent />
      <MarketPlace />
      <CrowdFunding />
      <Footer />
    </div>
  );
}

export default App;
