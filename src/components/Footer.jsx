import { useState } from 'react';
import discord1 from '../assets/discord1.png';
import instagram from '../assets/instagram.png';
import linkedin1 from '../assets/linkedin1.png';
import logo from '../assets/logo.png';
import mail from '../assets/mail.png';
import twitter from '../assets/twitter.png';
import { navLinks } from '../constants/index';

const Footer = () => {
  const [active, setActive] = useState();
  return (
    <div
      className="h-[660px] bg-[#07060E] mt-[-100px] relative"
      style={{ zIndex: '-10' }}
    >
      <div className="footer-top pt-96 max-w-screen-lg mx-auto">
        <div>
          <div className="w-full flex px-[-20px] justify-between  items-center navbar">
            <img
              src={logo}
              alt="logo-image"
              className="w-full max-w-[200px] mt-5 ml-1 h-auto sm:max-w-[300px]"
            />
            <ul className="list-none sm:flex hidden justify-end  items-center ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-montserrat font-bold cursor-pointer text-base leading-6 text-center ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-8'
                  } text-white ${nav.title === active ? 'text-[#fcfcfc]' : ''}`}
                >
                  <a href={`#${nav.id}`} onClick={() => setActive(nav.title)}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr
          style={{
            backgroundColor: '#fefefe',
            opacity: '0.1',
            borderColor: '#fefefe',
            marginTop: '32px',
          }}
        />
      </div>
      <div className="footer-middle flex items-start gap-96 max-w-screen-lg mx-auto mt-8">
        <div className="fm-icons flex items-center gap-4 w-6 h-6">
          <img src={twitter} alt="" />
          <img src={linkedin1} alt="" />
          <img src={instagram} alt="" />
          <img src={discord1} alt="" />
          <img src={mail} alt="" />
          <p className="font-montserrat font-medium p text-base leading-6 flex text-[#fefefe66]">
            reachus@fandora.app
          </p>
        </div>
        <div className="fm-links font-montserrat font-medium text-base pl-6 leading-6 flex justify-around text-[#fefefe66]">
          <p className="pr-10">Privacy Policy</p>
          <p className="pr-10">Terms of use</p>
          <p>©Fandora 2023 - All rights reserved</p>
        </div>
      </div>
      <div className="footer-bottom flex gap-8 max-w-screen-lg mx-auto mt-6">
        <div>
          <p className="font-montserrat font-medium text-sm leading-6 flex items-center text-center text-[#fefefe66]">
            Designed by @indiecreatorsco
          </p>
        </div>
        <div>
          <p className="font-montserrat pl-4 font-medium text-sm leading-6 flex items-center text-center text-[#fefefe66]">
            Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St
            #420, Vancouver, BC V6C 1A5, Canada
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
