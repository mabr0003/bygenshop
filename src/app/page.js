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
          <Link className="px-5 py-2 bg-accent text-white text-2xl" href="/products">
            Start shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
