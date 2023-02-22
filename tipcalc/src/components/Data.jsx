import style from "../style/Customerlist.module.css";
let Data = (props) => {
  return (
    <div className={style.back}>
      <ul>
        <li>{`${props.name} is offering tip of ${props.tip}`}</li>
      </ul>
    </div>
  );
};
export default Data;
