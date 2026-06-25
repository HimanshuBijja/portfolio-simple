"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth >= 768) {
  //         setIsMenuOpen(false);
  //       }
  //     };
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <nav className="flex flex-row items-center justify-between p-4 max-md:px-6 border-b-2 font-medium font-geist-mono text-base">
      <span className="font-karla text-xl font-bold">Himanshu Bijja</span>
      <div></div>
      <div className="flex flex-row items-center gap-6">
        <ToggleTheme />
        <div className="md:hidden" >
          {isMenuOpen ? (
            <X onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setIsMenuOpen(true)} />
          )}
          {isMenuOpen && (
            <ul className="flex flex-col gap-4 fixed inset-x-0 bottom-0 top-25 pb-35 justify-center items-center bg-background/90 z-50 transition-transform transform" onClick={() => setIsMenuOpen(!isMenuOpen)} >
              <RenderNavItems />
            </ul>
          )}
        </div>

        <ul className=" hidden md:flex flex-row gap-4">
          <RenderNavItems />
        </ul>
      </div>
    </nav>
  );
};

const RenderNavItems = () => {
  const path = usePathname();
  const currentPath = path.split("/")[1];
  return (
    <>
      {navItems.map((item) =>
        currentPath === item.href.split("/")[1] ? (
          <span
            key={item.label}
            className="bg-foreground/90 text-background px-4 py-1 rounded-2xl cursor-pointer"
          >
            {item.label}
          </span>
        ) : (
          <Link key={item.label} href={item.href}>
            <NavItem>
              <span >{item.label}</span>
            </NavItem>
          </Link>
        )
      )}
    </>
  );
};

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="hover:bg-muted-foreground/50 px-4 py-1 rounded-2xl">
      {children}
    </li>
  );
}

function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <span className=" flex md:mt-[1px]">
      <Sun
        onClick={() => setTheme("dark")}
        className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
    </span>
  );
}

export default NavBar;
