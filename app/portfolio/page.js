import Intro from "../components/intro";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Page() {

    // PROJE BİLGİLERİ BURADA ÇEKİLİR

    const jsxElements = [
        <nav className="hidden md:flex space-x-4">
          <Link key="home" href="#" className="hover:text-gray-500">PORTFOLIO</Link>
        </nav>
      ];

    return (
        <div className="container mx-auto max-w-screen-xl">
            <Navbar elements={jsxElements}></Navbar>
            <Intro></Intro>
        </div>
    );
}