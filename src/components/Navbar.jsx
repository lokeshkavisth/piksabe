import React from "react";
import Logo from "./Logo";
import InputField from "./InputField";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-20 border-b backdrop-blur sticky top-0 w-full">
      <div>
        <Logo />
      </div>
      <div>
        <InputField />
      </div>
    </nav>
  );
};

export default Navbar;
