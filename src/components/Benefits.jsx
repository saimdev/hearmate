import { curve } from "../assets";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <div
          className={`md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
        >

          <h2 className="h2 my-3">
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
          </h2>
          <p className="h2">A Smart Hearing Aid with Exceptional Features</p>

        </div>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]  max-w-[24rem] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h3 className="h5 mb-5 text-n-8">{item.title}</h3>
                <p className="body-2 mb-6 text-n-5">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  /> */}
                  <span className={`bg-purple-600 p-4 rounded-2xl text-n-1`}>
                    <item.icon size={28} />
                  </span>
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-1"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={384}
                      height={366}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
