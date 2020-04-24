import * as React from "react";

// icons
//import CancelIcon from "../icons/cancel.svg";

// styles
import styles from "./button.scss";

export interface Props {
  children: React.ReactNode;
  cancel: boolean;
}

const Button = (props: Props) => {
  const { children, cancel } = props;
  return <button className={`${styles.btn} button`}>{children}</button>;
};

export default Button;
