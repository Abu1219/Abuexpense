import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { total } = useContext(GlobalContext);

 
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance"> &#x20B9; {total}</h1>
    </>
  );
};
