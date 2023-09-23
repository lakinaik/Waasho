import React, { useEffect, useState } from "react";

import TopNav from "../Components/TopNav";
import Navbar from "../Components/Navbar";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className="z-50 w-full">
        <TopNav />
        <div
          className={
            scroll
              ? "w-full fixed top-0 z-50 duration-500"
              : "w-full z-50  duration-500 ease-out"
          }
        >
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
