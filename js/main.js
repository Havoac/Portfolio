/* ------------------------------------------------
About Section Tabs Start
-------------------------------------------------*/

(function () {
  tabsContainer = document.querySelector(".about-tabs");
  tabsContainer.addEventListener("click", function (event) {
    /* If the tab you clicked on, is not active */
    if (!event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");

      /* Deactivate the active tab */
      tabsContainer
        .querySelector(".active")
        .classList.remove("active", "outer-shadow");

      /* Activate the active tab content*/
      event.target.classList.add("active", "outer-shadow");

      /* Deactivate the previous active tab content */
      document.querySelector(".tab-content.active").classList.remove("active");

      /* Activate the new Active tab content */
      document.querySelector(target).classList.add("active");
    }
  });
})();

/*--------------------------------------------------
  About Section Tabs End 
  ---------------------------------------------------*/
