import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default async function Products() {
  let response = await fetch("https://dummyjson.com/products?limit=0");
  let data = await response.json();
  return (
    <div>
      <div className="md:grid grid-cols-[4fr_1fr]">
        <ul className="md:grid grid-cols-3">
          {data.products.map((product) => (
            <ProductCard image={product.images} productname={product.title} price={product.price} key={product.id} />
          ))}
        </ul>
        <div>Kurven</div>
      </div>
    </div>
  );
}
