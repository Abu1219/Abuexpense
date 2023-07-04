import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
export const AddTransactionLists = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const addhandler = (e) => {
    e.preventDefault();
    const transcation = {
      time: new Date(),
      text: text,
      amount: amount,
    };
    addTransaction(transcation);
    setAmount(0);
    setText("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addhandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transcation</button>
      </form>
    </>
  );
};
export default AddTransactionLists;
