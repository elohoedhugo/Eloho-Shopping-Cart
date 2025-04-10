import React from "react";
import style from "../styles/product.module.css";
import { useDispatch} from "react-redux";
import { addItem} from "../store/totalCartSlice";
import Cart from "./Cart";

const products = [
  {
    name: "Laptop",
    price: 120,
    id: 10,
    img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Apple wristwatch",
    price: 450,
    id: 11,
    img: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Camera",
    price: 200,
    id: 12,
    img: "https://images.pexels.com/photos/1203819/pexels-photo-1203819.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const GadgetsList = () => {
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

export default GadgetsList;
