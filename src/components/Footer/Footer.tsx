import classes from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.wrapper}`}>
        <Image
          width={410}
          height={100}
          src={"/images/footer/logo.svg"}
          alt="logo"
        />
        <div className={classes.links}>
          <a href="#promo">
            <span>Головна</span>
          </a>
          <a href="#about">
            <span>Про нас</span>
          </a>
          <a href="#education">
            <span>Навчання</span>
          </a>
          <a href="#team">
            <span>Команда</span>
          </a>
          <a href="#subscription">
            <span>Підписки</span>
          </a>
        </div>
        <div className={classes.privacy}>
          <span>Privacy policy</span>
          <span>Cookie policy</span>
          <span>@ 2025 iSYB. All rights reserved.</span>
        </div>
        <Image
          id={classes["glass-left"]}
          src="/images/footer/glass.png"
          alt="glass"
          width={704}
          height={404}
        />
        <Image
          id={classes["glass-right"]}
          src="/images/footer/glass.png"
          alt="glass"
          width={704}
          height={404}
        />
      </div>
    </footer>
  );
}
