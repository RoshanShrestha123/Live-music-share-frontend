import {Router} from '@vaadin/router';
import './component/login-form/login-form';
import './component/signup-form/signup-form';
import './component/landing-page/landing-page';

const main = document.getElementById("main");
const router = new Router(main);
router.setRoutes([
  { path: "/", component: "landing-page" },
  { path: "/login", component: "login-form" },
  { path: "/signup", component: "signup-form" },
 
]);
