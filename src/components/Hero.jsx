import heroBg from '../assets/HeroBg.png';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Navbar />
    </section>
  );
};

export default Hero;
