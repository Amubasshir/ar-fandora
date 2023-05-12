import { useState } from 'react';
import close from '../assets/close.png';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import { navLinks } from '../constants/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('Home'); // default active link is 'Home'

  return (
    <nav className="w-full flex px-8  justify-between  items-center navbar">
      <img
        src={logo}
        alt="logo-image"
        className="w-full max-w-[200px] mt-5 ml-10 h-auto sm:max-w-[300px]"
      />
      <ul
        className="list-none sm:flex hidden justify-center
       pl-20 items-center flex-1"
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-montserrat font-bold cursor-pointer text-16px leading-5 ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-6'
            } text-white ${nav.title === active ? 'text-[#fcfcfc]' : ''}`}
          >
            <a href={`#${nav.id}`} onClick={() => setActive(nav.title)}>
              {nav.title}
            </a>
          </li>
        ))}
        <li className="ml-6">
          <button className="text-[#52C1B9] pr-6 font-montserrat font-bold cursor-pointer text-16px leading-5 ">
            Login
          </button>
          <button className="w-[140px] h-[60px] text-white font-montserrat font-bold cursor-pointer text-16px bg-gradient-to-r from-[#38A1BB] to-[#604DBC] shadow-lg rounded-full">
            Sign Up
          </button>
        </li>
      </ul>

      <div className="sm:hidden mt-[34px] flex flex-1 justify-end item-center">
        <img
          src={toggle ? close : menu}
          alt="menu-image"
          className="w-[36px] mt-[-18px] h-[36px] cursor-pointer object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute  top-20 right-0 max-4 my-2 min-w-[110px] rounded-xl sidebar`}
        >
          <ul className="list-none  flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-montserrat font-white cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } text-white ${nav.title === active ? 'text-[#ffffff]' : ''}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="mt-4">
              <button className="text-[#52C1B9] pr-5 font-montserrat font-bold cursor-pointer text-16px leading-5 ">
                Login
              </button>
              <button className="w-[90px] h-[36px] bg-gradient-to-r from-[#38A1BB] to-[#604DBC] shadow-lg rounded-full">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
