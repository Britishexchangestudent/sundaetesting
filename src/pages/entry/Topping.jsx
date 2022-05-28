import React from "react";

function Topping({ name, imagePath }) {
  return (
    <div className="flex flex-col ">
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} toppings`}
      />
    </div>
  );
}

export default Topping;
