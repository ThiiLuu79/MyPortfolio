/*
General JavaScript for pages.
Mainly focus on the navbar and dropdowns.
*/

//Inserting custom content in the home page
$( document ).ready(function() {
  //Head informations
  $('meta[name="description"]').attr("content", headInfo.description);
  $('meta[name="keywords"]').attr("content", headInfo.keywords);
  $('meta[name="author"]').attr("content", headInfo.author);
  //Title
  $('title').prepend(headInfo.title);

  //Home page informations
  //Intro
  $('.user_full_name').append(user.full_name);
  $('.user_title').append(user.title);
  //About
  $('.user_country').append(user.country);
  $('.user_about_p1').append(about.p1);
  $('.user_about_p2').append(about.p2);
  //Projects
  $('.project_1').append(project1.name);
  $('.project_1_name').append(project1.name);
  $('.project_1_type').append(project1.type);
  $('a.pro1').attr("href",project1.url);
  $('.expPro').attr("href",project1.url+"#opac");

  $('.project_2').append(project2.name);
  $('.project_2_name').append(project2.name);
  $('.project_2_type').append(project2.type);
  $('a.pro2').attr("href",project2.url);

  $('.project_3').append(project3.name);
  $('.project_3_name').append(project3.name);
  $('.project_3_type').append(project3.type);
  $('a.pro3').attr("href",project3.url);
  //Education
  $('.school1').prepend(school1.name);
  $('.school1').append(school1.location);
  $('.school1_info').prepend(school1.program);
  $('.school1_info').append(school1.duration);
  $('.school2').prepend(school2.name);
  $('.school2').append(school2.location);
  $('.school2_info').prepend(school2.program);
  $('.school2_info').append(school2.duration);

  //Puppies team
  var available = document.querySelector('.site_available');
  var unavailable = document.querySelector('.site_unavailable');

  if(available){
    $('.puppies_team').css("color", "green");
    $('.puppies_team').append("Available");
  }else if(unavailable){
    $('.puppies_team').css("color", "red");
    $('.puppies_team').append("Unavailable");
  }
});

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
    if ((!event.target.matches('.dropbtn')) && (!event.target.matches('.dropdown_stay'))) {
      $('.dropdown-content').removeClass(showClass);
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