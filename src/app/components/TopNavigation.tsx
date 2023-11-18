"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };

  return (
    <Navbar className="p-5 text-white fixed top-0 w-full z-50 shadow-2xl">
      <Navbar.Brand as={Link} href="/">
        <div className="lg:mb-0 flex items-center gap-3">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-3xl font-bold text-cyan-900">
            EZY Taxis
          </span>

          
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={isActive("/")}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active={isActive("/about")}>
          About
        </Navbar.Link>
        <Navbar.Link href="/our-services" active={isActive("/our-services")}>
          Services
        </Navbar.Link>
        <Navbar.Link href="/contact" active={isActive("/contact")}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavigation;
