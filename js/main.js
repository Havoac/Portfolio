/* ------------------------------------------------
About Section Tabs Start
-------------------------------------------------*/

(function () {
  tabsContainer = document.querySelector('.about-tabs');
  tabsContainer.addEventListener('click', function (event) {
    /* If the tab you clicked on, is not active */
    if (!event.target.classList.contains('active')) {
      const target = event.target.getAttribute('data-target');

      /* Deactivate the active tab */
      tabsContainer
        .querySelector('.active')
        .classList.remove('active', 'outer-shadow');

      /* Activate the active tab content*/
      event.target.classList.add('active', 'outer-shadow');

      /* Deactivate the previous active tab content */
      document.querySelector('.tab-content.active').classList.remove('active');

      /* Activate the new Active tab content */
      document.querySelector(target).classList.add('active');
    }
  });
})();

/*----------------------------------------------------
  About Section Tabs End 
  ---------------------------------------------------*/

/*---------------------------------------------------
 Portfolio Filter Items 
 ---------------------------------------------------*/
(function () {
  const filterContainer = document.querySelector('.portfolio-filter');
  const portfolioItemsContainer = document.querySelector('.portfolio-items');
  const portfolioItems =
    portfolioItemsContainer.querySelectorAll('.portfolio-item');

  /* Filter Portfolio Items */
  filterContainer.addEventListener('click', function (event) {
    if (!event.target.classList.contains('active')) {
      //deactivating existing active filter item
      filterContainer
        .querySelector('.active')
        .classList.remove('outer-shadow', 'active');

      //activating new "filter-item" as active
      event.target.classList.add('outer-shadow', 'active');

      const target = event.target.getAttribute('data-target');

      portfolioItems.forEach(function (item) {
        //Filtering the projects category wise
        if (target === item.getAttribute('data-category') || target === 'all') {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    }
  });
})();
/*---------------------------------------------------
 Portfolio Filter Ends 
 ---------------------------------------------------*/
