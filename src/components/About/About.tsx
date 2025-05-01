import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <h2>
        <span className="purple">ПРО нас</span>
      </h2>
      <h3>Хто ми і чому нам можна довіряти?</h3>
      <div className={classes.row}>
        <div className={classes.card}>
          <p>
            Ми створили програму, де немає нудних лекцій — тільки цікаві
            формати, ігри, практичні завдання і повна структура навчання. І все
            це в супроводі справжніх менторів із досвідом.
          </p>
        </div>
        <Image width={530} height={518} src={"/images/about/pipe.png"} alt="pipe" />
        <div className={classes.card}>
          <p>
            Ми створили програму, де немає нудних лекцій — тільки цікаві
            формати, ігри, практичні завдання і повна структура навчання. І все
            це в супроводі справжніх менторів із досвідом.
          </p>
        </div>
      </div>
    </section>
  );
}
