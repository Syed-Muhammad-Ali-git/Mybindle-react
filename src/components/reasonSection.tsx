//  Reason section component 5th
//  Donation-focused call-to-action encouraging users to make someone smile

import lastImgHalf from "../assets/images/iPhone 14 Pro.png";
import lastImgFull from "../assets/images/Stroke Body.png";

const ReasonSection = () => {
  return (
    <section className="bg-[#FF5349]  rounded-3xl">
      {/* Sub hero-style layout with text and phone imagery */}

      <section className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16">
        {/* Left side: emotional text and donate button */}

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-[#FAFAFA] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ marginBottom: "20px" }}
          >
            <h1>Be the Reason</h1>
            <h1>Some One Smiles Today!</h1>
          </div>

          <p className="text-[#FAFAFA] font-semibold text-lg leading-7 mt-6">
            Your generosity can change lives every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>
          <button
            className="mt-5 text-[#FF5349] bg-[#F2F2F2] px-6 rounded-full w-44 h-12 font-semibold text-lg shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            Donate Now
          </button>
        </div>

        {/* Right side: phone images showing donation UI */}
        <div className="flex flex-wrap gap-5">
          <img
            src={lastImgHalf}
            alt="payment phone image"
            className="w-40 sm:w-[220px] lg:w-[250px]"
            style={{ marginBottom: "0" }}
          />

          <img
            src={lastImgFull}
            alt="thank you phone image"
            className="w-[165px] sm:w-[220px] lg:w-[250px]"
          />
        </div>
      </section>
    </section>
  );
};

export default ReasonSection;
