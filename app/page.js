import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Content from "./components/content";
import Subscribe from "./components/subscribe";

export default function Home() {

  const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500";

  const jsxElements = [
    <nav className="hidden md:flex space-x-12">
      <Link key="felsefe" href="/felsefe" className={linkClasses}>Felsefe</Link>
      <Link key="film" href="/film" className={linkClasses}>Film</Link>
      <Link key="muzik" href="/music" className={linkClasses}>Müzik</Link>
      <Link key="yazilim" href="/software" className={linkClasses}>Yazılım</Link>
      <Link key="kitap" href="/book" className={linkClasses}>Kitap</Link>
    </nav>
  ];

  return (
    <div className="container mx-auto max-w-screen-xl">
      <Navbar elements={jsxElements}></Navbar>
      <Content/>
      <Subscribe/> 
    </div>
  );
}
