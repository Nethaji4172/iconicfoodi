import React from "react";

const Input = ({ cartqty, data }) => {
  const fun = cartqty;

  const final = fun.findIndex((fn) => fn.productItem === data);

  return <div>{fun[final].qty}</div>;
};

export default Input;
