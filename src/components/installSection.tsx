//  install section component 4th
//  Simple three-step guide explaining how to install the app

const InstallSection = () => {
  return (
    <section className="bg-[#F2F2F2] pt-20">
      {/* Headings */}
      <div className="text-center w-[90%] max-w-3xl mx-auto">
        <h1 className="main-heading pb-7">How to Install Our App</h1>
        <h2 className="pb-12 font-semibold">
          Getting started is quick and easy! Follow these simple steps to
          install and start using MyBindle today.
        </h2>
      </div>

      <div>
        {/* Step cards */}

        <div className="flex flex-wrap justify-center items-center gap-6 w-full max-w-5xl mx-auto pb-12">
          <div className="card-style card">
            <h1 className="card-h1">
              <span className="text-[#FF5349]">Step 1.</span> <br /> Download
            </h1>
            <p className="card-p">Open Play Store or App Store</p>
          </div>

          <div className="card-style card w-70">
            <h1 className="card-h1">
              Step 2.
              <br />
              Install App
            </h1>
            <p className="card-p">The app will install automatically.</p>
          </div>

          <div className="card-style card w-70">
            <h1 className="card-h1">
              Step 3. <br />
              Ready to Use
            </h1>
            <p className="card-p">Sign up or log in to start exploring!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
