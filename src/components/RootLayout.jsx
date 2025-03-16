import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Shop the drop</h1>
          <section>
            <NavLink to="/">All Categories</NavLink>
            <NavLink to="bags">Bags</NavLink>
            <NavLink to="books">Books</NavLink>
            <NavLink to="footwears">Footwears</NavLink>
            <NavLink to="gadgets">Gadgets</NavLink>
            <NavLink to="healthcare">Health Care</NavLink>
          </section>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
