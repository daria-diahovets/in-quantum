import { ReactNode } from "react";
import classes from "./Button.module.css";

interface IBtn {
  link: string;
  children: ReactNode;
}

export default function Button({ link, children }: IBtn) {
  return (
    <a target="_blank" href={link} className={classes.btn}>
      <span>{children}</span>
    </a>
  );
}
