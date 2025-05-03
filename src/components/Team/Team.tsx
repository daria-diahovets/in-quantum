import Image from "next/image";
import classes from "./Team.module.css";

const TEAM = [
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
  {
    image: { src: "/images/team/people.jpg", alt: "employee", w: 392, h: 392 },
    name: "Ma Long",
    position: "Директор",
  },
];

export default function Team() {
  return (
    <section id="team" className={classes.team}>
      <div className={`container ${classes.grid}`}>
        <div className={classes.merged}>
          <h2>
            <span className="purple">Команда</span>
          </h2>
          <h3>Знайомся з тими, хто тебе прокачає</h3>
          <p>
            Наші ментори — це не просто викладачі. Це програмісти, які працюють
            у сфері і знають, як донести складні речі просто. Кожен з них
            пройшов свій шлях у ІТ і тепер готовий ділитися досвідом.
          </p>
        </div>
        {TEAM.map((member, index) => (
          <div key={index} className={classes.element}>
            <div className={classes.body}>
              <Image
                src={member.image.src}
                alt={member.image.alt}
                width={member.image.w}
                height={member.image.h}
              />
            </div>
            <div className={classes.text}>
              <h4>
                <span className="purple">{member.name}</span>
              </h4>
              <div>{member.position}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
