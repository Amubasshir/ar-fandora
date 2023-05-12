import like from '../assets/Like.png';
import medal from '../assets/Medal.png';
import token from '../assets/Token.png';
import wallet from '../assets/Wallet.png';
import shopping from '../assets/nft-marketplace.png';

const Simplicity = () => {
  const string = '>>>';
  return (
    <div className="simplicity-section bg-[#07070F] w-[1440px] h-[1292px]">
      <div className=" max-w-screen-lg mx-auto pt-10">
        <div className="text-center pb-8">
          <h1
            className="text-6xl font-semibold pb-5 text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #604dbc, #15e8ba)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simplicity {string} Jargon
          </h1>

          <p className="text-2xl font-montserrat font-normal text-[#ffffff] leading-9">
            We take care of everything so the artists can focus on what they do
            best. <b>Create art.</b>
          </p>
        </div>

        {/* card section 1 */}
        <div className="pt-28 flex flex-row flex-wrap gap-7">
          {/* single Card-1 */}
          <div className="w-72 flex flex-col gap-10 h-96 bg-[#222125] rounded-3xl text-center p-8 py-12 relative">
            <img
              src={medal}
              alt=""
              srcSet=""
              className="absolute bottom-72 left-[80px]"
            />
            <div className="pt-20">
              <h2 className="text-[28px] font-bold font-montserrat leading-8 text-white pb-3">
                Pre-NFT Rights
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-[#fffffc] pb-11">
                NFT rights enable your audience to build content around you and
                pay you as well as share royalties.
              </p>
              <button className="font-semibold bg-[#2E2D32] w-[212px] h-10 font-montserrat leading-4 text-[#00CDAC] px-4 py-2 rounded-full  text-sm">
                Beta Launch Dec 13
              </button>
            </div>
          </div>
          {/* single Card-2 */}
          <div className="w-72 h-96 bg-[#222125] rounded-3xl bg-gray text-center p-8 py-12  relative">
            <img
              src={token}
              alt=""
              srcSet=""
              className="absolute bottom-[330px] left-[80px]"
            />
            <div className="pt-20">
              <h2 className="text-[28px] font-bold font-montserrat leading-8 text-white  pb-3">
                Talent Tokens
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-white pb-11">
                Talent Token are tied to creator’s growth. Creators can reward
                supporters that want to join on their journey.
              </p>
              <button className="w-[177px] h-10  font-semibold bg-[#2E2D32] font-montserrat leading-4 text-[#8E79F3]  px-4 py-2 rounded-full  text-sm">
                Coming Soon
              </button>
            </div>
          </div>
          {/* single Card-3 */}
          <div className="w-72 h-96 bg-[#222125] rounded-3xl bg-gray text-center p-8 py-12  relative">
            <img
              src={wallet}
              alt=""
              srcSet=""
              className="absolute bottom-[330px] left-[80px]"
            />
            <div className="pt-20">
              <h2 className="text-[28px] font-bold font-montserrat leading-8 text-white  pb-4">
                Tokenised Crowdfunding
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-white pb-2">
                Tokenised crowdfunding allows creators to raise capital to
                improve the quality of their content.
              </p>
              <button className="w-[177px] h-10  font-semibold bg-[#2E2D32] font-montserrat leading-4 text-[#8E79F3]  px-4 py-2 rounded-full  text-sm">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        {/* card section 2 */}
        <div className="flex justify-center mt-32 gap-7">
          {/* single Card-4 */}
          <div className="w-72 h-96 bg-[#222125] rounded-3xl bg-gray text-center p-8 py-16 relative">
            <img
              src={like}
              alt=""
              srcSet=""
              className="absolute bottom-72 left-[80px]"
            />
            <div className="pt-20">
              <h2 className="text-[28px] font-bold font-montserrat leading-8 text-white  pb-3">
                Talent Content Platform
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-white pb-11">
                A platform that allows creators to create and have direct
                control of audience revenues.
              </p>
              <button className="w-[177px] h-10  font-semibold bg-[#2E2D32] font-montserrat leading-4 text-[#8E79F3]  px-4 py-2 rounded-full  text-sm">
                Coming Soon
              </button>
            </div>
          </div>
          {/* single Card-5 */}
          <div className="w-72 h-96 bg-[#222125] rounded-3xl bg-gray text-center p-8 py-16 relative">
            <img
              src={shopping}
              alt=""
              srcSet=""
              className="absolute bottom-72 left-[80px]"
            />
            <div className="pt-20">
              <h2 className="text-[28px] font-bold font-montserrat leading-8 text-white  pb-3">
                NFT Marketplace
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-white pb-7">
                NFT rights enable your audience to build content around you and
                pay you as well as share royalties.
              </p>
              <button className="font-semibold bg-[#2E2D32] w-[212px] h-10 font-montserrat leading-4 text-[#00CDAC] px-4 py-2 rounded-full  text-sm">
                Beta Launch Dec 13
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplicity;
