import React from "react";

function Scoop({ name, imagePath }) {
  return (
    <div className="flex flex-col ">
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </div>
  );
}

export default Scoop;
