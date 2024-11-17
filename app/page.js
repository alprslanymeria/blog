import Navbar from "@/app/components/navbar";
import Link from "next/link";
import Content from "./components/content";
import Subscribe from "./components/subscribe";

export default function Home() {

  const jsxElements = [
    <nav className="hidden md:flex space-x-4">
      <Link key="home" href="#" className="hover:text-gray-500">Ana sayfa</Link>
      <Link key="about" href="#" className="hover:text-gray-500">Hakkımızda</Link>
      <Link key="services" href="#" className="hover:text-gray-500">Hizmetler</Link>
      <Link key="contact" href="#" className="hover:text-gray-500">İletişim</Link>
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
