import HamburgerMenu from "@/app/components/hamburgerMenu";
import Image from "next/image";
import Link from "next/link";


export default function Navbar({ elements }) {
  return (
    <header className="container mx-auto max-w-screen-xl flex items-center justify-between p-4">
      <div className="relative w-24 h-12">
        <Link href="http://localhost:3000">
          <Image
            src="/images/logo.png"
            alt="Site Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      {elements}
      <div>
        <HamburgerMenu />
      </div>
    </header>
  );
}
