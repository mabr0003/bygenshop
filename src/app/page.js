import Image from "next/image";
import heroImage from "../assets/images/hero.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="grid h-screen grid-cols-1 md:grid-cols-3">
        <Image className="col-start-1 col-end-4 row-start-1 row-end-1 w-full h-screen object-cover" src={heroImage} alt="hero" height={500} width={500} />
        <div className="col-start-1 col-end-2 row-start-1 row-end-1 self-center justify-self-center">
          <h1 className="text-5xl mb-4">Shop Online</h1>
          <Link className="bg-blue-500 px-2 py-2" href="/products">
            Start shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
