import { advantagesData } from "../constants/index"; // Import Data
import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/Services";

const Advantages = () => {
    return (
        <Section id="benefits">
            <div className="container">
                <Heading
                    title="Discover the Benefits of "
                    accent="HearMate"
                    text="HearMate offers cutting-edge technology to enhance your hearing experience."
                />
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantagesData.map((advantage) => (
                        <div
                            key={advantage.id}
                            className="relative flex flex-col items-center p-8 border border-n-1/10 rounded-3xl overflow-hidden text-center shadow-lg"
                        >
                            {/* <img
                                className="w-20 h-20 object-cover mb-4 rounded-full"
                                src={advantage.image}
                                alt={advantage.title}
                                width={80}
                                height={80}
                            /> */}
                            <advantage.icon size={56} className="m-3" />
                            <h3 className="h5 mb-3">{advantage.title}</h3>
                            <p className="body-2 text-n-3">{advantage.description}</p>
                        </div>
                    ))}
                </div>

                <Gradient />
            </div>
        </Section>
    );
};

export default Advantages;
