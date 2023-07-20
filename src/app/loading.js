import React from "react";
import { ImSpinner2 } from "react-icons/im";

const loading = () => {
  return (
    <div>
      <ImSpinner2 className="animate-spin text-xl" />
    </div>
  );
};

export default loading;
