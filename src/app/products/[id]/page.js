"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
      <article className="grid">
        <div className="md:grid grid-cols-2 mb-3.5">
          <Image src={product.thumbnail} alt={product.title} width={400} height={200} className="justify-self-center" />
          <div className="max-w-prose self-center flex flex-col gap-10">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-self-center text-center">
          {product.reviews.map((review, index) => (
            <div key={`${index}-${Math.random()}`}>
              <div className="flex justify-center">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p>{`"${review.comment}"`}</p>
              <p>{`-${review.reviewerName}`}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
