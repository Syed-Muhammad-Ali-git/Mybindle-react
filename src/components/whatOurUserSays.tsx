// what lur user says component 6th

import starsImg from "../assets/images/Frame 1171276819.png";
import avatar from "../assets/images/avatar3 1.png";

const whatOurUserSays = () => {
  return (
    <section className="bg-[#F2F2F2] pt-20">
      {/* heading */}
      <div className="pb-15">
        <h1 className="main-heading text-center">What Our Users Say</h1>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] pb-12">
        <div className="card-user-says card ">
          <img src={starsImg} alt="stars" className="pr-20 pb-2" />
          <h1 className="font-medium text-xl text-left">
            This platform changed the way I stay in touch with my friends and
            family. The interface is smooth, and I love how easy it is to share
            my moments!
          </h1>
          <div className="flex pt-4 justify-center items-center">
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <span
              className="text-lg font-semibold"
              style={{ marginLeft: "0px" }}
            >
              Emily R
            </span>
            <br />
            <span>USA </span>
          </div>
        </div>

        <div className="card-user-says card ">
          <img src={starsImg} alt="stars" className="pr-20 pb-2" />
          <h1 className="font-medium text-xl text-left">
            Finally, a social network that understands what I need! The privacy
            features are a game-changer, and I feel safer sharing my life online
          </h1>
          <div className="flex pt-4 justify-center items-center">
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <span
              className="text-lg font-semibold"
              style={{ marginLeft: "0px" }}
            >
              Amit K
            </span>
            <br />
            <span>India</span>
          </div>
        </div>

        <div className="card-user-says card ">
          <img src={starsImg} alt="stars" className="pr-20 pb-2" />
          <h1 className="font-medium text-xl text-left">
            I joined just to explore, but now I can't imagine my day without it.
            The real-time chat and engaging communities make every interaction
            special!
          </h1>
          <div className="flex pt-4 justify-center items-center">
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <span
              className="text-lg font-semibold"
              style={{ marginLeft: "0px" }}
            >
              Sophie M
            </span>
            <br />
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
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <span
              className="text-lg font-semibold"
              style={{ marginLeft: "0px" }}
            >
              Javier L
            </span>
            <br />
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
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <span
              className="text-lg font-semibold"
              style={{ marginLeft: "0px" }}
            >
              Lucas T
            </span>
            <br />
            <span>Brazil</span>
          </div>
        </div>

        <div className="card-user-says card ">
          <img src={starsImg} alt="stars" className="pr-20 pb-2" />
          <h1 className="font-medium text-xl text-left">
            I’ve tried many social platforms, but this one truly stands out! The
            experience feels personal, the connections feel real, and every
            feature just makes sense
          </h1>
          <div className="flex pt-4 justify-center items-center">
            <img
              src={avatar}
              alt="avatar"
              style={{ marginLeft: "0px", borderRadius: "50%" }}
            />
            <p className="text-lg font-semibold" style={{ marginLeft: "0px" }}>
              Nora S
            </p>
            <p>Canada</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
        <button
          className="card-user-says w-50 h-15 rounded font-semibold text-[#FF5349] text-2xl"
          style={{ marginBottom: "80px" }}
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default whatOurUserSays;
