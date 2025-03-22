import React from "react";
import style from "../styles/product.module.css";
import { useDispatch} from "react-redux";
import { addItem} from "../store/totalCartSlice";
import Cart from "./Cart";

const products = [
  {
    name: "Men Leather Shoes",
    price: 100,
    id: 7,
    img: "https://images.pexels.com/photos/175689/pexels-photo-175689.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Women Stilettos",
    price: 500,
    id: 8,
    img: "https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Unisex Sneakers",
    price: 250,
    id: 9,
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const FootwearList = () => {
  const sendAction = useDispatch();
  
  return (
    <div className={style.bodyContainer}>
      <div className={style.container}>
        {products.map((product) => (
          <div key={product.id} className={style.productDiv}>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>

            <p> $ {product.price}</p>

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

export default FootwearList;
