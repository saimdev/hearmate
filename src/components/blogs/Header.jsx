import { useState } from "react";

import webLogo from "@/assets/hearmate1.svg";

import { Link } from "react-router-dom";

const Header = () => {

    const [openNavigation, setOpenNavigation] = useState(false);

    

    return (
        <div
            className={`fixed top-0 left-0 w-full  z-50 border-b border-n-6 lg:bg-n-1/90 lg:backdrop-blur-sm 
      ${openNavigation ? "bg-n-1" : "bg-n-1 backdrop-blur-sm"}`}
        >
            <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <Link className="block w-[12rem] xl:mr-8" to="/">
                    <div className="relative size-16">
                        <img src={webLogo} alt="Brainmaster logo" className="absolute h-full w-full" />
                    </div>
                </Link>
                <nav
                    className={` flex   left-0 right-0 bottom-0  lg:static lg:flex  lg:bg-transparent`}>
                    <div className="relative z-2 flex items-center justify-center lg:flex-row">
                        <Link to="/" className={`block relative font-code !text-base text-nowrap uppercase text-n-8 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12
              
             `}>Home</Link>
                        <Link to="/blogs" className={`block relative font-code !text-base text-nowrap uppercase text-n-8 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-color-1 xl:px-12
              
             `}>Blogs</Link>
                    </div>
                </nav>
         
            </div>
        </div>
    );
};

export default Header;