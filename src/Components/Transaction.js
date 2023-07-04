import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const Sign = props.transaction.amount < 0 ? "-" : "+";
  return (
    <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {Sign}&#x20B9;
        {Math.abs(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={(e) => {
          deleteTransaction(props.transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
};
