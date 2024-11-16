import HamburgerMenu from "@/app/components/hamburgerMenu";


export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div className="text-lg font-bold">LOGO</div>

      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-gray-500">
          Ana Sayfa
        </a>
        <a href="#" className="hover:text-gray-500">
          Hakkımızda
        </a>
        <a href="#" className="hover:text-gray-500">
          Hizmetler
        </a>
        <a href="#" className="hover:text-gray-500">
          İletişim
        </a>
      </nav>

      <div>
        <HamburgerMenu/>
      </div>
    </header>
  );
}
