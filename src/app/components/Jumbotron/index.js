import React from "react";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrPinterest,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import style from "./Jumbotron.module.scss";
function Jumbotron() {
  return (
    <section className={style.jumb}>
      <div className={style.content}>
        <h1>Join the future today</h1>
        <button className='btn outline '>Contact Us</button>
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
      </div>
    </section>
  );
}

export default Jumbotron;
