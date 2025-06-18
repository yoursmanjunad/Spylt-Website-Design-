import FlavorSlider from "../components/FlavourSlider";
import FlavourTitle from "../components/FlavorTitle";
const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="px-20 lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavourTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;