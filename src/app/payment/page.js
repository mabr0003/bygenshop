"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function PaymentContent() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (itemsParam) {
      const ids = itemsParam.split(",").map((id) => parseInt(id, 10));

      const fetchProducts = async () => {
        const productData = await Promise.all(ids.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())));
        setProducts(productData);
      };

      fetchProducts();
    }
  }, [itemsParam]);

  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h1>Payment Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <h2>{product.title}</h2>
            <p>Price: {product.price} kr.</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-bold text-lg">Total Price: {totalPrice} kr.</div>
    </div>
  );
}

export default function Payment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
