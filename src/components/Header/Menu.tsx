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
        <a href="#promo" onClick={onClose}>
          <span>Головна</span>
        </a>
        <a href="#about" onClick={onClose}>
          <span>Про нас</span>
        </a>
        <a href="#education" onClick={onClose}>
          <span>Навчання</span>
        </a>
        {/* <a href="#team" onClick={onClose}>
          <span>Команда</span>
        </a> */}
        <a href="#subscription" onClick={onClose}>
          <span>Підписки</span>
        </a>
      </nav>
    </>
  );
}
