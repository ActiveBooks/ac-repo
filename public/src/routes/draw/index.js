import html from "./draw.html";
import "./draw.css";

export default class ViewDraw extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
