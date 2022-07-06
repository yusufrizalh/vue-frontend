import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import CourseAdd from "../components/CourseAdd.vue";
import CourseEdit from "../components/CourseEdit.vue";
import CourseList from "../components/CourseList.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "CourseAdd",
    path: "/course-create",
    component: CourseAdd,
  },
  {
    name: "CourseEdit",
    path: "/course-edit",
    component: CourseEdit,
  },
  {
    name: "CourseList",
    path: "/course-list",
    component: CourseList,
  },
];

const courserouter = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default courserouter;
