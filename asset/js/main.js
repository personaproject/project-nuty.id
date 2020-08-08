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
    var initmodal = M.Modal.init(modal, {});
  });
function arise(){
    d = document.querySelectorAll(".dalam");
    e = document.querySelectorAll(".bg-change");
    d.forEach(element => {
        element.style.display = "block";
        element.style.transition = "0.5 ease in"
    });
    e.forEach(element => {
        element.style.backgroundColor = "transparent";
        element.style.transition = "0.5 ease in"
    });
}
function disappear(){
    d = document.querySelectorAll(".dalam");
    e = document.querySelectorAll(".bg-change");
    d.forEach(element => {
        element.style.display = "none";
        element.style.transition = "0.5 ease out"
    });
    e.forEach(element => {
        element.style.backgroundColor = "rgba(0, 0, 0, .6)";
        element.style.transition = "0.5 ease out"
    });
}
