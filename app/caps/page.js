// Veritabanından veriler çekilecek

import Caps from "../components/caps";
import Navbar from "../components/navbar";
import Link from "next/link";

export default async function Page() {

    const jsxElements = [
        <nav className="hidden md:flex space-x-4">
          <Link key="home" href="#" className="hover:text-gray-500">CAPS</Link>
        </nav>
      ];

    let data = await fetch(`http://localhost:3000/api/caps`);
    let images = await data.json()

    return (
        <div className="container mx-auto max-w-screen-xl">
            <Navbar elements={jsxElements}></Navbar>
            <Caps images={images}></Caps>
        </div>
    );
}