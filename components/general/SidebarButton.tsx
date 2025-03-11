"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { navLinks } from "@/lib/navitem";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((link) => (
        <li key={link.id} className="nav-li">
          <Link href={link.href} className="nav-li_a" onClick={() => {}}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SidebarButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return (
    <>
      <Button
        onClick={toggleMenu}
        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
        aria-label="toggle menu"
      >
        <Image
          src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="toggle"
          width={25}
          height={25}
        />
      </Button>
      <nav className="sm:flex hidden">
        <NavItems />
      </nav>
      
      <div 
        className={`fixed left-0 right-0 bg-black-200/90 sm:hidden block z-50 transition-all duration-300 ease-in-out overflow-hidden border-t border-black-300`}
        style={{
          top: "72px", // Match your navbar height
          maxHeight: isOpen ? "calc(100vh - 72px)" : "0",
          paddingTop: isOpen ? "2rem" : "0",
          paddingBottom: isOpen ? "2rem" : "0"
        }}
      >
        <div className="container mx-auto px-5">
          <NavItems />
        </div>
      </div>
    </>
  );
};

export default SidebarButton;
