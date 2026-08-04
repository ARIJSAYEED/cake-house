import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="relative inline-block">
      <Image
        src="/logo.png"
        alt="Cake House logo"
        width={50}
        height={50}
        className="h-12 w-auto object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
