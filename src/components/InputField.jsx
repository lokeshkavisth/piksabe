import React from "react";
import Button from "./Button";

const InputField = () => {
  return (
    <div className="w-80 flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm">
      <input
        type="search"
        name="search"
        id="search"
        className="p-2 w-full focus-within:outline-none"
      />
      <Button />
    </div>
  );
};

export default InputField;
