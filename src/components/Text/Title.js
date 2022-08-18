import React from "react";

const Title = ({ className, children }) => {
  return (
    <h1
      className={`${
        className || ""
      } font-thin tracking-widest text-green-800 animate-pulse text-4xl sm:text-8xl`}
    >
      {children}
    </h1>
  );
};

export default Title;
