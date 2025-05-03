import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <div className="container">
        <Image
          id={classes["glass-left"]}
          src="/images/promo/glass-left.png"
          alt="glass"
          width={527}
          height={572}
        />
        <Image
          id={classes["glass-right"]}
          src="/images/promo/glass-right.png"
          alt="glass"
          width={528}
          height={543}
        />
        <h2>
          <span className="purple">ПРО нас</span>
        </h2>
        <h3>Хто ми і чому нам можна довіряти?</h3>
        <Image
            id={classes.pipe}
            width={530}
            height={518}
            src={"/images/about/pipe.png"}
            alt="pipe"
          />
        <div className={classes.wrapper}>
          <div className={classes.card}>
            <p>
              inQuantum — це спільнота, яка з’явилась, щоб зробити ІТ доступним
              для кожного. Ми віримо, що кожна дитина або підліток може стати
              крутим програмістом, якщо отримає правильний підхід, план і
              підтримку.
            </p>
          </div>
          <div className={classes.card}>
            <p>
              Ми створили програму, де немає нудних лекцій — тільки цікаві
              формати, ігри, практичні завдання і повна структура навчання. І
              все це в супроводі справжніх менторів із досвідом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
