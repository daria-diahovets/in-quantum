import Image from "next/image";
import Button from "../UI/Button";
import classes from "./Promo.module.css";

export default function Promo() {
  return (
    <section id="promo" className={classes.promo}>
      <div className="container">
        <h1>
          <span className="purple">inQuantum</span> — твої перші <br /> кроки у світ
          <span className="purple">  ІТ</span>
        </h1>
        <div className={classes.wrapper}>
          <div id={classes.blur} className={classes["blur-left"]}></div>
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
          <div id={classes.blur} className={classes["blur-center"]}></div>
          <div>
            <p>
              Вже з першого заняття ти зрозумієш, що навчання може бути легким,
              цікавим і навіть прибутковим.
            </p>
          </div>
          <div id={classes.blur} className={classes["blur-right"]}></div>
        </div>
        <div className={classes.btn}>
          <div>
            отримай знижку до -60%
            <br /> тільки сьогодні!
          </div>
          <Button link="">придбати підписку</Button>
        </div>
      </div>
    </section>
  );
}
