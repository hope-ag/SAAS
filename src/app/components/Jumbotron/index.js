import React from "react";
import style from "./Jumbotron.module.scss";
function Jumbotron() {
  return (
    <section className={style.jumb}>
      <div className={style.content}>
        <h1>Join the future today</h1>
        <button>Contact Us</button>
      </div>
    </section>
  );
}

export default Jumbotron;
