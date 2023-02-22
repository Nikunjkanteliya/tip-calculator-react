import React, { useState } from "react";
import style from "../style/Tipheader.module.css";
import Tipmid from "./Tipmid";

let Tipheader = (props) => {
  return (
    <div className={style.size}>
      <div className={style.back}>
        <header>TIP CALCULATOR</header>
        <p> Made in React Js</p>
      </div>

      <div>
        <div>
          <Tipmid />
        </div>
      </div>
    </div>
  );
};
export default Tipheader;
