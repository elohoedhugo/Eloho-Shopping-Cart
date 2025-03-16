import React from "react";
import style from "../styles/allproduct.module.css"
import { NavLink } from "react-router-dom";

const AllProducts = () => {
  return (
    <div className={style.container}>
      
      <div className={style.productcontainer}>
        <NavLink to='healthcare'>
        <div className= {style.productOne}>
          <h2>Health Care</h2>
        </div>
        </NavLink>
        <NavLink to='footwears'>
        <div className= {style.productTwo}>
          <h2>Footwears</h2>
        </div>
        </NavLink>
        <NavLink to='bags'>
        <div className= {style.productThree}>
          <h2>Bags</h2>
        </div>
        </NavLink>
        <NavLink to='gadgets'>
        <div className= {style.productFour}>
          <h2>Gadgets</h2>
        </div>
        </NavLink>
        <NavLink to='books'>
        <div className= {style.productFive}>
          <h2>Books</h2>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AllProducts;

// function AllProducts() {
//   return (
//     <div className={style.container}>
//       <h1>Shop the dropvhcgvjhbjhb</h1>

//     </div>
//   )
// }

// export default AllProducts
