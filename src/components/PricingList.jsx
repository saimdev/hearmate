import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {

  const colorMap = {
    0: 'text-color-1',
    1: 'text-color-2',
    2: 'text-color-4',
  }

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[24rem] bg-n-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-n-2 hover:border-color-1/30"
        >
          <div className="px-8 py-10">
            {/* Header with colored accent */}
            <div className={`mb-6 pb-6 border-b border-n-2 `}>
              <h3 className={`text-2xl font-bold mb-2 ${colorMap[item.id]}`}>
                {item.title}
              </h3>
              <p className={`text-n-5 ${item.id === 0 ? "text-color-3 font-semibold" : ""}`}>
                {item.description}
              </p>
            </div>

            {/* Price display */}
            <div className="flex items-center justify-center h-20 mb-8">
              {item.price && (
                <div className="flex items-end">
                  <div className="text-2xl font-medium text-n-5">$</div>
                  <div className="text-5xl font-bold text-n-7">
                    {item.price}
                  </div>
                  {item.price < 100 && (
                    <span className="text-n-4 ml-2">/month</span>
                  )}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button
              className={`w-full mb-8 py-3 rounded-lg font-semibold transition-all ${item.price < 100
                ? " text-color-3"
                : "bg-n-1 text-color-4 border-2 border-color-4 hover:bg-color-4/10"
                }`}
              href={
                item.price < 100
                  ? "#pricing"
                  : "mailto:hearmate.app@gmail.com"
              }
            >
              {item.price < 100 ? "Get Started" : "Contact Sales"}
            </Button>

            {/* Features list */}
            <ul className="space-y-4">
              {item?.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <div className={`p-1 rounded-full mr-3 mt-1 ${item.id === 0 ? 'bg-color-1/10' :
                    item.id === 1 ? 'bg-color-2/10' : 'bg-color-4/10'
                    }`}>
                    <img
                      src={check}
                      width={16}
                      height={16}
                      alt="Check"
                      className={`
                        ${item.id === 0 ? 'text-color-1' :
                          item.id === 1 ? 'text-color-2' : 'text-color-4'}
                      `}
                    />
                  </div>
                  <p className="text-n-5">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional decorative element */}
          <div className={`h-1 w-full ${item.id === 0 ? 'bg-color-1' :
            item.id === 1 ? 'bg-color-2' : 'bg-color-4'
            }`}></div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;