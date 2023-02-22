import React, { useState } from "react";
import style from "../style/Footer.module.css";

let Footer = (props) => {
  console.log(props);

  return (
    <div className={style.back}>
      <table>
        <tbody>
          <tr>
            <th>Total Customer</th>
            <th>Tip</th>
          </tr>
          <tr>
            <td> {props.count}</td>
            <td>{props.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Footer;
