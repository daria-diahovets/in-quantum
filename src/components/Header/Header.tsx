"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import Menu from "./Menu";
import classes from "./Header.module.css";
import { throttle } from "@/helper/helper";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollHandler = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    }, 200),
    [lastScrollY],
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScrollY]);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section
        className={`${classes.header} ${
          isHeaderVisible ? classes.visible : classes.hidden
        }`}
      >
        {!isMenuOpen ? (
          <Image
            id={classes.hamburger}
            src="/images/header/hamburger.svg"
            alt="hamburger"
            width={40}
            height={40}
            onClick={openMenuHandler}
          />
        ) : (
          <Image
            id={classes.close}
            src="/images/header/close.svg"
            alt="hamburger"
            width={40}
            height={40}
            onClick={closeMenuHandler}
          />
        )}

        <a href="#promo" className={classes.logo}>
          inQuantum
        </a>
      </section>
      <Menu isOpen={isMenuOpen} onClose={closeMenuHandler}/>
    </>
  );
}
