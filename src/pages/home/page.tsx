//  Note: Home page screen
//  This page composes all main landing sections in vertical order

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
      {/* Hero / top banner */}
      <HeroSection />
      {/* Feature highlights */}
      <FeatureSection />
      {/* Call-to-action explaining clicks / connections */}
      <ClickSection />
      {/* Simple three-step install guide */}
      <InstallSection />
      {/* Donation / emotional CTA section */}
      <ReasonSection />
      {/* User testimonials */}
      <WhatOurUserSays />
      {/* Final download CTA footer */}
      <Footer />
    </>
  );
};

export default Home;
