import { useState } from "react";

import webLogo from "../assets/hearmate1.svg";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6  lg:bg-n-1/90 lg:backdrop-blur-sm 
      ${openNavigation ? "bg-n-1" : "bg-n-1 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <div className="relative size-16">
            <img src={webLogo} alt="Brainmaster logo" className="absolute h-full w-full" />
          </div>
        </a>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed z-[999] top-[5rem]  left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code !text-base text-nowrap uppercase text-n-8 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12
              ${item.onlyMobile ? "lg:hidden" : ""}
             `}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        {/* <a
          href="#sign-up"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#sign-in">
          Sign in
        </Button> */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;