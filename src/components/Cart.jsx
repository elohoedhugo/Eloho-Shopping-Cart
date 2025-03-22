import React from 'react'
import style from "../styles/product.module.css"
import { useSelector } from 'react-redux'
import { removeItem } from '../store/totalCartSlice'

const Cart = () => {

  const { cart, totalPrice }= useSelector((state) => state.totalCart)

  return (
    <div className={style.cartDiv}>
    <div>
        <h3 className={style.cartHeading}>Shopping cart</h3>
   
        {cart.length === 0 ? (
         <p className={style.emptyP}>Your cart is empty</p>
        )
       :(
         <div>
           {cart.map((item) => (
             <div>
             <div key={item.id} className={style.itemDiv}>
               <img src={item.img} alt="" />
              <p> {item.name} </p>
              <p> $ {item.price} * {item.quantity} ${item.price*item.quantity}</p> 
             
             </div>
             <button className={style.removeButton} onClick={() => sendAction(removeItem(item.id))}>Remove</button>
             </div>
           ))}
   
           
         </div>
       )}
        <p className={style.totalP}> Total: $ {totalPrice}</p>
       </div>
 </div>
  )
}

export default Cart