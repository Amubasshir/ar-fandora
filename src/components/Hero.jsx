import heroBg from '../assets/HeroBg.png';
import secondheroBg from '../assets/f.png';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: '100% 100%',
      }}
    >
      <Navbar />
      <div className=" hero-section flex sm:flex-row">
        <div className="ml-16 mt-7">
          <h1 className="text-white text-[140px] uppercase  font-normal leading-[126px] font-bebas max-w-[606px]">
            Calling <br /> Creators of <br /> the Future
          </h1>
          <p className="font-montserrat  font-semibold text-2xl mt-6 leading-none ml-2 text-[#52C1B9]">
            <span>The World’s First Pre-NFT Rights</span>
            <br /> <span>and Content Marketplace</span>
          </p>

          {/* <button className="relative box-border flex items-center justify-center mt-5 border-2 ml-2 border-teal-500 text-[#52C1B9] rounded-full font-montserrat text-sm leading-7 w-32 h-9 ">
            <span className="absolute left-3 w-[11px] h-[11px] rounded-full bg-teal-500"></span>
            Now Live
          </button> */}
          <button className="relative box-border flex items-center justify-center mt-5 border-2 ml-2 border-teal-500 text-[#52C1B9] rounded-full font-montserrat text-sm leading-7 w-32 h-9 blink">
            <span className="absolute left-3 w-[11px] h-[11px] rounded-full bg-teal-500"></span>
            Now Live
          </button>
        </div>
        <div>
          <img src={secondheroBg} alt="" className="ml-32 " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
