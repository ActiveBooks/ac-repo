import html from "./profile.html";
import "./profile.css";

export default class ViewProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
