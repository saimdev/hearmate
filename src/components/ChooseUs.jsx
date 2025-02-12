import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const ChooseUs = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const accordionData = [
        {
            id: 1,
            title: "Patented Noise Suppression",
            content:
                "We have a serious team of engineers. We have 50+ issued patents. Now add speech recognition and machine learning for a creative, new experience ",
        },
        {
            id: 2,
            title: "Beautiful Environments and Features",
            content:
                "We have already pre-made some environments for you to try in any listening situation and we provided unique AmiHear features that make sound even more clear ",
        },
        {
            id: 3,
            title: "5+ Years of Voice Processing Experience",
            content:
                "Multiple Phd’s working on this app",
        },
        {
            id: 4,
            title: "Fast Support",
            content:
                "We respond within 24 hours. Period.",
        },
    ];

    return (
        <Section id="why-choose-us">
            <div className="container relative z-2 my-10">
                <Heading
                    className="md:max-w-md lg:max-w-2xl text-center"
                    title="Why Choose "
                    accent="Us?"
                />
                <div id="accordion-flush">
                    {accordionData.map((item) => (
                        <div key={item.id}>
                            {/* Accordion Button */}
                            <h2>
                                <button
                                    type="button"
                                    className="flex md:items-center justify-between w-full py-5 font-medium text-n-1 border-b border-gray-200 dark:border-gray-700 h5 mb-3 gap-3"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={openAccordion === item.id}
                                    aria-controls={`accordion-body-${item.id}`}
                                >
                                    <span>{item.title}</span>
                                    <svg
                                        className={`w-4 h-4 transform transition-transform duration-300 ${openAccordion === item.id ? "rotate-180" : ""
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>

                            {/* Accordion Content */}
                            <div
                                id={`accordion-body-${item.id}`}
                                className={`overflow-hidden transition-all duration-300 ${openAccordion === item.id ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <div className="py-5 ">
                                    <p className="body-1 text-n-2">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ChooseUs;
