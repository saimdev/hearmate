import { check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

import webLogo from "../assets/hearmate1.svg"
import Heading from "./Heading";

import { curve } from "../assets";

const Collaboration = () => {
  return (
    <Section id="comparison">


      <div
        className={`container md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      >
        <h2 className="h2 space-y-3">
          <span className="inline-block relative">
            <span style={{ color: "#B84646" }}>Hear</span>
            <span className="text-[#0058A5]">Mate</span>
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            /></span>
          <p>
            VS
          </p>

          <p>
            HearMate
          </p>

        </h2>
      </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h4 className="h2 mb-4 md:mb-8">
            HearMate
            is the new
            Hearing Aid
          </h4>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h3 className="body-2 ml-5">{item.title}</h3>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <a
            href="https://play.google.com/store/apps/details?id=com.corise.hearmate"
            target="_blank"
            referrerPolicy="no-referrer"
          >

            <Button className="z-[9] text-color-4">Try it to <br /> believe it</Button>
          </a>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-10 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">

          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[10rem] aspect-square m-auto p-[0.2rem] bg-color-3 rounded-full animate-pulse">
                <div className="flex items-center justify-center w-full h-full bg-n-1 rounded-full">
                  <div className="size-24">
                    <img
                      src={webLogo}
                      alt="Hear Mate logo"
                      className="animate-none w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul>
              {/* {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom transition-transform hover:scale-105 rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))} */}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
