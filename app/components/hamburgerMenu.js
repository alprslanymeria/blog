"use client"

import { useState } from "react"

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
          <i class="lni lni-xmark text-2xl text-black"></i>
        ) : (
          <i class="lni lni-menu-hamburger-1 text-2xl text-black"></i>
        )}

      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          onClick={toggleMenu}
          className="mb-4 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
        >
          <i class="lni lni-xmark text-2xl text-black"></i>
        </button>

        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}
