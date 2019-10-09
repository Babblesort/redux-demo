import React from 'react';

function OrderableItems({ items }) {
  return (
    <div className="orderable-items">
      {items.map((item, index) => (
        <div key={index}>
          ITEM: {item.name} | PRICE: {item.price}
        </div>
      ))}
    </div>
  );
}

export default OrderableItems;
