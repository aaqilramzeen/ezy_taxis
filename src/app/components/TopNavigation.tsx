"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";

const TopNavigation = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };

  return (
    <Navbar className="p-5 text-white fixed w-full z-50 shadow-2xl" fluid>
      <Navbar.Brand as={Link} href="/">
        <div className="flex items-center gap-4">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-cyan-900">
            EZY Taxis
          </span>
          <Button outline>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <span className="mr-2">Call Us On 01293 888 999</span>
          </Button>

          <Button outline>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <span className="mr-2">Call Us On 01403 888 999</span>
          </Button>
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
