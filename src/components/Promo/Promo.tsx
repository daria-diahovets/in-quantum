import Image from "next/image";
import Button from "../UI/Button";
import classes from "./Promo.module.css";

export default function Promo() {
  return (
    <section id="promo" className={classes.promo}>
      <div className="container">
        <h1>
          <span className="purple">inQuantum</span> — твої перші <br /> кроки у
          світ
          <span className="purple"> ІТ</span>
        </h1>
        <Image
          id={classes["rhombus-left"]}
          src="/images/promo/rhombus.png"
          alt="sphere"
          width={484}
          height={497}
        />
        <Image
          id={classes["rhombus-right"]}
          src="/images/promo/rhombus.png"
          alt="sphere"
          width={484}
          height={497}
        />
        <Image
          id={classes.sphere}
          src="/images/promo/sphere.png"
          alt="sphere"
          width={970}
          height={655}
        />
        <div id={classes.blur} className={classes["blur-left"]}></div>
        <div id={classes.blur} className={classes["blur-center"]}></div>
        <div id={classes.blur} className={classes["blur-right"]}></div>

        <div className={classes.blocks}>
          <div>
            <p>
              Ми не просто курси програмування — ми команда, яка допоможе тобі
              знайти своє місце у світі технологій.
            </p>
          </div>
          <div>
            <p>
              Вже з першого заняття ти зрозумієш, що навчання може бути легким,
              цікавим і навіть прибутковим.
            </p>
          </div>
        </div>
        <div className={classes.btn}>
          <div>
            отримай знижку до -60%
            <br /> тільки сьогодні!
          </div>
          <Button link="https://docs.google.com/forms/d/e/1FAIpQLSf2nHbHP0m9lf0UZyx7J3LCQCaWFPtrIlK1sXtljSKnd0zdmw/viewform?usp=dialog">
            придбати підписку
          </Button>
        </div>
      </div>
    </section>
  );
}
