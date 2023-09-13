import React from "react";
import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto my-12">
      <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
      <img src={avatar} alt="avatar" />
    </header>
  );
};

export default Header;
