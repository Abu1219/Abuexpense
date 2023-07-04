import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionLists = () => {
  const globalcontext = useContext(GlobalContext);
  const transactions = globalcontext.transcations;
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
