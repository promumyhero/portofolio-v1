import Link from "next/link";
import React from "react";
import SidebarButton from "./SidebarButton";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href={"/"}
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Ridho Hery Winarto
          </Link>
          <SidebarButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
