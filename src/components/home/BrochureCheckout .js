import brochure from "../../../public/assets/images/mountain.jpeg";

const BrochureCheckout = () => {
  return (
    <div className="flex items-center justify-center py-28 p-6 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${brochure.src})` }}
      ></div>
      <div className="relative bg-transparent w-full flex items-center justify-center">
        <div className="flex flex-col items-center md:flex-row gap-4  p-0 md:p-4">
          <h2 className="text-dark_blue text-3xl md:text-5xl lg:text-7xl font-bold md:leading-tight">
            Check Out Our <span className="text-light_blue">Brochure</span>
          </h2>
          <form className="w-full flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white focus:border-light_blue"
              />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white focus:border-light_blue"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 p-3 rounded-lg border border-dark_blue bg-dark_blue text-white font-semibold uppercase hover:bg-white hover:text-dark_blue hover:border-dark_blue"
            >
              Get Brochure
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrochureCheckout;
