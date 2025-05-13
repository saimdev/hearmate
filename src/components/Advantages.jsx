import { advantagesData } from "../constants/index"; // Import Data
import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/Services";
import PixelCard from "./design/PixelCard";

const Advantages = () => {
    return (
        <Section id="advantages">
            <div className="container">
                <Heading
                    title="Advantages of "
                    accent="HearMate"
                    text="HearMate combines commonly available devices with a touch of ingenuity to offer a distinctly personalized experience for its users."
                />
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantagesData.map((advantage) => (
                        <PixelCard variant="blue" key={advantage.id} className="w-full transition-all duration-200 ease-in-out hover:shadow-2xl">

                            <div
                                className="absolute flex flex-col items-center p-8 rounded-3xl overflow-hidden text-center space-y-4"
                            >
                                {/* <img
                                className="w-20 h-20 object-cover mb-4 rounded-full"
                                src={advantage.image}
                                alt={advantage.title}
                                width={80}
                                height={80}
                            /> */}
                                <advantage.icon size={56} className="m-5" />
                                <h3 className="h5">{advantage.title}</h3>
                                <p className="body-2 text-n-5">{advantage.description}</p>
                            </div>
                        </PixelCard>
                    ))}
                </div>

                <Gradient />
            </div>
        </Section>
    );
};

export default Advantages;
