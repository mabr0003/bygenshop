"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, productname, price, setItems, product }) => {
  return (
    <li className="flex flex-col items-start">
      <Link href={`/products/${product.id}`}>
        <Image src={image} alt="image" width={200} height={200} />
        <h2>{productname}</h2>
        <p>{price}</p>
        <button onClick={() => setItems(product)}>Add to basket</button>
      </Link>
    </li>
  );
};

export default ProductCard;
