import React, { useState } from "react";
import style from "../style/Customerlist.module.css";
import Footer from "./Footer";
import Data from "./Data";

let Customerlist = (props) => {
  let [vib, setvib] = useState(false);

  let btn = () => {
    setvib((prevstate) => {
      return !prevstate;
    });
  };
  let dataret = props.values.map((elem) => {
    return (
      <Data
        name={elem.custoname}
        tip={elem.total}
        key={Math.random().toString()}
      />
    );
  });

  return (
    <div>
      <h1 className={style.margin}>Customer list</h1>
      {dataret}
      <div className={style.margin}>
        <button className={style.btn} type={"submit"} onClick={btn}>
          {" "}
          CalculateTip&customer
        </button>
      </div>
      <div>
        {vib ? <Footer count={props.counts} total={props.total} /> : ""}
      </div>
    </div>
  );
};
export default Customerlist;
