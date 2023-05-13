import frame1 from '../assets/crowd-frame1.png';
import frame2 from '../assets/crowd-frame2.png';
import vector from '../assets/vector.png';
import DiscoverNFT from './DiscoverNFT';
const CrowdFunding = () => {
  return (
    <div className="cf-section w-[1440px] h-[1240px] bg-[#1B1B1D] rounded-bl-[100px] rounded-br-[100px] ">
      <div>
        <div className="cf-top flex items-center justify-center gap-10 pt-10 ">
          <div className="cft-img max-w-[484px] max-h-[484px]">
            <img src={frame1} alt="" />
          </div>
          <div className="cft-text max-w-[510px]">
            <p className="font-montserrat font-bold text-sm leading-6 flex items-center tracking-[1px] uppercase text-[#ffffff] pb-4">
              Tokenised Crowdfunding
            </p>
            <h2 className=" font-montserrat font-bold text-4xl leading-10 flex items-center tracking-[-0.02em] text-[#538EB6] pb-2">
              Create content. Make money for everybody.
            </h2>
            <p className="font-montserrat font-normal text-lg leading-7 flex items-center text-[#ffffffb3] pb-8">
              With Fandora you can enable your loyal fanbase to bid for a share
              of the revenue from your next product or content offering to be
              launched over a stipulated time period. This leads to an audience
              base that is even more invested in you and your work, literally
              and figuratively.
            </p>
            <button
              className="w-[338px] h-[71px] flex items-center justify-center rounded-full font-montserrat font-semibold text-base leading-5 text-[#ffffff]"
              style={{
                backgroundImage:
                  'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
                borderRadius: '83px',
              }}
            >
              JOIN THE CONVERSATION
              <span className="pl-4">
                <img src={vector} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="cf-bottom flex items-center justify-center">
          <div className="cfb-text max-w-[510px]">
            <p className="font-montserrat font-bold text-sm leading-6 flex items-center tracking-[1px] uppercase text-[#ffffff] pb-4">
              Tokenised Crowdfunding
            </p>
            <h2 className=" font-montserrat font-bold text-4xl leading-10 flex items-center tracking-[-0.02em] text-[#538EB6] pb-2">
              Build your custom subscription platform
            </h2>
            <p className="font-montserrat font-normal text-lg leading-7 flex items-center text-[#ffffffb3] pb-8">
              Build your custom subscription platform Create your own content
              and subscription engine and have direct control of audience
              revenues. Fandora gives you access to state-of-the-art No-Code
              content platform which enables you to raise subscriptions as well
              as mint NFTs
            </p>
            <button
              className="w-[338px] h-[71px] flex items-center justify-center rounded-full font-montserrat font-semibold text-base leading-5 text-[#ffffff]"
              style={{
                backgroundImage:
                  'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
                borderRadius: '83px',
              }}
            >
              JOIN THE CONVERSATION
              <span className="pl-4">
                <img src={vector} alt="" />
              </span>
            </button>
          </div>
          <div className="cfb-img max-w-[484px] max-h-[484px]">
            <img src={frame2} alt="" />
          </div>
        </div>
      </div>
      <DiscoverNFT />
    </div>
  );
};

export default CrowdFunding;
