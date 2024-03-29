/*
General JavaScript for pages.
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
  $('.user_about_p3').append(about.p3);
  //Projects
  $('.personal_').append(personalPro.name);
  $('.personal_name').append(personalPro.name);
  $('.personal_type').append(personalPro.type);
  $('a.personal_link').attr("href",relativeViewsFolder + personalPro.url);

  $('.drawPro_').append(drawPro.name);
  $('.drawPro_name').append(drawPro.name);
  $('.drawPro_type').append(drawPro.type);
  $('a.drawPro_link').attr("href",relativeViewsFolder + drawPro.url);

  $('.photoPro_').append(photoPro.name);
  $('.photoPro_name').append(photoPro.name);
  $('.photoPro_type').append(photoPro.type);
  $('a.photoPro_link').attr("href",relativeViewsFolder + photoPro.url);

  $('.academicPro_').append(academicPro.name);
  $('.academicPro_name').append(academicPro.name);
  $('.academicPro_type').append(academicPro.type);
  $('a.academicPro_link').attr("href",relativeViewsFolder + academicPro.url);

  $('a.workExp_link').attr("href",relativeViewsFolder + workExp.url);

  //Education
  $('.ets_').prepend(ets.name);
  $('.ets_').append(ets.location);
  $('.ets_info').prepend(ets.program);
  $('.ets_info').append(getExpTimeString(ets.endDuration, ets.startDuration, false, false, true));
  $('.maisonneuve_').prepend(maisonneuve.name);
  $('.maisonneuve_').append(maisonneuve.location);
  $('.maisonneuve_info').prepend(maisonneuve.program);
  $('.maisonneuve_info').append(getExpTimeString(maisonneuve.endDuration, maisonneuve.startDuration, false, false, true));

  //Append links
  $('a.wimw_link').attr("href",wimw.url);
  $('a.csjv_link').attr("href",csjv.url);
  $('a.ccfv_link').attr("href",ccfv.url);
  $('a.csszg_link').attr("href",csszg.url);
  $('a.ttt_link').attr("href",ttt.url);

  //Working experience time
  $('#ciuss_time').append(getExpTimeString(ciussDateEnd, ciussDateStart));
  $('#inlibro_time').append(getExpTimeString(inlibroDateEnd, inlibroDateStart));
  $('#nbc_time').append(getExpTimeString(nbcDateEnd, nbcDateStart));

  //Footer portfolio time period
  $('#portfolioTimePeriod').append(getExpTimeString(portfolioEndYear, portfolioStartYear, false, false, false));

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
