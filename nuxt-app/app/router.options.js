export default {
  scrollBehavior(to, from, savedPosition) {
    const scrollContent =
      document.querySelector(".hash-content") || document.querySelector("#app");
    if (to.meta.originPosition) {
      return false;
    }
    if (savedPosition) {
      return scrollContent?.scrollTo?.({
        top: savedPosition.y,
        left: savedPosition.x,
        behavior: "smooth",
      });
    }
    return scrollContent?.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  },
};