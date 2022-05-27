import axios from "axios";
import React, { useEffect, useState } from "react";
import Scoop from "./Scoop";

function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(`err`, err));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? Scoop : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}

export default Options;
