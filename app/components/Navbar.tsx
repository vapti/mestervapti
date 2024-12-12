"use client";
import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-800 p-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-roboto font-bold">
          SDMCHIPTUNING
        </div>

        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24" 
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="text-white font-roboto hidden md:flex space-x-4">
          <li>
            <a href="/">Forside</a>
          </li>
          <li>
            <a href="/omos">Om Os</a>
          </li>
          <li>
            <a href="/priser">Priser</a>
          </li>
          <li>
            <a href="/kontaktos">Kontakt Os</a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}

      {isMenuOpen ? (
        <ul className="text-white  justify-between flex-col md:hidden">
          <li className="">
            <br />
            <a href="/">Forside</a>
          </li>
          <li>
            <a href="/omos">Om Os</a>
          </li>
          <li>
            <a href="/priser">Priser</a>
          </li>
          <li>
            <a href="/kontaktos">Kontakt Os</a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
