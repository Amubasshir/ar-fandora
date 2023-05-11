import purpleLines from '../assets/purpleLine.png';

const SignUpCTA = () => {
  return (
    <div className="bg-[#07070F] h-auto relative flex flex-row items-center justify-center">
      <div className="relative">
        <img src={purpleLines} alt="" />
        <p className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Know about the launch before everyone else
        </p>
      </div>
    </div>
  );
};

export default SignUpCTA;
