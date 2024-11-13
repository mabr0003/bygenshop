// pages/product/[id].jsx
"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price} DKK</p>
      {/* Add an "Add to Basket" button here if needed */}
    </div>
  );
}
