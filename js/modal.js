/*
This file enhance the art gallery page.
When clicking an image, a modal of the image is showing.
*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('collection__img');
var modalImg = document.getElementById("modal_img");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
