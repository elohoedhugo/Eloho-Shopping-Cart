import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "../styles/allproduct.module.css";
import { CgMenuGridO } from "react-icons/cg";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
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

          <div className={style.menuButtonDiv}>
              <button className={style.menu} onClick={toggleMenu}>
                <CgMenuGridO
                  className={style.menuIcon}
                  style={{ color: "white", height: 30, width: 30 }}
                />
              </button>

              {isOpen && (
                <div className={style.menuContainer}>
                  <ul>

                    <li><NavLink to="/"className={style.menuLink}>All Categories
                    </NavLink></li>

                    <li><NavLink to="bags">Bags
                    </NavLink></li>

                    <li><NavLink to="books">Books
                    </NavLink></li>

                    <li><NavLink to="footwears">Footwears
                    </NavLink></li>

                    <li><NavLink to="gadgets">Gadgets
                    </NavLink></li>

                    <li><NavLink to="healthcare">HealthCare</NavLink></li>

                  </ul>
                </div>
              )}
            </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
