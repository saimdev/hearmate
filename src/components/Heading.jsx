import { curve } from "../assets";
import Tagline from "./Tagline";

const Heading = ({ className, title, accent, text, tag, tagAccent }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <Tagline className="mb-4 md:justify-center">
          {tag}
          {tagAccent && <span className="text-color-3">{tagAccent}</span>}
        </Tagline>
      )}
      {title && (
        <h2 className="h2">
          {title}
          {accent && <span className="inline-block relative">
            <span style={{ color: "#B84646" }}>Hear</span>
            <span className="text-[#0058A5]">Mate</span>
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            /></span>}
        </h2>
      )}
      {text && <p className="body-4 mt-4 text-n-8">{text}</p>}
    </div>
  );
};

export default Heading;
