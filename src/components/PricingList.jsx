import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex justify-between gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-full min-w-[20rem] max-lg:w-full max-h-96 px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-14  even:border-3  [&>h3]:first:text-color-2 [&>h3]:even:text-color-1 [&>h3]:last:text-color-4"
        >
          <h3 className="h4 mb-4">{item.title}</h3>
          <p className={`body-2 min-h-[4rem] mb-3 text-n-1/50 ${item?.id == 0 ? "text-color-3 font-bold text-3xl" : ""}`}>
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6 justify-center">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-5xl leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={
              item.price < 100
                ? "#pricing"
                : "mailto:hearmate.app@gmail.com"
            }
            white={item.price < 100}
          >
            {item.price < 100 ? "Get started" : "Get started"}
          </Button>

          <ul>
            {item?.features?.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
