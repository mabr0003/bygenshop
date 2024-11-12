"use client";
import Image from "next/image";

const ProductCard = ({ image, productname, price, setItems, product }) => {
  return (
    <li className="flex flex-col items-start">
      <Image src={image} alt="image" width={200} height={200} />
      <h2>{productname}</h2>
      <p>{price}</p>
      <button onClick={() => setItems(product)}>Add to basket</button>
    </li>
  );
};

export default ProductCard;
