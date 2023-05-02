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
  $('.webPro_').append(webPro.name);
  $('.webPro_name').append(webPro.name);
  $('.webPro_type').append(webPro.type);
  $('a.webPro_link').attr("href",webPro.url);

  $('.gamePro_').append(gamePro.name);
  $('.gamePro_name').append(gamePro.name);
  $('.gamePro_type').append(gamePro.type);
  $('a.gamePro_link').attr("href",gamePro.url);

  $('.drawPro_').append(drawPro.name);
  $('.drawPro_name').append(drawPro.name);
  $('.drawPro_type').append(drawPro.type);
  $('a.drawPro_link').attr("href",drawPro.url);

  $('.photoPro_').append(photoPro.name);
  $('.photoPro_name').append(photoPro.name);
  $('.photoPro_type').append(photoPro.type);
  $('a.photoPro_link').attr("href",photoPro.url);

  $('.schoolPro_').append(schoolPro.name);
  $('.schoolPro_name').append(schoolPro.name);
  $('.schoolPro_type').append(schoolPro.type);
  $('a.schoolPro_link').attr("href",schoolPro.url);

  $('a.workExp_link').attr("href",workExp.url);

  //Education
  $('.ets_').prepend(ets.name);
  $('.ets_').append(ets.location);
  $('.ets_info').prepend(ets.program);
  $('.ets_info').append(ets.duration);
  $('.maisonneuve_').prepend(maisonneuve.name);
  $('.maisonneuve_').append(maisonneuve.location);
  $('.maisonneuve_info').prepend(maisonneuve.program);
  $('.maisonneuve_info').append(maisonneuve.duration);

  //Append links
  $('a.wimw_link').attr("href",wimw.url);
  $('a.csjv_link').attr("href",csjv.url);
  $('a.ccfv_link').attr("href",ccfv.url);
  $('a.csszg_link').attr("href",csszg.url);
  $('a.ttt_link').attr("href",ttt.url);

  //Working experience time
  $('#ciuss_time').append(getExpTimeString(ciussDateEnd, ciussDateStart, true, true));
  $('#inlibro_time').append(getExpTimeString(inlibroDateEnd, inlibroDateStart, true, true));

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