/*------------------------------------------
 Theme Light and Dark Mode 
------------------------------------------*/
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', function () {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

window.addEventListener('load', function () {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
});
