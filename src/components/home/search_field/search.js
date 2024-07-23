import React, { useState, useRef } from "react";

const SearchBar = ({ onSearch, onClose }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onSearch(query);
  };

  const [isClosing, setIsClosing] = useState(false);

  const contentRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 1000); // Match the duration of the closing animation
  };

  return (
    <div
      className={`search-modal w-full inset-0 flex flex-col justify-start items-start z-50 fixed bg-black bg-opacity-20 ${
        isClosing ? "closing" : ""
      }`}
    >
      <div
        ref={contentRef}
        className="bg-blue bg-opacity-40 rounded-md w-full h-[500px] p-2 flex flex-col justify-center items-center md:w-[700px] md:mx-auto relative"
      >
        <section className="py-4 p-2 flex flex-col justify-center items-center w-full h-auto">
          <form
            onSubmit={handleSearch}
            className="flex justify-center items-center mx-auto"
          >
            <input
              type="search"
              placeholder="enter search keyword"
              className="focus:outline-none bg-white text-gray font-semibold text-sm px-2 border-t-r-rounded-[23%] border-b-l-rounded-[25%] w-[345px] h-[60px] flex justify-center items-center"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Search
            </button>
          </form>
        </section>
      </div>
      <button
        onClick={handleClose}
        className="close-button flex mx-auto text-gray hover:text-red text-6xl justify-center items-center"
      >
        &times;{" "}
        <span
          style={{
            fontSize: "33px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          close
        </span>
      </button>
    </div>
  );
};
export default SearchBar;
