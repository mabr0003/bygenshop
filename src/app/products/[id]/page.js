import Image from "next/image";

export default function Home({ product }) {
  return (
    <div>
      <article>{product.title}</article>
    </div>
  );
}
