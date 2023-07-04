import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
  transcations: [],
});
export const GlobalContextProvider = (props) => {
  const [updateTransaction, setUpdateTransaction] = useState([]);
  const [istransactionChanged, setIsTransactionChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://abdullah-expense-tracking-default-rtdb.firebaseio.com/Tracker.json"
      );
      const responseData = await response.json();
      const loadedTransaction = [];
      for (const key in responseData) {
        loadedTransaction.push({
          id: key,
          text: responseData[key].text,
          amount: +responseData[key].amount,
          time: responseData[key].time,
        });
      }
      setUpdateTransaction(loadedTransaction);
    };
    fetchData();
  }, [istransactionChanged]);

  //   functions

  //  Add an Transaction
  const addTransaction = async (transaction) => {
    await fetch(
      "https://abdullah-expense-tracking-default-rtdb.firebaseio.com/Tracker.json",
      {
        method: "POST",
        body: JSON.stringify({
          id: transaction.id,
          text: transaction.text,
          amount: transaction.amount,
          time: transaction.time,
        }),
        headers: {
          "Content-Type": "application.json",
        },
      }
    );
    setIsTransactionChanged((istransactionChanged) => !istransactionChanged);
    console.log("Added sucessfully");
  };

  //  delete Transaction
  const deleteTransaction = async (id) => {
    await fetch(
      `https://abdullah-expense-tracking-default-rtdb.firebaseio.com/Tracker/${id}.json/`,
      {
        method: "DELETE",
        body: JSON.stringify(null),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsTransactionChanged((istransactionChanged) => !istransactionChanged);
    console.log("deleted Sucessfully");
  };

  // calculation

  const amount = updateTransaction.map((transcation) => transcation.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  return (
    <GlobalContext.Provider
      value={{
        transcations: updateTransaction,
        total: total,
        income: income,
        expense: expense,
        addTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
