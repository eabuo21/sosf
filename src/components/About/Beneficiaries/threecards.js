// Example usage in a page component (pages/index.js in Next.js)

import BenCards from "../../shared/cards/beneficiariescards";

const cards = [
  {
    colors: "#0284c7",
    title: "Work With Us",
    content:
      "Want to join a global, talented, and passionate organization working to impact millions of lives?",
    image:
      "https://149873696.v2.pressablecdn.com/wp-content/uploads/2023/01/images-for-mobile-slider-5.jpg",
    link: "/careers",
  },
  {
    colors: "grey",
    title: "Connect Us",
    content:
      "We partner with others to scale change. Please contact us at one of our nine offices around the world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAddtDQtYxJKVZ__kb-3XuAhN2VKsUrPtxcg&usqp=CAU",
    link: "/contact",
  },

  {
    colors: "black",
    title: "Connect Us",
    content:
      "We partner with others to scale change. Please contact us at one of our nine offices around the world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAddtDQtYxJKVZ__kb-3XuAhN2VKsUrPtxcg&usqp=CAU",
    link: "/contact",
  },
];

const ThreeCards = () => {
  return (
    <div>
      <BenCards cards={cards} />
    </div>
  );
};

export default ThreeCards;
