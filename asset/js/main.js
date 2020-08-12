$(document).ready(function() {
	$('#pagepiling').pagepiling({
        navigation: null,
    });
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
    autoplay();
function autoplay(){
    let carousel = document.querySelector('.carousel.carousel-slider');
    M.Carousel.getInstance(carousel).next();
    setTimeout(autoplay, 4500);
}
  });
  function noMove(){
    $.fn.pagepiling.setMouseWheelScrolling(false);
    $.fn.pagepiling.setKeyboardScrolling(false);
  }
  function allowMove(){
    $.fn.pagepiling.setMouseWheelScrolling(true);
    $.fn.pagepiling.setKeyboardScrolling(true);
  }
  function movePage(n){
    $.fn.pagepiling.moveTo(n);
  }
/*
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
*/
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