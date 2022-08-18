import React from "react";

const ButtonPrimary = ({ className, children, ...props }) => {
  return (
    <button
      className={`${
        className || ""
      }  p-4 tracking-wide mt-10  text-green-600 ring-2 ring-purple-300 bg-green-300 rounded-md hover:text-purple-800  hover:bg-green-100 duration-300 ease-in-out delay-150 hover:transition`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
