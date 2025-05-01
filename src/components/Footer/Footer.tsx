import Button from "../UI/Button";
import classes from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <div className={classes.row}>
        <Image
          width={100}
          height={100}
          src={"/images/footer/logo.svg"}
          alt="logo"
        />
        <span>InQuantum</span>
      </div>
      <div className={classes.buttons}>
        <Button href="/">Головна</Button>
        <Button href="/">Про нас</Button>
        <Button href="/">Навчання</Button>
        <Button href="/">Команда</Button>
        <Button href="/">Підписки</Button>
      </div>
      <div className={classes.privacy}>
        <span>Privacy policy</span>
        <span>Cookie policy</span>
        <span>@ 2025 iSYB. All rights reserved.</span>
      </div>
    </section>
  );
}
