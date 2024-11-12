// Basket.jsx
"use client";

const Basket = ({ items, removeFromBasket }) => {
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromBasket(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
