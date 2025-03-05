"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const HomeNav = () => {
  const Logo = () => {
    return (
  <div className="flex-grow block">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={400}
          height={211}
          className="z-50">
          </Image>
      </Link>
    </div>
  )};

  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState(pathName);
  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  useEffect(() => {
    setActiveLink(pathName); // Update activeLink on router changes
  }, [pathName]);


  const workItem = () => {
    return (
        <div
          onClick={() => handleClick("/")}
          className="flex-grow block cursor-pointer"
        >
          {activeLink === "/"? 
          (
            <Link href="/" className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 text-lg border border-red">
                Work
            </Link>
          ) : (
            <Link href="/" className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 text-lg border border-offblack hover:text-white hover:border-transparent hover:bg-offblack">
                Work
            </Link>
          )
          } 
        </div>
    );
  }

  const aboutItem = () => {
    return (
        <div
          onClick={() => handleClick("/about")}
          className="flex-grow inline-block cursor-pointer"
        >
          {activeLink === "/about"? 
          (
            <Link href="/about" className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 text-lg border border-red">
                About Me
            </Link>
          ) : (
            <Link href="/about" className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 text-lg border border-offblack hover:text-white hover:border-transparent hover:bg-offblack">
                About Me
            </Link>
          )
          } 
        </div>
    );
  }

  return (
    <nav className="bg-white flex col-span-1 mx-auto my-auto">
        <>
          <div className="flex flex-col text-center justify-around gap-y-3">
              <Logo></Logo>
                {workItem()}
                {aboutItem()}
          </div>
        </>
    </nav>
  );
};

export default HomeNav;
