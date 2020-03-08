import { Router } from "@vaadin/router";
import "./component/login-form/login-form";
import "./component/signup-form/signup-form";
import "./component/landing-page/landing-page";
import "./component/music-player/music-player";
import "./component/music-upload/music-upload";

const main = document.getElementById("main");
const router = new Router(main);
router.setRoutes([
  { path: "/", component: "landing-page" },
  { path: "/login", component: "login-form" },
  { path: "/signup", component: "signup-form" },
  { path: "/play-music/:id", component: "music-player" },
  { path: "/upload", component: "music-upload" }
]);
