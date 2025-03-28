import { MouseParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import Button from "./Button";
import Heading from "./Heading";

import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

import HomeScreen from "../assets/mockups/home.svg"
import SplashScreen from "../assets/mockups/splash.svg"
import TestScreen from "../assets/mockups/test_start.svg"
import ReporthScreen from "../assets/mockups/report.svg"



const AndriodMockUp = () => {
    return (
        <Section id="" className="overflow-hidden">
            <div className="container relative z-2">
                {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        alt="Sphere"
                        width={255}
                        height={255}
                        className="relative z-1 animate-spin-slow"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <MouseParallax strength={0.07}>
                            <img
                                src={stars}
                                alt="stars"
                                width={950}
                                height={400}
                                className="w-full"
                            />
                        </MouseParallax>
                    </div>
                </div> */}
                <Heading
                    title="Download App "
                    tag="Get started with "
                    accent="HearMate"
                />
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4">
                        <div>
                            <img src={SplashScreen} alt="" />
                        </div>
                        <div>
                            <img src={HomeScreen} alt="" />
                        </div>
                        <div>
                            <img src={TestScreen} alt="" />
                        </div>
                        <div>
                            <img src={ReporthScreen} alt="" />
                        </div>
                    </div>
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <Button
                        className="text-xs font-code font-bold tracking-wider uppercase"
                        href="#pricing"
                    >
                        Download
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default AndriodMockUp;
