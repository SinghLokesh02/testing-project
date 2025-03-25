import React, { useEffect,useState} from 'react'
import axios from 'axios'
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Body = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchCardData();
    },[])

    const handleAddcart = async (card) => {
        console.log(card);
        
        dispatch(addToCart(card));
        alert("Item added to cart!");
    }


    const [cards, setCards] = useState([]);

    const fetchCardData = async () => {
        try {
            const response = await axios.get("https://testing-project-9g3u.onrender.com/card/getcards");
            setCards(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  return (
    <div className='flex flex-wrap justify-center'>
      {
      cards.map((card) => (
        <div key={card._id} className='shadow-lg p-8 bg-white m-4 w-80 flex-shrink-0'>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <button className='bg-red-500 shadow p-3 rounded text-white m-3 mb-0' onClick={()=>{handleAddcart(card)}}>Add to Cart</button>
        </div>
      ))
    }

    </div>
  )
}

export default Body
