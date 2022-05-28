import React from "react";
import { Form } from "react-bootstrap";

function Topping({ name, imagePath, updateItemCount }) {
  return (
    <div className="flex flex-col ">
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} toppings`}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => updateItemCount(name, e.target.checked ? 1 : 0)}
          label={name}
        />
      </Form.Group>
    </div>
  );
}

export default Topping;
