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

var collap = document.querySelectorAll('.collapsible');
var collapIns = M.Collapsible.init(collap, {});
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

//script product
function openFood(){
    let idsOpen= document.getElementById("food");
    let idsClose = document.getElementById("beverage");
    idsOpen.style.width = "90%";
    idsOpen.style.display = "inline"
    idsOpen.children[0].style.writingMode = "unset"
    idsOpen.children[0].style.textOrientation = "unset"
    idsOpen.children[0].style.fontSize = "2rem"
    idsOpen.children[1].style.display = "none";
    idsOpen.children[0].classList.add("kembali");
    idsOpen.onclick = backTo;
    idsClose.onclick = openBvg;
    idsClose.style.width = "10%";
    idsClose.style.display="grid";
    idsClose.children[0].style.writingMode = "vertical-rl"
    idsClose.children[0].style.textOrientation = "upright"
    idsClose.children[0].style.fontSize = "1.6rem"
    idsClose.children[1].style.display = "block";

  }
  function openBvg(){
    let idsOpen= document.getElementById("beverage");
    let idsClose = document.getElementById("food");
    idsOpen.style.width = "90%";
    idsOpen.style.display = "inline"
    idsOpen.children[0].style.writingMode = "unset"
    idsOpen.children[0].style.textOrientation = "unset"
    idsOpen.children[0].style.fontSize = "2rem"
    idsOpen.children[1].style.display = "none";
    idsOpen.children[0].classList.add("kembali");
    idsOpen.onclick = backTo;
    idsClose.onclick = openFood;
    idsClose.style.display="grid";
    idsClose.style.width = "10%";
    idsClose.children[0].style.writingMode = "vertical-rl"
    idsClose.children[0].style.textOrientation = "upright"
    idsClose.children[0].style.fontSize = "1.6rem"
    idsClose.children[1].style.display = "block";

  }
  function backTo(){
    let idsOpen= document.getElementById("food");
    let idsClose = document.getElementById("beverage");
    idsOpen.style.width="50%"
    idsOpen.onclick = openFood;
    idsClose.onclick = openBvg;
    idsClose.style.width="50%"
    idsOpen.children[0].style.writingMode = "unset"
    idsOpen.children[0].style.textOrientation = "unset"
    idsOpen.children[1].style.display = "block";
    idsOpen.children[0].classList.remove("kembali");
    idsOpen.children[0].style.fontSize = "1.6rem"
    idsOpen.style.display = "grid"
    idsClose.children[0].style.writingMode = "unset"
    idsClose.children[0].style.textOrientation = "unset"
    idsClose.children[1].style.display = "block";
    idsClose.children[0].classList.remove("kembali");
    idsClose.style.display = "grid"
    idsClose.children[0].style.fontSize = "1.6rem"
  }
function nextCrs(){
  let crsInit = M.Carousel.getInstance(document.querySelector(".carousel.carousel-slider"));
  crsInit.next();
}
function autoplay(x){
  let crsInit = M.Carousel.getInstance(document.querySelector(".carousel.carousel-slider"));
  setTimeout(autoplay, x);
}