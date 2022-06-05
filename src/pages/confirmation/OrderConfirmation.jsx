import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => {
        setOrderNumber(res.data.orderNumber);
      })
      .catch((err) => console.log(`err`, err));
  }, []);

  const handleClick = () => {
    resetOrder();

    setOrderPhase("inProgress");
  };

  if (orderNumber) {
    return (
      <div className="text-center">
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p className="text-sm">
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new orders</Button>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default OrderConfirmation;
