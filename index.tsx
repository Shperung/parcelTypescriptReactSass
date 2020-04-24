import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./src/app/app";

let jsRoot: HTMLElement = document.getElementById("js--root");

ReactDOM.render(<App />, jsRoot);
