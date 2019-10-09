import React, { useState } from 'react';

function AddCatalogItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleClick = () => {
    if (name.length > 0 && price.length > 0) {
      onAddItem({ name, price });
      setName('');
      setPrice('0.00');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Item Name"
      />
      &nbsp;
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Item Price"
      />
      &nbsp;
      <button onClick={handleClick}>Add Catalog Item</button>
    </div>
  );
}

export default AddCatalogItem;
