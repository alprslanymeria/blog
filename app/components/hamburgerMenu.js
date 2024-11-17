"use client"

import { useState } from "react"
import Link from "next/link";

export default function HamburgerMenu() {
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
          <i className="lni lni-xmark text-2xl text-black"></i>
        ) : (
          <i className="lni lni-menu-hamburger-1 text-2xl text-black"></i>
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
          <i className="lni lni-xmark text-2xl text-black"></i>
        </button>

        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
