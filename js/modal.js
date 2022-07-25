/*
This file enable modal for images.
When clicking an image, a modal of the image is showing.
*/

$( document ).ready(function(){
    //Clicking on an image
    $('.collection__img').on('click', function(){
        $('#myModal').css("display","block");
        //Getting the src of the image clicked
        $('#modal_img').attr("src",this.src);
    });

    //Clicking on the close button
    $('.close').on('click', function(){
        $('#myModal').css("display","none");
    })
});