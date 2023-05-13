import google from '../assets/Google.png';
import linkedin from '../assets/Linkedin.png';
import facebook from '../assets/facebook.png';
import purpleLines from '../assets/purpleLine.png';

const SignUpCTA = () => {
  return (
    <div className="bg-[#07070F] max-w-[1440px] h-auto pb-8 relative flex flex-col items-center justify-center">
      <div className="relative ">
        <img
          src={purpleLines}
          alt=""
          className="w-[1640px] h-16 ml-[-120px] mx-80"
        />
        <p className="text-[#52C1B9] font-montserrat font-semibold leading-7 text-2xl text-left ml-24 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Know about the launch before everyone else
        </p>
      </div>
      <div className="form mt-10 mr-20 flex items-start">
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-4 font-montserrat outline-none text-xl tracking-[0.1em] leading-7 text-[#b1baed] border-solid bg-transparent w-[575px] h-[75px] border-green-600 rounded-full p-2 mr-9 pl-9 flex-1"
          />
          <button
            type="submit"
            className="w-64 h-[75px] rounded-full p-2 px-4 text-white font-semibold leading-7 text-xl tracking-[1.6px] cursor-pointer"
            style={{
              backgroundImage:
                'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
              borderRadius: '83px',
            }}
          >
            SIGN UP
          </button>
          <div className="border-r-2 border-solid mx-6 border-[#15E8BA] h-12"></div>
        </form>
        <div className="socials flex">
          <div
            className="google w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background:
                'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
            }}
          >
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} alt="Google logo" />
            </a>
          </div>

          <div
            className="google w-20 h-20 rounded-full ml-4 pb-3 flex items-center justify-center"
            style={{
              background:
                'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
            }}
          >
            <a
              href="https://www.linkedin.com/in/mubasshirahmed7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>

          <div
            className="google w-20 h-20 rounded-full ml-4 flex items-center justify-center"
            style={{
              background:
                'linear-gradient(270.53deg, #604DBC 14.72%, #38A1BB 77.9%, #38A1BB 84.87%)',
            }}
          >
            <a
              href="https://www.facebook.com/mubasshir07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCTA;
