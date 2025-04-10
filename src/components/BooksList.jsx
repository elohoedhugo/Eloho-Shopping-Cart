import React from "react";
import style from "../styles/product.module.css";
import { useDispatch} from "react-redux";
import { addItem} from "../store/totalCartSlice";
import Cart from "./Cart";

const products = [
  {
    name: "Coffee Guide",
    price: 100,
    id: 4,
    img: "https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Little Black Book",
    price: 500,
    id: 5,
    img: "https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Your Soul is a River",
    price: 250,
    id: 6,
    img: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BooksList = () => {
  const sendAction = useDispatch();
  

  return (
    <div className={style.bodyContainer}>
      <div className={style.container}>
        {products.map((product) => (
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
        ))}
      </div>

      <Cart/>
    </div>
  );
};

export default BooksList;
