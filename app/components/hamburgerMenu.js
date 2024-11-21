"use client"

import { useState } from "react"
import Link from "next/link";

export default function HamburgerMenu() {

  const linkClasses = "text-white hover:text-gray-500";

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">


      <button
        onClick={toggleMenu}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {isOpen ? (
          <i className="lni lni-xmark text-2xl text-[#FF0000]"></i>
        ) : (
          <i className="lni lni-menu-hamburger-1 text-2xl"></i>
        )}

      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={toggleMenu}
          className="mb-4 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
        >
          <i className="lni lni-xmark text-2xl text-[#FF0000]"></i>
        </button>

        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="http://localhost:3000/portfolio" className={linkClasses}>Portfolio</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/caps" className={linkClasses}>Caps</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/felsefe" className={linkClasses}>Felsefe</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/film" className={linkClasses}>Film</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/music" className={linkClasses}>Müzik</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/software" className={linkClasses}>Yazılım</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/book" className={linkClasses}>Kitap</Link>
            </li>
            <li>
              <Link href="http://localhost:3000/travelling" className={linkClasses}>Travel</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
