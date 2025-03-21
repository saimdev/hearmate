import ButtonGradient from "./assets/svg/ButtonGradient";
import Advantages from "./components/Advantages";
import AndriodMockUp from "./components/AndroidMockUp";
import Benefits from "./components/Benefits";
import ChooseUs from "./components/ChooseUs";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AndriodMockUp />
        <Benefits />
        <Collaboration />
        <Services />
        <Advantages />
        <ChooseUs />
        <Pricing />
        {/* <Roadmap /> */}
        <Testimonials />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
