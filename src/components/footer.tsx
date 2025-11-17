// footer component 7th

import btnIcons from "../assets/images/apple-playstore.png";
import footerImg1 from "../assets/images/Stroke Body (1).png";
import footerImg2 from "../assets/images/Stroke Body.png";

const footer = () => {
  return (
    <section className="bg-[#FF5349]  rounded-3xl pt-20 mt-2">
      {/* sub hero section */}

      <section className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16">
        {/* left side  */}

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-[#FAFAFA] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ marginBottom: "20px" }}
          >
            <h1>Join the Fun - Download</h1>
            <h1>MyBindle Now!</h1>
          </div>

          <p className="text-[#FAFAFA] font-semibold text-lg leading-7 mt-6">
            Your Social Network, Your Way Download MyBindle Now and Be a Part of
            a Community That’s Always Evolving!
          </p>
          <button style={{ marginTop: "50px" }}>
            <img src={btnIcons} alt="apple and playstore btns" width={300} />
          </button>
        </div>

        {/* right side */}
        <div className="flex gap-2 pt-8 sm:pt-0" style={{ marginBottom: "0" }}>
          <img
            src={footerImg1}
            alt="payment phone image"
            className="w-40 sm:w-[220px] lg:w-[250px]"
            style={{ marginBottom: "0" }}
          />

          <img
            src={footerImg2}
            alt="thank you phone image"
            className="w-[165px] sm:w-[220px] lg:w-[250px]"
          />
        </div>
      </section>
    </section>
  );
};

export default footer;
