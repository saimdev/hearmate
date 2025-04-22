
import { socials } from "../constants";
import Section from "./Section";
import webLogo from "../assets/hearmate1.svg";
import { curve } from "../assets";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="size-20 lg:size-24 xl:size-28 overflow-hidden p-3 md:hidden">
          <img src={webLogo} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-5 text-center sm:gap-2 sm:text-left">
          <div className="flex items-center gap-3">
            <div className="size-16 md:size-20 lg:size-24 xl:size-28 overflow-hidden p-3 hidden md:block">
              <img src={webLogo} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-5">
              <span className="inline-block relative text-3xl">
                <span style={{ color: "#B84646" }}>Hear</span>
                <span className="text-[#0058A5]">Mate</span>
                <img
                  src={curve}
                  className="absolute top-10 left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                /></span>
              <p className="caption">
                <a href="mailto:info@hearmate.app" className="text-[#5DCA76]">
                  info@hearmate.app
                </a>
              </p>
            </div>
          </div>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                href={item.url}
                target="_blank"
              >
                <img
                  src={item.iconUrl}
                  width={20}
                  height={20}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="caption text-n-4 lg:block text-center mt-10">
        Powered by <a href="https://www.thecorise.com">Corise</a> ©{" "}
        {new Date().getFullYear()}. All rights reserved.
      </p>
    </Section>
  );
};

export default Footer;
