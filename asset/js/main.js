$(document).ready(function() {
	$('#pagepiling').pagepiling();
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    var instances = M.Carousel.init(elems,{
        fullWidth : true,
        indicators : true,
    });
    var modal = document.querySelectorAll(".modal");
    var initmodal = M.Modal.init(modal, {
        dismissible:false,
        startingTop: "unset",
        endingTop: "unset",
    });
  });
  function noMove(){
    $.fn.pagepiling.setMouseWheelScrolling(false);
  }
  function allowMove(){
    $.fn.pagepiling.setMouseWheelScrolling(true);
  }
function arise(){
    d = document.querySelectorAll(".dalam");
    e = document.querySelectorAll(".bg-change");
    e.forEach(element => {
        element.style.animation = "slideInUp";
        element.style.animationDuration = "0.5s";
        element.style.backgroundColor = "transparent";
    });
    d.forEach(element => {
        element.style.display = "block";
        // element.style.animation = "slideOutDown";
        element.style.animationDuration = "0.5s"
        // element.style.animationDelay = "0.5s";
    });

}
function disappear(){
    d = document.querySelectorAll(".dalam");
    e = document.querySelectorAll(".bg-change");
    d.forEach(element => {
        element.style.display = "none";
        element.style.animation = "slideInUp";
        element.style.animationDuration = "0.5s";
    });
    e.forEach(element => {
        element.style.backgroundColor = "rgba(0, 0, 0, .6)";
        // element.style.animation = "slideOutUp";
        element.style.transition ="0.5s ease-in-out"
    });
}
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add("black-nav");
        }
        else {
        navbar.classList.remove("black-nav");
        }
}