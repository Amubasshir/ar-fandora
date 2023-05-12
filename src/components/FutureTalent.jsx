import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import frame4 from '../assets/frame4.png';
import frame5 from '../assets/frame5.png';

const FutureTalent = () => {
  return (
    <div className="ft-section w-[1440px] h-[1540px] bg-[#EFEDF5] rounded-tl-[100px] rounded-tr-[100px] z-20 mt-[-90px] ">
      <div className="ft-text pt-24 ">
        <h1 className="font-bebas font-normal text-9xl leading-[120px] text-center  text-[#222125]">
          Welcome to the Future <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #604dbc, #15e8ba)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Pre NFT Rights
          </span>
        </h1>
        <p className="max-w-[1010px] text-2xl font-montserrat font-normal leading-9 text-center flex items-center justify-center mt-7 tracking-[-0.001em] text-[#1B1B1D] mx-auto">
          Imagine a real life auction, but everything is an NFT. <br /> Fandora
          is the first platform that enables creators to auction or sell their
          NFT <br /> rights to their audience. These pre NFT rights enable your
          audience to build <br /> content around you, pay you, and also share
          royalties. With Fandora, creators can <br /> do all this easily -
          without all the tech-speak.
        </p>
        <p className="font-montserrat font-semibold text-2xl leading-9 flex items-center justify-center mt-14 text-center tracking-[-0.001em] text-[#438ABC] mx-auto">
          These are the different types of NFT rights you can sell
        </p>
      </div>
      <div className="ft-card max-w-screen-lg mx-auto ">
        <div className="pt-4 flex flex-row flex-wrap gap-7">
          {/* single Card-1 */}
          <div className="w-72 bg-[#ffffff] shadow-slate-400 shadow-2xl flex flex-col gap-9 h-96  rounded-3xl bg-gray text-center  pt-4  relative">
            <img src={frame1} alt="" srcSet="" className="mx-auto" />
            <div className="">
              <h2 className="text-[28px] pb-4 font-bold font-montserrat leading-8 text-[#1B1B1D]  ">
                Future Talent <br /> NFT
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-[#1B1B1D] text-center mb-7">
                Pre-buy rights to your social <br /> media content
              </p>
            </div>
          </div>
          {/* single Card-2 */}
          <div className="w-72 bg-[#ffffff] shadow-slate-400 shadow-2xl flex flex-col gap-9 h-96  rounded-3xl bg-gray text-center  pt-4  relative">
            <img src={frame2} alt="" srcSet="" className="mx-auto" />
            <div className="">
              <h2 className="text-[28px] pb-4 font-bold font-montserrat leading-8 text-[#1B1B1D]  ">
                Product <br /> Placement NFT
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-[#1B1B1D] text-center mb-7">
                Pre-buy rights to your product <br /> mentions
              </p>
            </div>
          </div>
          {/* single Card-3 */}
          <div className="w-72 bg-[#ffffff] shadow-slate-400 shadow-2xl flex flex-col gap-9 h-96  rounded-3xl bg-gray text-center  pt-4  relative">
            <img src={frame3} alt="" srcSet="" className="mx-auto" />
            <div className="">
              <h2 className="text-[28px] pb-4 font-bold font-montserrat leading-8 text-[#1B1B1D]  ">
                Online <br /> Interaction NFT
              </h2>
              <p className="text-sm font-montserrat font-normal leading-4 text-[#1B1B1D] text-center mb-7">
                Pre-buy rights to specific time <br /> periods for exclusive
                interactions
              </p>
            </div>
          </div>
          {/* card section 2 */}
          <div className="flex justify-center mt-2 gap-7 mx-auto">
            {/* single Card-4 */}
            <div className="w-72 bg-[#ffffff] shadow-slate-400 shadow-2xl flex flex-col gap-9 h-96  rounded-3xl bg-gray text-center  pt-4  relative">
              <img src={frame4} alt="" srcSet="" className="mx-auto" />
              <div className="">
                <h2 className="text-[28px] pb-4 font-bold font-montserrat leading-8 text-[#1B1B1D]  ">
                  Digital Art <br /> NFT
                </h2>
                <p className="text-sm font-montserrat font-normal leading-4 text-[#1B1B1D] text-center mb-7">
                  Pre-buy rights to create <br /> digital art featuring you
                </p>
              </div>
            </div>
            {/* single Card-5 */}
            <div className="w-72 bg-[#ffffff] flex flex-col gap-9 h-96 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl bg-gray text-center shadow-slate-400 shadow-2xl  pt-4  relative">
              <img src={frame5} alt="" srcSet="" className="mx-auto" />
              <div className="">
                <h2 className="text-[28px] pb-4 font-bold font-montserrat leading-8 text-[#1B1B1D]  ">
                  Gaming <br /> NFT
                </h2>
                <p className="text-sm font-montserrat font-normal leading-4 text-[#1B1B1D] text-center mb-7">
                  Pre-buy rights to incorporate <br /> your digital avatar in a
                  game <br /> or product
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTalent;
