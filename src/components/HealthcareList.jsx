import React from "react";
import style from "../styles/product.module.css";
import { useDispatch} from "react-redux";
import { addItem} from "../store/totalCartSlice";
import Cart from "./Cart";

const products = [
  {
    name: "Blood Pressure Monitor",
    price: 160,
    id: 13,
    img: "https://images.pexels.com/photos/5327865/pexels-photo-5327865.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Accu check",
    price: 400,
    id: 14,
    img: "https://images.pexels.com/photos/6941879/pexels-photo-6941879.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Urinary catheter",
    price: 150,
    id: 15,
    img: "https://media.istockphoto.com/id/1574245910/photo/foley-urinary-catheter-with-urine-bag-for-disability-or-patient-in-hospital.jpg?b=1&s=612x612&w=0&k=20&c=bryJafNMkkkWIHNm8giQSKlGZKGV8cgu5-a-H87UEmk=",
  },
];

const HealthcareList = () => {
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

export default HealthcareList;
