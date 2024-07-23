import Head from "next/head";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Education, Entrepreneurship & Employability"
        />
      </Head>
      <main>
        <section className="mx-auto max-w-7xl px-6 md:px-20 mb-16">
          <h2 className="text-3xl text-gray-900 text-center font-bolder capitalize mb-3">
            Our Pillars
            {/* <span className="text-red-500">to Change</span> */}
          </h2>
          <p className="text-gray-400 text-center mb-3">
            Overall, the website should create a compelling narrative around
            Unity For Changes mission, showcasing the impact they have in various
            areas and encouraging visitors to donate and join their cause for
            creating positive change in the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-3">
            <div>
              <span className="bg-violet-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <p className="text-gray-900 font-medium">Environment</p>
              <small className="text-gray-400">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </small>
            </div>
            <div>
              <span className="bg-red-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <p className="text-gray-900 font-medium">Education</p>
              <small className="text-gray-400">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </small>
            </div>
            <div>
              <span className="bg-green-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <p className="text-gray-900 font-medium">Health and Wellness</p>
              <small className="text-gray-400">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </small>
            </div>
            <div>
              <span className="bg-sky-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </span>
              <p className="text-gray-900 font-medium">Entrepreneurship</p>
              <small className="text-gray-400">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </small>
            </div>
          </div>
        </section>
        {/* former home hero */}

        <section className="pb-16 ">
          {/* <ParalaxBg /> */}
          <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 ">
            {/* Image section for small screens */}
            <div className="md:hidden flex justify-center mb-8">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-blue"></div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg"
                  alt=""
                  className="relative rounded-full w-full h-full object-cover"
                  width={100}
                  height={100}
                />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                  <div className="w-[16rem] h-[16rem] rounded-full border-2 border-blue transform rotate-6"></div>
                  <div className="w-72 h-72 rounded-full border-2 border-blue transform -rotate-6 absolute"></div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4">
              <h1 className="text-black text-xl lg:text-2xl leading-8 lg:leading-10 font-bold">
                Empowering individuals and uplifting communities for a better
                future.
              </h1>
              <p className="text-black text-sm">
                The Skills Outside School Foundation: Pioneering Education,
                Employability, and Entrepreneurship Across Africa
              </p>
              <p className="text-black text-sm">
                We achieve this through our unique and innovative strategic
                model, which focuses on three core pillars: Education,
                Entrepreneurship, and Employability. By leveraging data-driven
                insights, implementing impactful interventions, and championing
                advocacy efforts, we are committed to creating sustainable
                change and empowering individuals across Africa and beyond.
              </p>
              <div className="space-x-4">
                <button className="bg-blue text-white px-4 py-2 rounded">
                  All Causes
                </button>
                <button className="border border-blue text-blue px-4 py-2 rounded">
                  Donate Now
                </button>
              </div>
            </div>

            <div className="hidden md:flex md:w-1/2 justify-center mt-8 md:mt-0">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-blue"></div>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg"
                  alt=""
                  className="relative rounded-full w-full h-full object-cover"
                  width={100}
                  height={100}
                />
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                  <div className="w-[16rem] h-[16rem] rounded-full border-2 border-blue transform rotate-6"></div>
                  <div className="w-72 h-72 rounded-full border-2 border-blue transform -rotate-6 absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
