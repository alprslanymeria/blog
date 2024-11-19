// import Navbar from "../components/navbar";
// import Link from "next/link";
// import Image from "next/image";

// export default function Page() {

//     const jsxElements = [
//         <nav className="hidden md:flex space-x-4">
//           <Link key="home" href="#" className="hover:text-gray-500">TRAVELLING</Link>
//         </nav>
//       ];

//     return (
//         <div className="container mx-auto max-w-screen-xl">
//             <Navbar elements={jsxElements}></Navbar>
//             <Image
//                 src="/images/map.png"
//                 alt="word map"
//                 fill
//                 className="object-cover rounded-lg"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//         </div>
//     );
// }

import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Page() {

    const jsxElements = [
        <nav className="hidden md:flex space-x-4">
            <Link key="home" href="#" className="hover:text-gray-500">TRAVELLING</Link>
        </nav>
    ];

    return (
        <div className="container mx-auto max-w-screen-xl px-4">
            {/* Navbar'ı altta boşluk bırakacak şekilde ekleyelim */}
            <Navbar elements={jsxElements}></Navbar>

            {/* Resmi navbar'ın altına yerleştiriyoruz */}
            <div className="mt-8 relative w-full h-[500px]">
                <Image
                    src="/images/map.png"
                    alt="world map"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    );
}

