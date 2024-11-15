"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, productname, price, setItems, product }) => {
  return (
    <li className="flex flex-col items-start">
      <Link className="mb-4 border border-black p-2 rounded-xl" href={`/products/${product.id}`}>
        <Image src={image} alt="image" width={200} height={200} />
        <h2>{productname}</h2>
        <p>{price}</p>
      </Link>
      <button className="bg-[#7A7A7A] text-white font-light py-2 px-4 rounded hover:bg-[#616161] focus:outline-none focus:ring-2 focus:ring-[#7A7A7A]" onClick={() => setItems(product)}>
        Add to basket
      </button>
    </li>
  );
};

export default ProductCard;
