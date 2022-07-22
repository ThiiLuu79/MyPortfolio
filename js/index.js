/*
General JavaScript for pages.
Mainly focus on the navbar.
*/

//HAMBURGER MENU
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click',() => {
  document.body.classList.toggle('nav-open');

});

navLinks.forEach((link) => {
  link.addEventListener('click',()=>{
    document.body.classList.remove('nav-open');
  })
});
//HAMBURGER MENU

//DROPDOWN items for about
function myFuncExp() {
  document.getElementById("myDropdownExp").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//DROPDOWN items for about

//DROPDOWN items for projects
function myFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//DROPDOWN items for projects

//DROPDOWN items for linkedin courses
function showCourses() {
  document.getElementById("courses_dropdown").classList.toggle("show_courses");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show_courses')) {
        openDropdown.classList.remove('show_courses');
      }
    }
  }
}
//DROPDOWN items for linkedin courses

//Getting the current year
const getCurrentYear = () => {
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById('currentYear').innerHTML = year;
}
getCurrentYear();
//Getting the current year
