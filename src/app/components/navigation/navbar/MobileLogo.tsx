"use client";
import Image from "next/image";
import Link from "next/link";

const MobileLogo = () => {
  return (
    <div className="flex flex-shrink-0 items-center px-6 py-4">
      <Link href="/">
        <Image
          src="/favilight.webp"
          alt="Logo"
          width={30}
          height={15}>
            
          </Image>
      </Link>
    </div>
  );
};

export default MobileLogo;
