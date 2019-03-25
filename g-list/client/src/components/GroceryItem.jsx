import React from 'react';

const GroceryItem = ({ grocery }) => {
  return (
    <li>
      <span>{grocery.name + ' '}</span>
      <span>{grocery.quantity}</span>
    </li>
  );
};

export default GroceryItem;
