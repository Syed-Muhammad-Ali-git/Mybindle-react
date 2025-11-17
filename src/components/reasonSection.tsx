//  Reason section component 5th

import lastImgHalf from "../assets/images/iPhone 14 Pro.png";
import lastImgFull from "../assets/images/Stroke Body.png";

const ReasonSection = () => {
  return (
    <section className="bg-[#FF5349] min-h-[640px] rounded-3xl">
      {/* sub hero section */}

      <section className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 lg:px-16">
        {/* left side  */}

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
            className="text-[#FF5349] bg-[#F2F2F2] px-4 rounded-xl w-40 h-12 font-semibold text-lg"
            style={{ marginTop: "20px" }}
          >
            Donate Now
          </button>
        </div>

        {/* right side */}
        <div className="flex ">
          <img
            src={lastImgHalf}
            alt="payment phone image"
            style={{ width: "300px" }}
          />
          <div>
            <img
              src={lastImgFull}
              alt="thank you phone image"
              style={{ width: "300px" }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ReasonSection;
