import React from "react";

const NumberText = ({ className, children }) => {
  return (
    <h2
      className={`${
        className || ""
      } font-bold tracking-wide text-green-800 animate-pulse text-5xl sm:text-9xl`}
    >
      {children}
    </h2>
  );
};

export default NumberText;
