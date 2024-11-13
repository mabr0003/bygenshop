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

  return <div></div>;
}
