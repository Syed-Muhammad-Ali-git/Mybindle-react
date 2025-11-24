//  Note: hero section component 1st

import logo from "../assets/images/Group 2.png";
import logoText from "../assets/images/Frame.png";
import mobileImage from "../assets/images/Group 1.png";
import mobileCard1 from "../assets/images/card (1).png";
import mobileCard2 from "../assets/images/card.png";

const HeroSection = () => {
  return (
    <section className="bg-[#FF5349] min-h-[640px]">
      {/* header section images */}

<header className="flex flex-wrap items-center justify-center gap-2 px-4 py-4 md:justify-between md:px-8 lg:px-32">
        <img src={logo} alt="mybindle logo" className="h-8 md:h-10 lg:h-12" />
        <img src={logoText} alt="my bindle" className="h-8 md:h-10 lg:h-12" />
      </header>

      {/* hero section */}

      <section
        className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16"
        style={{ marginTop: "50px" }}
      >
        {/* left side  */}

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
            className="text-[#FF5349] bg-[#F2F2F2] px-4 rounded-xl w-40 h-12 font-semibold text-lg"
            style={{ marginTop: "20px" }}
          >
            Get Started
          </button>
        </div>
        {/* right side */}

        <div className="w-full md:w-1/2 relative mt-8 md:mt-0 hidden md:block">
          {/* mobile image */}

          <div className="absolute left-4 md:left-8 lg:left-16 top-[-100px] md:top-[-150px] lg:top-[-200px] shadow">
            <img
              src={mobileImage}
              alt="mobile image"
              className="w-48 md:w-64 lg:w-80"
            />
          </div>

          {/* mobile image top card left */}
          <div className="absolute top-[-50px] md:top-[-80px] lg:top-[-100px] left-[-20px] md:left-[-30px] lg:left-[-40px]">
            <img
              src={mobileCard2}
              alt="seamless connections"
              className="w-24 md:w-32 lg:w-40"
            />
          </div>

          {/* mobile image bottom card right */}
          <div className="absolute md:bottom-[-260px] lg:bottom-[-310px] right-[-20px] md:right-[90px] lg:right-[180px]">
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
