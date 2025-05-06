import Image from "next/image";
import classes from "./Education.module.css";
import Button from "../UI/Button";

export default function Education() {
  return (
    <section id="education" className={classes.education}>
      <div className="container">
        <Image
          id={classes["glass-left"]}
          src="/images/education/glass.png"
          alt="glass"
          width={1000}
          height={1000}
        />
        <Image
          id={classes["glass-right"]}
          src="/images/education/glass.png"
          alt="glass"
          width={1000}
          height={1000}
        />
        <h2 className="purple">навчання</h2>
        <h3>Вчися граючи. Кодуй як профі.</h3>
        <p>
          У нас ти не просто сидітимеш і вивчатимеш синтаксис. Наше навчання
          побудоване у формі квесту з блоками та інтерактивами. Ти навіть не
          помітиш, як навчився!
        </p>
        <div className={classes.wrapper}>
          <div className={classes.item}>
            <div className={classes.image}>
              <Image
                src="/images/education/game.png"
                alt=""
                width={851}
                height={627}
              />
            </div>
            <div className={classes.text}>
              Ти створиш <br />
              <span className="purple">свою гру</span>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.image}>
              <Image
                src="/images/education/AI.png"
                alt=""
                width={808}
                height={841}
              />
            </div>
            <div className={classes.text}>
              дізнаєшся як працює <br />
              <span className="purple">штучний інтелект</span>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.image}>
              <Image
                src="/images/education/algorithm.png"
                alt=""
                width={600}
                height={732}
              />
            </div>
            <div className={classes.text}>
              отримаєш чіткий
              <br /> алгоритм
              <span className="purple"> до успіху</span>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.image}>
              <Image
                src="/images/education/certificate.png"
                alt=""
                width={720}
                height={729}
              />
            </div>
            <div className={classes.text}>
              отримаєш{" "}
              <span className="purple">
                сертифікат
                <br /> Та
              </span>{" "}
              можливість вступу
              <br />
              до
              <span className="purple"> ВНЗ</span>
            </div>
          </div>
        </div>
        <Button link="https://docs.google.com/forms/d/e/1FAIpQLSf2nHbHP0m9lf0UZyx7J3LCQCaWFPtrIlK1sXtljSKnd0zdmw/viewform?usp=dialog">придбати підписку</Button>
      </div>
    </section>
  );
}
