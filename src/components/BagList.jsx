import React from 'react'
import style from "../styles/product.module.css";
import { useDispatch} from "react-redux";
import { addItem } from "../store/totalCartSlice";
import Cart from './Cart';

const products = [
  {
    name: "Bag Pack",
    price: 120,
    id: 1,
    img: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Hand Bag",
    price: 450,
    id: 2,
    img: "https://images.pexels.com/photos/1228624/pexels-photo-1228624.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Suitcase",
    price: 200,
    id: 3,
    img: "https://images.pexels.com/photos/6538433/pexels-photo-6538433.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BagList = () => {
  const sendAction = useDispatch();
  
  return (
    <div className={style.bodyContainer}>
      <div className={style.container}>
        {products.map((product) => 
          <div key={product.id} className={style.productDiv}>
            <div className={style.imageDiv}><img src={product.img} alt="" /></div>
            <h2 className={style.productName}>{product.name}</h2>

            <p className={style.productPrice}> $ {product.price}</p>

            <button
              className={style.addButton}
              onClick={() => sendAction(addItem(product))}
            >
              Add to cart
            </button>
          </div>
        )}
      </div>

   <Cart/>
    </div>
  );
}

export default BagList