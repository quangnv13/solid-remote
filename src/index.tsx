/* @refresh reload */
import { render } from "solid-js/web";
import { customElement } from "solid-element";
import "./index.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);

function getInitialProps() {
  return {
    asset: "test",
  };
}

customElement("solid-remote-ce", getInitialProps(), App);
