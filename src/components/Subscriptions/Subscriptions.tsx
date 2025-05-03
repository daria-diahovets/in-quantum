import Image from "next/image";
import classes from "./Subscriptions.module.css";

export default function Subscriptions() {
  return (
    <section id="subscription" className={classes.subscr}>
      <div className="container">
      <Image
          id={classes["glass-left"]}
          src="/images/subscriptions/glass-right.png"
          alt="glass"
          width={590}
          height={482}
        />
        <Image
          id={classes["glass-right"]}
          src="/images/subscriptions/glass-right.png"
          alt="glass"
          width={590}
          height={482}
        />
        <h2 className="purple">Підписки</h2>
        <h3>Вибери свій найкращий план</h3>
        <div className={classes.wrapper}>
          <div className={classes.card}>
            <h4>Звичайна підписка</h4>
            <p>
              Отримайте повний доступ до наших курсів програмування. Навчайтесь
              у зручному темпі, створюйте проекти та відкривайте нові можливості
              в IT-світі.
            </p>
            <div className={classes.price}>
              <div>
                <Image
                  src="/images/subscriptions/buy.svg"
                  alt="buy"
                  width={48}
                  height={48}
                />
              </div>
              <span>3750 грн</span>
            </div>
          </div>
          <div className={classes.card}>
            <h4>Сімейна підписка</h4>
            <p>
              Ідеальний вибір для родин, які хочуть навчатися разом! Долучайтеся
              до наших курсів усією сім’єю за спеціальною ціною. Разом
              відкривайте світ технологій та створюйте майбутнє.
            </p>
            <div className={classes.price}>
              <div>
                <Image
                  src="/images/subscriptions/buy.svg"
                  alt="buy"
                  width={48}
                  height={48}
                />
              </div>
              <span>5750 грн</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
