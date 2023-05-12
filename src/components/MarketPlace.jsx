import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';
const MarketPlace = () => {
  return (
    <div className=" h-[1300px] bg-gradient-to-b from-[#5E4CB6] via-[#6959b9] to-[#8EC0D7] max-w-[1440px] mx-auto">
      <div className="mu flex gap-12 max-w-screen-lg mx-auto ">
        <div className="mu-image">
          <img src={mockup1} alt="" />
        </div>
        <div className="mu-text max-w-[420px]">
          <p className="font-montserrat pt-12 pb-2 font-semibold text-sm leading-6 flex items-center tracking-wide text-[#ffffff]">
            NFT rights Marketplace
          </p>
          <h2 className="font-montserrat font-bold text-3xl leading-10 flex items-center tracking-[-0.03em] pb-4 text-[#ffffff]">
            Are you a Creator?
          </h2>
          <p className="text-[#ffffff] font-montserrat font-medium text-lg leading-7 pb-8 flex items-center tracking-[-0.001em]">
            Now sell Pre NFT rights and monetise your existing content for Web3
            applications
          </p>
          <button className="btn text-[#ffffff] font-montserrat font-semibold text-base leading-5 w-56 h-[74px] rounded-full bg-[#52C1B9]">
            CHECK IT OUT!
          </button>
        </div>
      </div>
      <div className="mu flex  items-center  max-w-screen-lg mx-auto ">
        <div className="mu-text max-w-[420px]">
          <p className="font-montserrat pt-12 pb-2 font-semibold text-sm leading-6 flex items-center tracking-wide text-[#ffffff]">
            NFT rights Marketplace
          </p>
          <h2 className="font-montserrat w-[420px] font-bold text-3xl leading-10 flex items-center tracking-[-0.03em] pb-4 text-[#ffffff]">
            Are you a WEB3 Pro?
          </h2>
          <p className="text-[#ffffff] font-montserrat font-medium text-lg leading-7 pb-8 flex items-center tracking-[-0.001em]">
            Now sell Pre NFT rights and monetise your existing content for Web3
            applications
          </p>
          <button className="btn text-[#ffffff] font-montserrat font-semibold text-base leading-5 w-56 h-[74px] rounded-full bg-[#52C1B9]">
            CHECK IT OUT!
          </button>
        </div>
        <div className="mu-image">
          <img
            src={mockup2}
            alt=""
            className="mu-image max-w-[960px] max-h-[690px] pr-44"
          />
        </div>
      </div>
      <div className="mu-bottom-text max-w-screen-lg mx-auto ">
        <p className="font-montserrat pb-2 text-center font-semibold text-sm leading-6 flex items-center justify-center uppercase text-[#ffffff] tracking-[1px]">
          homegrown Marketplace
        </p>
        <h2 className="font-montserrat font-bold pb-4 text-3xl leading-10 flex items-center justify-center text-center tracking-[-0.02em] text-[#ffffff] ">
          Explore an NFT Marketplace unlike any other
        </h2>
        <p className="font-montserrat font-medium pb-8 text-base leading-7 flex items-center justify-center text-center tracking-[-0.001em] text-[#ffffff]  ">
          Our homegrown NFT marketplace allows creators and pre NFT rights
          holders to create and sell officially licensed NFTs
        </p>
        <button className="w-[220px] h-[74px] rounded-full flex items-center justify-center text-center bg-[#606060] font-montserrat font-semibold text-base leading-5 text-[#ffffff] mx-auto ">
          COMING SOON
        </button>
      </div>
    </div>
  );
};

export default MarketPlace;
