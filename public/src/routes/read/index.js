import html from "./read.html";
import "./read.css";

export default class ViewRead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
