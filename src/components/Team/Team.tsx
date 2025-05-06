"use client";
import Image from "next/image";
import classes from "./Team.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TEAM = [
  {
    image: {
      src: "https://as2.ftcdn.net/v2/jpg/04/32/89/63/1000_F_432896398_99o08tTgBYj8YP2eatvF4zaJu3AdF40E.jpg",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Ambar",
    position: "Директор",
  },
  {
    image: {
      src: "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1663579184/1663579182.jpg",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Amar",
    position: "Директор",
  },
  {
    image: {
      src: "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop_1258-59122.jpg",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Elena",
    position: "Директор",
  },
  {
    image: {
      src: "https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8=",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Mia",
    position: "Директор",
  },
  {
    image: {
      src: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1210-1024x683.jpg",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Jennie",
    position: "Директор",
  },
  {
    image: {
      src: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      alt: "employee",
      w: 392,
      h: 392,
    },
    name: "Jaja",
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
          <p className={classes.parag}>
            Наші ментори — це не просто викладачі. Це програмісти, які працюють
            у сфері і знають, як донести складні речі просто. Кожен з них
            пройшов свій шлях у ІТ і тепер готовий ділитися досвідом.
          </p>
        </div>
        {TEAM.map((member, index) => (
          <div key={index} className={classes.element}>
            <div className={classes.thumb}>
              {/* <Image
                src={member.image.src}
                alt={member.image.alt}
                width={member.image.w}
                height={member.image.h}
              /> */}
              <img src={member.image.src} />
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
      <div className={classes["team-phone"]}>
        <h2>
          <span className="purple">Команда</span>
        </h2>
        <h3>Знайомся з тими, хто тебе прокачає</h3>
        <p className={classes.parag}>
          Наші ментори — це не просто викладачі. Це програмісти, які працюють у
          сфері і знають, як донести складні речі просто. Кожен з них пройшов
          свій шлях у ІТ і тепер готовий ділитися досвідом.
        </p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop
        >
          {TEAM.map((member, index) => (
            <SwiperSlide key={index}>
              <div className={classes.element}>
                <div className={classes.thumb}>
                  <img src={member.image.src} />
                </div>
                <div className={classes.text}>
                  <h4>
                    <span className="purple">{member.name}</span>
                  </h4>
                  <div>{member.position}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
