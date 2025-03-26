import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, clearItem, clearItemById} from "../redux/cartSlice";
import { toast } from 'react-toastify';

const Cartpage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCart());
  },[dispatch, cart.length])

   function handleIndividual(id,name){
    dispatch(clearItemById(id))
    toast.warning(`${name} has been removed from cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  return (
    <>
      <h1>length = {cart.length}</h1>
      <div className="flex flex-wrap justify-center">
        {cart.map((card) => (
          <div
            key={card._id}
            className="shadow-lg p-8 bg-white m-4 w-80 flex-shrink-0"
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button className="bg-gray-600 text-red-500 p-2 m-3 mb-0 rounded-2xl" onClick={()=>{handleIndividual(card._id,card.title)}}>delete Me</button>
          </div>
        ))}
      </div>

      <button className="bg-red-500 p-3 m-2 rounded text-whilte text-xl" onClick={()=>{
        dispatch(clearItem());
        toast.error('Cart has been cleared', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }}
      >
        Clear cart
      </button>
    </>
  );
};

export default Cartpage;
