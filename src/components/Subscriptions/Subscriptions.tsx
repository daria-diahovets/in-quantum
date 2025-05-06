import Image from "next/image";
import classes from "./Subscriptions.module.css";

const SUBSCRIPTIONS_ARR = [
  {
    title: "Звичайна підписка",
    descr:
      "Отримайте повний доступ до наших курсів програмування. Навчайтесь у зручному темпі, створюйте проекти та відкривайте нові можливості в IT-світі.",
    price: {
      standart: 4000,
      discount: 1599,
    },
  },
  {
    title: "Сімейна підписка",
    descr:
      "Ідеальний вибір для родин, які хочуть навчатися разом! Долучайтеся до наших курсів усією сім’єю за спеціальною ціною. Разом відкривайте світ технологій та створюйте майбутнє.",
    price: {
      standart: 3750,
      discount: 1499,
    },
  },
];

export default function Subscriptions() {
  return (
    <section id="subscription" className={classes.subscr}>
      <div className="container">
        <Image
          id={classes["glass-left"]}
          src="/images/subscriptions/glass.png"
          alt="glass"
          width={590}
          height={482}
        />
        <Image
          id={classes["glass-right"]}
          src="/images/subscriptions/glass.png"
          alt="glass"
          width={590}
          height={482}
        />
        <h2 className="purple">Підписки</h2>
        <h3>Вибери свій найкращий план</h3>
        <div className={classes.wrapper}>
          {SUBSCRIPTIONS_ARR.map((card, index) => (
            <div key={index} className={classes.card}>
              <h4>{card.title}</h4>
              <p>{card.descr}</p>
              <div className={classes.price}>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf2nHbHP0m9lf0UZyx7J3LCQCaWFPtrIlK1sXtljSKnd0zdmw/viewform?usp=dialog">
                  <Image
                    src="/images/subscriptions/buy.svg"
                    alt="buy"
                    width={48}
                    height={48}
                  />
                </a>
                <div className={classes["price-list"]}>
                  <span>{card.price.standart} грн</span>
                  <span>{card.price.discount} грн</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3750 -- 4000
