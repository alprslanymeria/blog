import HamburgerMenu from "@/app/components/hamburgerMenu";

export default function Navbar({elements}) {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div className="text-lg font-bold">LOGO</div>
      {elements}
      <div>
        <HamburgerMenu/>
      </div>
    </header>
  );
}
