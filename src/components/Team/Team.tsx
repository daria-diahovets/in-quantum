import classes from "./Team.module.css";

export default function Team() {
  return (
    <section className={`container ${classes.grid}`}>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
      <div className={classes.merged}>
        <h2>
          <span className="purple">Команда</span>
        </h2>
        <h3>Знайомся з тими, хто тебе прокачає</h3>
        <p>
          Наші ментори — це не просто викладачі. Це програмісти, які працюють у
          сфері і знають, як донести складні речі просто. Кожен з них пройшов
          свій шлях у ІТ і тепер готовий ділитися досвідом.
        </p>
      </div>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
      <div className={classes.element}>
        <div className={classes.body}></div>
        <div className={classes.text}></div>
      </div>
    </section>
  );
}
