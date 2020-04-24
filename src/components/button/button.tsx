import * as React from "react";

// components
import Icon from "../icons/icons";

// styles
import styles from "./button.scss";

interface Props {
  children: React.ReactNode;
  cancel: boolean;
}

const Button = (props: Props) => {
  const { children, cancel } = props;
  return (
    <button className={`${styles.btn} button`}>
      <Icon glyph="cancel" />
      {children}
    </button>
  );
};

export default Button;
