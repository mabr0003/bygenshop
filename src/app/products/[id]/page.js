"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const { id } = useParams();

  const [productId, setProductId] = useState(id);

  useEffect(() => {
    setProductId(id);
  }, [id]);

  const { data: product, error } = useSWR(productId ? `https://dummyjson.com/products/${productId}` : null, fetcher);
  if (error) return <div>Der opstod en fejl...</div>;
  if (!product) return <div>Indlæser...</div>;

  return (
    <div>
      <article>
        <h1>{product.title}</h1>
        <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
      </article>
    </div>
  );
}
