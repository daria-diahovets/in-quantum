import Image from "next/image";
import Button from "../UI/Button";
import classes from "./Promo.module.css";

export default function Promo() {
  return (
    <section className={`container ${classes.promo}`}>

      <h1>
        <span className="purple">inQuantum</span> — твої перші <br /> кроки
        <span className="purple"> у світ ІТ</span>
      </h1>
      <div className={classes.wrapper}>
        <div className={`${classes.blur} ${classes["blur-left"]}`}></div>
        <div>
          <p>
            Ми не просто курси програмування — ми команда, яка допоможе тобі
            знайти своє місце у світі технологій.
          </p>
        </div>
        <Image
          id={classes.controller}
          src="/images/promo/controller.png"
          alt="controller"
          width={825}
          height={680}
        />
        <div className={`${classes.blur} ${classes["blur-center"]}`}></div>
        <div>
          <p>
            Вже з першого заняття ти зрозумієш, що навчання може бути легким,
            цікавим і навіть прибутковим.
          </p>
        </div>
        <div className={`${classes.blur} ${classes["blur-right"]}`}></div>
      </div>
      <div className={classes.btn}>
        <div>
          отримай знижку до -60%
          <br /> тільки сьогодні!
        </div>
        <Button link="">Зареєструватися</Button>
      </div>
      <Image
        id={classes["glass-left"]}
        src="/images/promo/glass-left.png"
        alt="glass"
        width={436}
        height={572}
      />
      <Image
        id={classes["glass-right"]}
        src="/images/promo/glass-right.png"
        alt="glass"
        width={404}
        height={543}
      />
    </section>
  );
}
