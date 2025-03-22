//creates a redux store using configureStorefrom Redux Toolkit
import {configureStore} from "@reduxjs/toolkit";
import totalCartReducer from  "./totalCartSlice"


//configureStore is a function from redux toolkit  that simplifies store creation
//cartReducer is what manages [adding and removing] the cart's state (items, total price) 
//store is the central place where all app states are stored and managed
export const store = configureStore({
    reducer: {
        totalCart: totalCartReducer, //adding cartReducer to the store
    }
});

//The reducer key contains all slices (for now, just cart).
//Exports store so the whole app can access the state.