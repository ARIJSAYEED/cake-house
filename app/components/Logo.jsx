import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image width={50} height={50} src={"/logo.png"}></Image>
    </Link>
  );
};

export default Logo;
