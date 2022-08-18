import React from "react";

const CongratsText = ({ className, children }) => {
  return (
    <h2
      className={`${
        className || ""
      } font-semibold flex justify-center animate-bounce font-serif  text-purple-800 text-2xl sm:text-6xl`}
    >
      {children}
    </h2>
  );
};

export default CongratsText;
