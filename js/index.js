/*
General JavaScript for pages.
Mainly focus on the navbar and dropdowns.
*/

//HAMBURGER MENU
$( document ).ready(function() {
  $('.nav-toggle').on('click', () => {document.body.classList.toggle('nav-open');});
  $('.nav__link').on('click', () => {document.body.classList.remove('nav-open');});
});
//HAMBURGER MENU

//Function to show the dropdown
function showDropdown(dropdownId, showClass) {
  document.getElementById(dropdownId).classList.toggle(showClass);
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains(showClass)) {
          openDropdown.classList.remove(showClass);
        }
      }
    }
  }
}
//Function to show the dropdown

//Getting the current year
const getCurrentYear = () => {
  let date = new Date();
  let year = date.getFullYear();
  $('#currentYear').append(year);
}
getCurrentYear();
//Getting the current year
