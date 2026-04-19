"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sections } from "@/lib/navbar/data";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  // Control Menu
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false); // Cerrar la navegación desplegable
  };

  return (
    <div className="fixed top-0 h-16 left-0 w-full z-50 bg-white px-4 py-2 flex justify-center items-center">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link href={"/"} className=" flex justify-center items-center">
          <Image src="/logo.svg" 
            alt="Logo Vila Alma"
            width={90} 
            height={90} 
            priority 
            style={{ height: 'auto', width: '100px' }} />
        </Link>
        <div className="hidden md:block">
          <nav className="flex gap-8 uppercase font-semibold text-gray-500">
            {sections.map((section, index) => (
              <Link
                href={section.slog}
                className=" transition duration-200 hover:text-principal uppercase font-semibold text-gray-500"
                key={section.name}
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
  
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <RiCloseLine width={30} height={20} className="text-principal" />
            ) : (
              <FaBarsStaggered width={30} height={20} className="text-principal" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 overflow-hidden transition-all duration-500 bg-white mt-16 z-50   ${ 
          isClick ? "max-h-60 " : "max-h-0"
        }`}
      >
        <div className="md:hidden">
          <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center gap-2 ">
            {sections.map((section) => (
              <Link
                key={section.name}
                href={section.slog}
                className="text-opacity-75 transition duration-200 hover:text-principal uppercase font-semibold text-gray-500"
                onClick={closeNavbar}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;