import Link from "next/link";
import { type ReactNode } from "react";

import classes from "./Button.module.css";

interface IButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: IButtonProps) {
  return (
    <Link href={href} className={classes.btn}>
      <span>{children}</span>
    </Link>
  );
}