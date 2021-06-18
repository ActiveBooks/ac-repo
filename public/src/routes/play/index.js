import html from "./play.html";
import "./play.css";

export default class ViewPlay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
