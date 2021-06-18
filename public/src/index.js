import "./global.css";
import "regenerator-runtime/runtime";
import ViewHome from "./routes/home";
import ViewRead from "./routes/read";
import ViewPlay from "./routes/play";
import ViewDraw from "./routes/draw";
import ViewProfile from "./routes/profile";
import ViewAbout from "./routes/about";
import ViewTabs from "./routes/tabs";
import ViewTabRelated from "./routes/tabs/tab-related";
import ViewTabInfo from "./routes/tabs/tab-info";

//registers custom elements (routes & components)
window.customElements.define("view-home", ViewHome);
window.customElements.define("view-read", ViewRead);
window.customElements.define("view-play", ViewPlay);
window.customElements.define("view-draw", ViewDraw);
window.customElements.define("view-profile", ViewProfile);
window.customElements.define("view-about", ViewAbout);
window.customElements.define("view-tabs", ViewTabs);
window.customElements.define("tab-info", ViewTabInfo);
window.customElements.define("tab-related", ViewTabRelated);
