import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0
};

const healthcareCartSlice = createSlice({
  name: 'healthcareCart',
  initialState,
  reducers: {
      addItem: (state, action) => {
        const product = action.payload; //action.payload is the item to be added
        const existingProduct = state.cart.find(item => item.id === product.id); //product object: name,price, id

        if (existingProduct){
          existingProduct.quantity = existingProduct.quantity + 1;
       
        } else {
          
          state.cart.push({...product, quantity: 1 });
          //...product represents the new object state of the product
          //cart[0] and product are the same
        }

        state.totalPrice += product.price; 
      },

      removeItem: (state, action) => {
        const id = action.payload;
        const itemToRemove = state.cart.find(item => item.id === id); //return the position or index of the object or product

        if (itemToRemove){
          if(itemToRemove.quantity > 1) {
            itemToRemove.quantity = itemToRemove.quantity - 1;
          }

          else{
             state.cart = state.cart.filter(item => item.id !== id );
            //state.cart.splice(index, 1) should not be used because it directly mutates the cart
          }

          state.totalPrice -= itemToRemove.price;

          
        }
      }
  }

});

//  export const { addItem, removeItem } = cartSlice.actions;


export const { addItem, removeItem } = healthcareCartSlice.actions;
export default healthcareCartSlice.reducer;