import { socialLinks } from "@/lib/navitem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p> <p>|</p> <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <Link
            href={social.url}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="social-icon group hover:bg-white/10 transition-colors"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className="w-1/2 h-1/2 group-hover:scale-110 transition-transform"
            />
          </Link>
        ))}
      </div>
      <p className="text-white-500">
        &copy; 2025 Ridho Hery Winarto. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
