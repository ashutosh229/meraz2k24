import { w as writable } from "./index.js";
const sidebarOpen = writable(false);
const collapsingNavbar = writable(false);
export {
  collapsingNavbar as c,
  sidebarOpen as s
};
