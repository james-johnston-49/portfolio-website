import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Root redirects into Artist mode by default.
    {
      path: "/",
      redirect: "/artist/studio",
    },

    // ----- Artist mode -----
    {
      path: "/artist/studio",
      name: "studio",
      component: () => import("../views/artist/StudioView.vue"),
    },
    {
      path: "/artist/archive",
      name: "archive",
      component: () => import("../views/artist/ArchiveView.vue"),
    },
    {
      path: "/artist/workshop",
      name: "workshop",
      component: () => import("../views/artist/WorkshopView.vue"),
    },
    {
      path: "/artist/verses",
      name: "verses",
      component: () => import("../views/artist/VersesView.vue"),
    },
    {
      path: "/artist/chronicles",
      name: "chronicles",
      component: () => import("../views/artist/ChroniclesView.vue"),
    },

    // ----- Developer mode -----
    {
      path: "/developer",
      name: "index",
      component: () => import("../views/developer/IndexView.vue"),
    },
    {
      path: "/developer/projects",
      name: "projects",
      component: () => import("../views/developer/ProjectsView.vue"),
    },
    {
      path: "/developer/toolkit",
      name: "toolkit",
      component: () => import("../views/developer/ToolkitView.vue"),
    },
    {
      path: "/developer/experiments",
      name: "experiments",
      component: () => import("../views/developer/ExperimentsView.vue"),
    },
    {
      path: "/developer/logbook",
      name: "logbook",
      component: () => import("../views/developer/LogbookView.vue"),
    },

    // ----- Shared (same page/route regardless of mode) -----
    {
      path: "/ambitions",
      name: "ambitions",
      component: () => import("../views/shared/AmbitionsView.vue"),
    },
    {
      path: "/the-creator",
      name: "the-creator",
      component: () => import("../views/shared/TheCreatorView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/shared/ContactView.vue"),
    },
  ],
});

export default router;
