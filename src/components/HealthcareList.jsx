import React from "react";
import style from "../styles/product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/healthcareCartSlice";

const products = [
  {
    name: "Blood Pressure Monitor",
    price: 160,
    id: 1,
    img: "https://images.pexels.com/photos/5327865/pexels-photo-5327865.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Accu check",
    price: 400,
    id: 2,
    img: "https://images.pexels.com/photos/6941879/pexels-photo-6941879.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Urinary catheter",
    price: 150,
    id: 3,
    img: "https://media.istockphoto.com/id/1574245910/photo/foley-urinary-catheter-with-urine-bag-for-disability-or-patient-in-hospital.jpg?b=1&s=612x612&w=0&k=20&c=bryJafNMkkkWIHNm8giQSKlGZKGV8cgu5-a-H87UEmk=",
  },
];

const HealthcareList = () => {
  const sendAction = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.healthcareCart);
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

export default HealthcareList;
