import Image from "next/image";
const ProductCard = ({ image, productname, price }) => {
  return (
    <li>
      <Image src={image} alt="image" width={200} height={200} />
      <h2>{productname}</h2>
      <span>{price}</span>
    </li>
  );
};

export default ProductCard;
