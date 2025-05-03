import classes from "./Menu.module.css";

interface IMenu {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: IMenu) {
  return (
    <>
      <div
        id={classes.backdrop}
        className={`${isOpen ? classes.active : ""}`}
        onClick={onClose}
      ></div>
      <nav className={`${classes.menu} ${isOpen ? classes.active : ""}`}>
        <a href="#promo">
          <span>Головна</span>
        </a>
        <a href="#about">
          <span>Про нас</span>
        </a>
        <a href="#education">
          <span>Навчання</span>
        </a>
        <a href="#team">
          <span>Команда</span>
        </a>
        <a href="#subscription">
          <span>Підписки</span>
        </a>
      </nav>
    </>
  );
}
