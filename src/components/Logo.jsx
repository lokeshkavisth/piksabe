import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/piksabe.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-bold">
        Piksabe
      </h2>
    </Link>
  );
};

export default Logo;
