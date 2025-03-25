import React from "react";
import { useSelector } from "react-redux";

const Cartpage = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  return (
    <div>
      <h1>length = {cart.length}</h1>
      <div className="flex flex-wrap justify-center">
        {cart.map((card) => (
          <div
            key={card._id}
            className="shadow-lg p-8 bg-white m-4 w-80 flex-shrink-0"
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
