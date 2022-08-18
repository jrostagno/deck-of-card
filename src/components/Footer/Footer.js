import React from "react";

const Footer = () => {
  return (
    <div className="p-4 text-center bg-green-300 opacity-40">
      <span className="font-medium text-black opacity-90 ">Deck of Cards</span>
      &copy; {new Date().getFullYear()} - Javier Rostagno - FairPlay Challenge
    </div>
  );
};

export default Footer;
