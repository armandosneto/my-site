import React, { Children } from "react";
import style from "./CustomTitle.module.scss";

interface Props {
  children: React.ReactNode;
}
const CustomTitle: React.FC<Props> = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};

export default CustomTitle;
