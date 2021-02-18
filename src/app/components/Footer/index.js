import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrPinterest,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import Nav from "./Nav";
import style from "./Footer.module.scss";

function Footer() {
  const now = new Date();
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
        <Nav title='Help' className={style.nav}>
          <li>
            <Link to='#'>Guides</Link>
          </li>
          <li>
            <Link to='#'>FAQ</Link>
          </li>
          <li>
            <Link to='#'>Terms</Link>
          </li>
        </Nav>
        <div className={style.logo}>
          <Link to='/'>
            <span>
              <img src='/icon.png' alt='' />
              <h1>ASIS</h1>
            </span>
          </Link>
        </div>
      </div>
      <div className={style.icons}>
        <span>
          <GrFacebook />
        </span>
        <span>
          <GrInstagram />
        </span>
        <span>
          <GrLinkedin />
        </span>
        <span>
          <GrYoutube />
        </span>
        <span>
          <GrTwitter />
        </span>
        <span>
          <GrPinterest />
        </span>
      </div>
      <p className={style.copy}>
        All rights reserved. Copyright Oasis &copy; {now.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
