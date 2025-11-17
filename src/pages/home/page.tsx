//  Note: Home page screen

import FeatureSection from "../../components/featureSection";
import HeroSection from "../../components/heroSection";
import ClickSection from "../../components/clickSection.tsx";
import InstallSection from "../../components/installSection.tsx";
import ReasonSection from "../../components/reasonSection.tsx";
import WhatOurUserSays from "../../components/whatOurUserSays.tsx";
import Footer from "../../components/footer.tsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <ClickSection />
      <InstallSection />
      <ReasonSection />
      <WhatOurUserSays />
      <Footer />
    </>
  );
};

export default Home;
