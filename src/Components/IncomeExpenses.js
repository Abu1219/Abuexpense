import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpenses = () => {
  const { income, expense } = useContext(GlobalContext);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+&#x20B9;{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-&#x20B9;{expense}</p>
      </div>
    </div>
  );
};
