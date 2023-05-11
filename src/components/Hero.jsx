import heroBg from '../assets/HeroBg.png';
import secondheroBg from '../assets/f.png';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: '100% 100%',
      }}
    >
      <Navbar />
      <div className="flex sm:flex-row">
        <div className="ml-20 mt-7">
          <h1 className="text-white text-[140px] uppercase  font-normal leading-[126px] font-bebas max-w-[606px]">
            Calling <br /> Creators of <br /> the Future
          </h1>
          <p className="font-montserrat  font-semibold text-2xl mt-6 leading-none text-[#52C1B9]">
            <span>The World’s First Pre-NFT Rights</span>
            <br /> <span>and Content Marketplace</span>
          </p>
          {/* <button className="box-border flex items-center justify-center mt-5 border-2 border-teal-500 text-[#52C1B9] rounded-full font-montserrat text-sm leading-7 w-32 h-9 ">
            <span className="live-icon w-3 h-3 rounded-full bg-[52C1B9] ">
              .
            </span>
            Now Live
          </button> */}
          <button className="relative box-border flex items-center justify-center mt-5 border-2 border-teal-500 text-[#52C1B9] rounded-full font-montserrat text-sm leading-7 w-32 h-9 ">
            <span className="absolute left-3 w-[11px] h-[11px] rounded-full bg-teal-500"></span>
            Now Live
          </button>
        </div>
        <div>
          <img src={secondheroBg} alt="" className="ml-80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
