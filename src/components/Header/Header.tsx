import Image from "next/image";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <section className={`container ${classes.header}`}>
      <a href="#promo" className={classes.logo}>inQuantum</a>
    </section>
  );
}
