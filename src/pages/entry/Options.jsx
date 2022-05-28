import axios from "axios";
import React, { useEffect, useState } from "react";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../context/OrderDetails";
import AlertBanner from "../common/AlertBanner";
import Scoop from "./Scoop";
import Topping from "./Topping";

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? Scoop : Topping;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <div>
      <h2>{title}</h2>

      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.total[optionType]}
      </p>
      <div className="flex">{optionItems}</div>
    </div>
  );
}

export default Options;
