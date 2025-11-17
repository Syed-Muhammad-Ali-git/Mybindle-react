//  Click section component 3rd

import clickSectionImage from "../assets/images/Group 3.png";

const ClickSection = () => {
  return (
    <section className="bg-[#F2F2F2] pt-20">
      <div className="flex justify-center items-center flex-col lg:flex-row flex-wrap w-[90%]">
        {/* mobil image left */}

        <div className="md:w-[50%] pb-7">
          <img
            src={clickSectionImage}
            alt="mobile images"
            className="w-70 sm:w-110"
          />
        </div>

        {/* right side text */}

        <div className="md:w-[50%]">
          {/* headings */}

          <h1 className="main-heading pb-8">
            Where Every Click Sparks a Connection!
          </h1>
          <p className="pb-7">
            A small act of kindness today can create a lifetime of impact for
            someone in need. Give from the heart and change a life!
          </p>

          {/* cards */}
          <div className="grid grid-row-1 gap-6 w-[80%] pb-5">
            <div className="card-style card">
              <h1 className="card-h1">🔥 Seamless Connections</h1>
              <p className="card-p">
                Stay in touch with friends, family, and like-minded people with
                just a tap.
              </p>
            </div>

            <div className="card-style card">
              <h1 className="card-h1">📸 Share Your Story</h1>
              <p className="card-p">
                Upload photos, videos, and updates to let the world know what’s
                happening in your life.
              </p>
            </div>

            <div className="card-style card">
              <h1 className="card-h1">💬 Real-Time Chat</h1>
              <p className="card-p">
                Whether it's a DM or a group conversation, connect instantly
                with smooth, lightning-fast messaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickSection;
