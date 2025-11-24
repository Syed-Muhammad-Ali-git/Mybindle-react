//  Reason section component 5th
//  Donation-focused call-to-action encouraging users to make someone smile

import lastImgHalf from "../assets/images/iPhone 14 Pro.png";
import lastImgFull from "../assets/images/Stroke Body.png";

const ReasonSection = () => {
  return (
    <section id="donate" className="rounded-3xl" style={{ background: "linear-gradient(180deg, var(--color-primary) 0%, #ff6b63 50%, var(--color-primary) 100%)" }}>
      {/* Sub hero-style layout with text and phone imagery */}

      <section className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16 section-container">
        {/* Left side: emotional text and donate button */}

        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-(--color-on-primary) font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ marginBottom: "20px" }}
          >
            <h1>Be the Reason</h1>
            <h1>Some One Smiles Today!</h1>
          </div>

          <p className="text-(--color-on-primary) font-semibold text-lg leading-7 mt-6">
            Your generosity can change lives every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>
          <a href="#download"
            className="mt-5 px-6 rounded-full w-44 h-12 flex items-center justify-center text-lg btn-primary"
          >
            Donate Now
          </a>
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
