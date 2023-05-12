import prenft from '../assets/prenft.png';
const PreNFT = () => {
  return (
    <div className="bg-[#07070F] h-[490px] pt-20 pl-28">
      <div
        className="w-[1156px] h-[330px] rounded-3xl flex px-20 "
        style={{
          backgroundImage:
            'linear-gradient(309.43deg, #604DBC 1.49%, #15E8BA 98.51%)',
        }}
      >
        <div className="prenft-text flex flex-col gap-5 my-6">
          <h1 className="font-montserrat max-w-[390px] font-bold text-3xl leading-10 text-[#1B1B1D]">
            Pre-NFT Content and <br /> Rights Marketplace
          </h1>
          <p className="font-montserrat max-w-[438px] font-semibold text-xl leading-6 text-[#000000]">
            A first of its kind platform that discovers and supports global
            talent across multiple domains, now live!
          </p>
          <button className="w-56 h-[74px] text-white font-semibold text-base leading-5 font-montserrat rounded-full bg-[#1E1E2D]">
            CHECK IT OUT
          </button>
        </div>
        <div className="prenft-img ml-10 pb-40">
          <img
            src={prenft}
            alt=""
            style={{
              position: 'relative',
              top: '-40px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreNFT;
