/*
Script to get the current year and display it in the footer
*/

var date = new Date();
var year = date.getFullYear();
document.getElementById('currentYear').innerHTML = year;