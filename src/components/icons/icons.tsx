// @flow
import * as React from "react";

import cancel from "./assets/cancel.svg";
import arrowRight from "./assets/arrow-point-to-right.svg";
import user from "./assets/user.svg";
import wind from "./assets/wind.svg";
import check from "./assets/check.svg";
import userLogin from "./assets/user-login.svg";
import help from "./assets/help.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";
import loading from "./assets/loading.svg";
import service from "./assets/service.svg";
import settings from "./assets/settings.svg";
import archive from "./assets/archive.svg";
import logout from "./assets/logout.svg";
import fax from "./assets/fax.svg";
import link from "./assets/link.svg";
import mail from "./assets/mail.svg";
import access from "./assets/access.svg";
import pdf from "./assets/pdf.svg";
import excel from "./assets/excel.svg";
import printer from "./assets/printer.svg";
import userEdit from "./assets/user-edit.svg";
import userRemove from "./assets/user-remove.svg";
import userAdd from "./assets/user-add.svg";
import star from "./assets/star.svg";
import edit from "./assets/edit.svg";
import deleted from "./assets/deleted.svg";
import plus from "./assets/plus.svg";
import registration from "./assets/registration.svg";

import "./icons.scss";

const glyphs = {
  registration,
  plus,
  deleted,
  edit,
  star,
  userAdd,
  userEdit,
  userRemove,
  pdf,
  excel,
  printer,
  access,
  fax,
  link,
  mail,
  cancel,
  arrowRight,
  user,
  wind,
  check,
  userLogin,
  help,
  home,
  info,
  loading,
  service,
  settings,
  archive,
  logout,
};

interface Props {
  className?: string;
  width?: number;
  height?: number;
  white?: boolean;
  blue?: boolean;
  dark?: boolean;
  red?: boolean;
  gold?: boolean;
  green?: boolean;
  glyph: string;
}

function Icon(props: Props) {
  const {
    glyph,
    className = "",
    width = 24,
    height = 24,
    dark = false,
    white = false,
    blue = false,
    red = false,
    gold = false,
    green = false,
  } = props;

  let computedClassName = `icon ${className}`;
  if (dark) computedClassName += " icon--dark";
  if (white) computedClassName += " icon--white";
  if (blue) computedClassName += " icon--blue";
  if (red) computedClassName += " icon--red";
  if (gold) computedClassName += " icon--gold";
  if (green) computedClassName += " icon--green";

  return (
    <svg className={computedClassName} width={width} height={height}>
      <use xlinkHref={glyphs[glyph]} />
    </svg>
  );
}

export default Icon;
