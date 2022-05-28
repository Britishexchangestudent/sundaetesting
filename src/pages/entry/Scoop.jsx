import React from "react";
import { Form } from "react-bootstrap";

function Scoop({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, e.target.value);
  };

  return (
    <div className="flex flex-col ">
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />

      <Form.Group controlId={`${name}-count`}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type="number" defaultValue={0} onChange={handleChange} />
      </Form.Group>
    </div>
  );
}

export default Scoop;
