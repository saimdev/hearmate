import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

import { ChevronDown, ChevronUp } from "lucide-react"

const ChooseUs = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const accordionData = [
        {
            id: 1,
            title: "Our Tremendous Team",
            content:
                "Our team comprises exceptionally skilled and committed engineers and developers, collectively holding numerous patents.",
        },
        {
            id: 2,
            title: "Voice and Video Specialists",
            content:
                "Our team has created a diverse range of complex voice and video applications and products, addressing both business solutions and smaller, recreational uses.",
        },
        {
            id: 3,
            title: "Predefined Customer Profiles",
            content:
                "We have developed several environments for you to experiment with in various listening scenarios, offering you a distinctive and straightforward configuration to enhance sound clarity.",
        },
        {
            id: 4,
            title: "Our Future Goals",
            content:
                "We are currently integrating speech recognition and machine learning technologies to further improve the effectiveness of HearMate.",
        },
        {
            id: 5,
            title: "We Value Your Input",
            content:
                "Whether you have a complaint, a new suggestion, or a note of appreciation, we encourage you to reach out to us, and we will certainly get back to you.",
        },
    ];

    return (
        <Section id="why-choose-us">
            <div className="container relative z-2 my-10">
                <Heading
                    className="md:max-w-md lg:max-w-2xl text-center"
                    title="Why Choose "
                    accent="HearMate?"
                />
                <div id="accordion-flush">
                    {accordionData.map((item) => (
                        <div key={item.id}>
                            {/* Accordion Button */}
                            <h2>
                                <button
                                    type="button"
                                    className="flex md:items-center justify-between w-full py-5 font-medium text-n-5 border-b border-gray-200 text-xl md:h5 mb-3 gap-3"
                                    onClick={() => toggleAccordion(item.id)}
                                    aria-expanded={openAccordion === item.id}
                                    aria-controls={`accordion-body-${item.id}`}
                                >
                                    <span>{item.title}</span>
                                    {openAccordion === item.id ? (
                                        <ChevronUp size={32} className="transition-transform duration-300" />
                                    ) : (
                                        <ChevronDown size={32} className="transition-transform duration-300" />
                                    )}
                                </button>
                            </h2>
                            {/* Accordion Content */}
                            <div
                                id={`accordion-body-${item.id}`}
                                className={`overflow-hidden transition-all duration-300 ${openAccordion === item.id ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <div className="py-5 ">
                                    <p className="body-1 text-n-8">{item.content}</p>
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
