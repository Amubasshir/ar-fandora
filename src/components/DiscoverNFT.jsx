import discovernft from '../assets/discover-frame.png';
const DiscoverNFT = () => {
  return (
    <div className="pt-24 ">
      <div className="w-[1110px] h-[312px] rounded-3xl  flex gap-10 max-w-screen-lg mx-auto px-2 bg-[#ffffff] ">
        <div className="flex gap-8 mx-auto">
          <div className="prenft-text flex flex-col justify-center">
            <h2 className="font-montserrat max-w-[390px] font-bold text-[28px] leading-9 text-[#1B1B1D] pb-4 pt-6">
              Discover and sell <br /> your own NFTs
            </h2>
            <p className="font-inter max-w-[419px] font-normal text-lg leading-7 flex items-center text-[#1B1B1D] pb-7">
              Join fandora and support outstanding global <br /> talent across
              multiple domains.
            </p>
            <button
              className="w-[209px] h-[71px] text-white  font-semibold text-base leading-5 font-montserrat rounded-full bg-[#1E1E2D]"
              style={{
                backgroundImage:
                  'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
                borderRadius: '83px',
              }}
            >
              JOIN FANDORA
            </button>
          </div>
          <div className="prenft-img ml-1 pb-4 w-[500px] h-[400px]">
            <img
              src={discovernft}
              alt=""
              style={{
                position: 'relative',
                bottom: '40px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNFT;
