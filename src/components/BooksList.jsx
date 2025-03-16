import React from "react";
import style from "../styles/product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/bookCartSlice";

const products = [
  {
    name: "Coffee Guide",
    price: 100,
    id: 1,
    img: "https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Little Black Book",
    price: 500,
    id: 2,
    img: "https://images.pexels.com/photos/734968/pexels-photo-734968.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Your Soul is a River",
    price: 250,
    id: 3,
    img: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BooksList = () => {
  const sendAction = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.bookCart);

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

      <div className={style.cartDiv}>
        <div>
          <h3 className={style.cartHeading}>Shopping cart</h3>

          {cart.length === 0 ? (
            <p className={style.emptyP}>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div>
                  <div key={item.id} className={style.itemDiv}>
                    <img src={item.img} alt="" />
                    <p> {item.name} </p>
                    <p>
                      {" "}
                      $ {item.price} * {item.quantity} $
                      {item.price * item.quantity}
                    </p>
                  </div>
                  <button
                    className={style.removeButton}
                    onClick={() => sendAction(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          <p className={style.totalP}> Total: $ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default BooksList;
