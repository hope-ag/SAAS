import React from "react";
import style from "./Nav.module.scss";
function Nav(props) {
  return (
    <div className={style.nav}>
      <h2>{props.title}</h2>
      <ul>{props.children}</ul>
    </div>
  );
}

export default Nav;
