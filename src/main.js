import { createApp } from "vue";
import App from "./App.vue";

import courserouter from "./router/course-router.js";

createApp(App).use(courserouter).mount("#app");
