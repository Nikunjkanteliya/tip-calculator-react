import React, { useState } from "react";
import style from "../style/Tipmid.module.css";
import Customerlist from "./Customerlist";

let Tipmid = (props) => {
  let [amount, setamount] = useState("");
  let [selecttipvar, setselecttip] = useState("");
  let [custoname, setcustoname] = useState("");
  let [totalvalues, settotalvalues] = useState([]);
  let [count, setcount] = useState(0);
  let [tot, settot] = useState(0);

  let form = (event) => {
    event.preventDefault();
    let total = amount * selecttipvar;

    if (amount.trim().length === 0) {
      return alert("Amount cant be empty");
    } else if (custoname.trim().length === 0) {
      return alert("Name cant be empty");
    }

    settot(tot + total);

    let obj = { custoname: custoname, total: total };
    setcount(count + 1);

    settotalvalues((prevstate) => {
      return [...prevstate, obj];
    });
    setamount("");
    setselecttip("");
    setcustoname("");
  };

  let billamount = (event) => {
    setamount(event.target.value);
  };
  let selecttip = (event) => {
    setselecttip(event.target.value);
  };
  let name = (event) => {
    setcustoname(event.target.value);
  };

  return (
    <div>
      <div className={style.backs}>
        <form action="" onSubmit={form}>
          <div className={style.move}>
            <div className={style.enterbill}>
              <label htmlFor="">EnterYourBillAmount</label>
            </div>
            <div className={style.enterbill}>
              <input
                type="number"
                className={style.enterbill}
                onChange={billamount}
                value={amount}
              />
            </div>
          </div>
          <div className={style.midheight}>
            <div className={style.margin}>
              <label htmlFor=""> How Was the service</label>
              <select
                className={style.borderr}
                onChange={selecttip}
                value={selecttipvar}
              >
                <option> Choose</option>
                <option value="0.20"> Excellent</option>
                <option value="0.10">Moderate</option>
                <option value="0.05">Bad</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder="CustomerName"
                className={style.borderr}
                onChange={name}
                value={custoname}
              />
              <button type="submit" className={style.btn}>
                Add Customer
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Customerlist values={totalvalues} counts={count} total={tot} />
      </div>
    </div>
  );
};
export default Tipmid;
