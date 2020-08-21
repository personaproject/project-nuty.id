$(document).ready(function() {
	$('#pagepiling').pagepiling({
        navigation: null,
        afterLoad: function(anchorLink, index){
          //using index
          let dom = document.getElementById("navbar")
          if(index >= 2){
            dom.style.display = "none";
          }else{
            dom.style.display = "block";
          }
        }
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

//Product display
var secondarySlider = new Splide( '#secondary-slider', {
  type : "loop",
  height      : "80vh",
  gap         : 10,
  perPage     :4,
  isNavigation: true,
  rewind     : true,
cover      : true,
pagination : false,
focus      : 'center',
  breakpoints : {
    '600': {
      fixedWidth: 66,
      height    : 40,
    }
  },
  direction : 'ttb',
} ).mount();
var primarySlider = new Splide( '#primary-slider', {
  type       : 'fade',
  heightRatio: .75,
  pagination : false,
  arrows     : false,
  cover      : true,
} ); // do not call mount() here.

primarySlider.sync( secondarySlider ).mount();
var jud = [
  "Ballinese Grilled Chicken with Mixed Vegetables", 
  "Ballinese Grilled Chicken with Broccoli", 
  "Beef Black Pepper", 
  "Beef Teriyaki", 
  "Chicken Teriyaki Mixed Vegetables", 
  "Greentea Banana Smoothies",
  "Oatmeal Banana Smoothies",
  "Oatmeal Banana Pancake",
  "Roasted Chicken with Capcay",
  "Satai Taichan",
  "Sesame Tempe Mixed Vegetables",
  "Sesame Tempe with Capcay",
  "Shrimp with Oyster Sauce Mixed Vegetables",
  "Roasted Chicken with Broccoli"
]
var price =[
  ["25K", "30K", "35K"],
  ["22K", "30K", "35K"],
  ["-","-","-"],
  ["-","-","-"],
  ["24K", "27K", "32K"],
  ["-","15K","-"],
  ["-","14K","-"],
  ["-", "15K", "-"],
  ["28K","30K","35K"],
  ["-","-","-"],
  ["16K","18K","20K"],
  ["20K","20K","25K"],
  ["38K","40K","45K"],
  ["28K","30K","35K"]
]
secondarySlider.on("move", e=>{
  let html = document.getElementById("judul")
  let loss = document.getElementById("loss")
  let maintain = document.getElementById("maintain")
  let gain = document.getElementById("gain")
  html.innerHTML = jud[e];
  loss.innerHTML = price[e][0]
  maintain.innerHTML = price[e][1]
  gain.innerHTML = price[e][2]
})
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
function autoplay(){
   M.Carousel.getInstance(document.querySelector(".carousel.carousel-slider")).next();
  setTimeout(autoplay, 4500);
}