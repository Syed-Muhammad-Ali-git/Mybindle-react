//  Feature section component 2nd
//  Highlights the core features users get on MyBindle

const FeatureSection = () => {
  return (
    <section className="bg-[#F2F2F2] pt-35">
      {/* Outer wrapper for the features section */}

      <section className="w-[90%] max-w-6xl mx-auto">
        {/* Headings */}

        <div className="flex justify-center items-center flex-col gap-3 pb-18 w-full mx-auto">
          <h1 className="main-heading">Features That Keep You Hooked!</h1>
          <h1 className="font-semibold text-2xl">
            Meet, Chat, Share - Anytime, Anywhere!
          </h1>
        </div>

        {/* Feature cards grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-12 mx-auto">
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
              Whether it's a DM or a group conversation, connect instantly with
              smooth, lightning-fast messaging.
            </p>
          </div>

          <div className="card-style card">
            <h1 className="card-h1">🔒 Privacy First</h1>
            <p className="card-p">
              Your data, your control. We prioritize your privacy with
              world-class security.
            </p>
          </div>

          <div className="card-style card">
            <h1 className="card-h1">🌎 Discover & Explore</h1>
            <p className="card-p">
              Find trending content, join communities, and follow pages that
              match your interests.
            </p>
          </div>

          <div className="card-style card">
            <h1 className="card-h1">💼 Grow Your Business</h1>
            <p className="card-p">
              Use our platform to market your brand, connect with customers, and
              build meaningful relationships.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureSection;
