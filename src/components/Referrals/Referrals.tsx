import classes from "./Referrals.module.css";

export default function Referrals() {
  return (
    <section className={`container ${classes.wrapper}`}>
      <h2 className={classes.title}>
        А ще ми маємо реферальну систему: запрошуй друзів —{" "}
        <span className="purple">отримуй бонуси</span>
      </h2>
      <h3>Залишай свою пошту, щоб нічого не пропустити!</h3>
      <div className={classes.row}>
        <input placeholder="Введіть E-mail" type="text" />
        <button>Надіслати</button>
      </div>
    </section>
  );
}
