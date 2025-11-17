//  Note: Home page screen

import FeatureSection from "../../components/featureSection";
import HeroSection from "../../components/heroSection";
import ClickSection from "../../components/clickSection.tsx";
import InstallSection from "../../components/installSection.tsx";
import ReasonSection from "../../components/ReasonSection.tsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ClickSection />
      <InstallSection />
      <ReasonSection />
    </>
  );
};

export default Home;
