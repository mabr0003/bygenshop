"use client";
import Link from "next/link";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Basket({ items, removeFromBasket }) {
  const itemsQuery = items.map((item) => item.id).join(",");

  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-bold">Your Basket</h2>
      <ul>
        {items.map((item) => (
          <li className="flex gap-2" key={item.id}>
            <div>
              {item.title} x {item.quantity}
            </div>
            <button onClick={() => removeFromBasket(item.id)}>
              <RiDeleteBin5Fill />
            </button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <Link href={`/payment?items=${encodeURIComponent(itemsQuery)}`} className="px-4 py-2 bg-green-500 text-white rounded self-start ">
          Go to Payment
        </Link>
      )}
    </div>
  );
}

export default Basket;
