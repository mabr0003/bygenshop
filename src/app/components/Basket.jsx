"use client";
import Link from "next/link";

function Basket({ items, removeFromBasket }) {
  // Create a query string with only the item IDs
  const itemsQuery = items.map((item) => item.id).join(",");

  return (
    <div>
      <h2>Your Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productname} - Quantity: {item.quantity}
            <button onClick={() => removeFromBasket(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <Link href={`/payment?items=${encodeURIComponent(itemsQuery)}`} className="px-4 py-2 bg-green-500 text-white rounded">
          Go to Payment
        </Link>
      )}
    </div>
  );
}

export default Basket;
