import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import style from "./Navbar.module.scss";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link to='/'>
            <span>
              <img src='/icon.png' alt='' />
              <h1>ASIS</h1>
            </span>
          </Link>
        </div>
        <nav className={`${style.navbar} ${clicked && style.visible}`}>
          <a href='/#shop'>Shop</a>
          <Link to='/partners'>Partners</Link>
          <Link to='/account'>Services</Link>
          <Link to='/admin'>About</Link>
          <Link to='/'>Resources</Link>
          <button className={`${style.btn} outline`}>
            <Link>Log IN</Link>
          </button>
          <button className={style.btn}>
            <Link to='/login'>Contact Us</Link>
          </button>
        </nav>
        <span
          className={`${style.hamburger} ${clicked && style.clicked} `}
          onClick={handleClick}
        >
          {clicked ? <GrClose /> : <HiOutlineMenuAlt3 />}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
