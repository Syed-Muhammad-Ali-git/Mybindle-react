// Testimonials section: shows feedback from different MyBindle users
import starsImg from "../assets/images/Frame 1171276819.png";
import avatar from "../assets/images/avatar3 1.png";

const WhatOurUserSays = () => {
  return (
    <section className="bg-[#F2F2F2] pt-20">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="pb-6">
          <h1 className="main-heading text-center">What Our Users Say</h1>
        </div>

        {/* Testimonial cards grid */}

        <div className="grid grid-cols-1 2xl:grid-cols-3 what-user-grid gap-6 w-full pb-12 justify-items-center">
          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pb-2 pr-0 sm:pr-20" />
            <h1 className="font-medium text-xl text-left">
              This platform changed the way I stay in touch with my friends and
              family. The interface is smooth, and I love how easy it is to
              share my moments!
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Emily R</span>
              <span>USA </span>
            </div>
          </div>

          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pb-2 pr-0 sm:pr-20" />
            <h1 className="font-medium text-xl text-left">
              Finally, a social network that understands what I need! The
              privacy features are a game-changer, and I feel safer sharing my
              life online
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Amit K</span>
              <span>India</span>
            </div>
          </div>

          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pr-20 pb-2" />
            <h1 className="font-medium text-xl text-left">
              I joined just to explore, but now I can't imagine my day without
              it. The real-time chat and engaging communities make every
              interaction special!
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Sophie M</span>
              <span>UK</span>
            </div>
          </div>

          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pr-20 pb-2" />
            <h1 className="font-medium text-xl text-left">
              Running my small business has never been easier! This platform
              helped me connect with customers, promote my products, and grow my
              brand
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Javier L</span>
              <span>Spain </span>
            </div>
          </div>

          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pr-20 pb-2" />
            <h1 className="font-medium text-xl text-left">
              The perfect blend of fun and functionality! Whether I want to go
              live, discover trending content, or just catch up with friends,
              everything is right here!
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Lucas T</span>
              <span>Brazil</span>
            </div>
          </div>

          <div className="card-user-says card ">
            <img src={starsImg} alt="stars" className="pr-20 pb-2" />
            <h1 className="font-medium text-xl text-left">
              I’ve tried many social platforms, but this one truly stands out!
              The experience feels personal, the connections feel real, and
              every feature just makes sense
            </h1>
            <div className="flex pt-4 justify-center items-center">
              <img src={avatar} alt="avatar" className="rounded-full" />
              <span className="text-lg font-semibold ml-0">Nora S</span>
              <span>Canada</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto">
          <button className="card-btn rounded-full font-semibold text-[#FF5349] text-2xl px-12 py-3 mb-20 bg-white shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatOurUserSays;
