import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "./Nav";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.navContainer}>
        <Nav title='Shop' className={style.nav}>
          <li>
            <Link to='#'>Products</Link>
          </li>
          <li>
            <Link to='#'>Pricing</Link>
          </li>
          <li>
            <Link to='#'>Delivery</Link>
          </li>
          <li>
            <Link to='#'>Customer prtection</Link>
          </li>
        </Nav>
        <Nav title='Sevrices' className={style.nav}>
          <li>
            <Link to='#'>Installation</Link>
          </li>
          <li>
            <Link to='#'>Development</Link>
          </li>
          <li>
            <Link to='#'>Design</Link>
          </li>
          <li>
            <Link to='#'>Maintainance</Link>
          </li>
          <li>
            <Link to='#'>Security</Link>
          </li>
        </Nav>
        <Nav title='Resources' className={style.nav}>
          <li>
            <Link to='#'>Customer testimonials</Link>
          </li>
          <li>
            <Link to='#'>Blog</Link>
          </li>
        </Nav>
        <Nav title='Resources' className={style.nav}>
          <li>
            <Link to='#'>Customer testimonials</Link>
          </li>
          <li>
            <Link to='#'>Blog</Link>
          </li>
        </Nav>
      </div>
    </footer>
  );
}

export default Footer;
