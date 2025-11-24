//  Note: hero section component 1st
//  Top banner of the landing page with logo, main message and hero illustration

import logo from "../assets/images/Group 2.png";
import logoText from "../assets/images/Frame.png";
import mobileImage from "../assets/images/Group 1.png";
import mobileCard1 from "../assets/images/card (1).png";
import mobileCard2 from "../assets/images/card.png";

const HeroSection = () => {
  return (
    <section className="bg-[#FF5349] min-h-[640px] pb-16">
      {/* Header section images: logo + brand text */}

      <header className="flex flex-wrap items-center justify-center gap-2 px-4 py-4 md:justify-between md:px-8 lg:px-32">
        <img src={logo} alt="mybindle logo" className="h-8 md:h-10 lg:h-12" />
        <img src={logoText} alt="my bindle" className="h-8 md:h-10 lg:h-12" />
      </header>

      {/* Hero section: left text content + right phone illustration */}

      <section
        className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16"
        style={{ marginTop: "50px" }}
      >
        {/* Left side: main tagline and description */}

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-[#FAFAFA] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ marginBottom: "20px" }}
          >
            <h1>Stay Connected</h1>
            <h1>Stay Social</h1>
            <h1>Stay You!</h1>
          </div>

          <p className="text-[#FAFAFA] font-semibold text-lg leading-7 mt-6">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect
            with old friends, build new relationships, or share what matters
            most to you – MyBindle is your home on the internet.
          </p>
          <button
            className="mt-5 text-[#FF5349] bg-[#F2F2F2] px-6 rounded-full w-44 h-12 font-semibold text-lg shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
        {/* Right side: stacked phone and card illustrations */}

        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 hidden md:block">
          {/* Main mobile image */}

          <div className="absolute left-4 md:left-8 lg:left-16 top-[-100px] md:top-[-150px] lg:top-[-200px] shadow">
            <img
              src={mobileImage}
              alt="mobile image"
              className="w-48 md:w-64 lg:w-80"
            />
          </div>

          {/* Top-left floating card over the phone */}
          <div className="absolute -top-12 md:-top-20 lg:-top-24 -left-5 md:-left-7 lg:-left-10">
            <img
              src={mobileCard2}
              alt="seamless connections"
              className="w-24 md:w-32 lg:w-40"
            />
          </div>

          {/* Bottom-right floating card over the phone */}
          <div className="absolute md:bottom-[-260px] lg:bottom-[-310px] -right-5 md:right-[90px] lg:right-[180px]">
            <img
              src={mobileCard1}
              alt="discover & explore"
              className="w-24 md:w-32 lg:w-40"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
