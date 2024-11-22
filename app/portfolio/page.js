import Intro from "../components/intro";
import Navbar from "../components/navbar";
import Link from "next/link";
import Projects from "../components/projects";

export default async function Page() {

    // PROJE BİLGİLERİ BURADA ÇEKİLİR
    const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500 text-2xl underline";

    const jsxElements = [
        <nav className="hidden md:flex space-x-4">
          <Link key="home" href="#" className={linkClasses}>PORTFOLIO</Link>
        </nav>
      ];

    let data = await fetch(`http://localhost:3000/api/project`);
    let projects = await data.json()

    return (
        <div className="container mx-auto max-w-screen-xl">
            <Navbar elements={jsxElements}></Navbar>
            <Intro></Intro>
            <Projects projects={projects}></Projects>
        </div>
    );
}