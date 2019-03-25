import React from 'react';

import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({ groceries }) => (
  <ul className="groceries">
    {groceries.map((grocery) => <GroceryItem key={grocery.id} grocery={grocery} />)}
  </ul>
);

export default GroceryList;
