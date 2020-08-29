//check device
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
//variable
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
var desc = [
  "Ayam panggang bercampur sambal matah dipadukan dengan tumis wortel dan buncis serta nasi",
  "Ayam panggang bercampur sambal matah dipadukan dengan brokoli rebus sebagai sumber serat dan nasi yang merupakan karbohidrat",
  "Daging sapi yang dimasak dengan lada hitam sebagai sumber protein dipadukan dengan sayuran rebus dan nasi",
  "Daging sapi yang dimasak dengan saus manis khas jepang dipadukan dengan sayuran segar dan kentang",
  "Ayam yang dimasak dengan saus manis khas jepang dipadukan dengan tumis wortel dan buncis serta kentang",
  "minuman kaya protein dan mengenyangkan yang dibuat dari pisang dan susu ditambah greentea untuk memperkaya rasa",
  "minuman kaya protein dan mengenyangkan yang dibuat dari pisang dan susu ditambah oatmeal untuk memperkaya rasa",
  "Kue dadar yang dibuat dari pisang, telur, oatmeal, dan susu dengan tambahan potongan pisang dan madu diatasnya",
  "Ayam ungkep yang dipanggang sebagai sumber protein dipasukan dengan capcay yang merupakan sumber serat dan nasi sebagai sumber karbohidratnya",
  "Sate ayam yang dibakar tanpa baluran bumbu dan kecap namun disajikan dengan sambal dan parutan jeruk nipis dipadukan dengan sayuran rebus dan nasi",
  "Tempe orek bercampur sayuran dan dipadukan dengan nasi",
  "Tempe orek yang dipasukan dengan capcay sebagai sumber serat dan nasi",
  "Udang yang dimasak dengan saus tiram dipadukan dengan tumis worten dan buncis serta nasi sebagi sumber karbohidratnya",
  "Ayam ungkep yang dipanggang sebagai sumber protein dipadukan dengan brokoli rebus sebagai sumber serat dan kentang yang merupakan sumber karbohidrat"
]
var price =[
  ["25K", "30K", "35K"],
  ["22K", "30K", "35K"],
  ["-","-","-"],
  ["-","-","-"],
  ["24K", "27K", "32K"],
  ["15K","15K","15K"],
  ["14K","14K","14K"],
  ["15K", "15K", "15K"],
  ["28K","30K","35K"],
  ["-","-","-"],
  ["16K","18K","20K"],
  ["20K","20K","25K"],
  ["38K","40K","45K"],
  ["28K","30K","35K"]
]
var nutrition = [
  [[[344.6],[11],[27.6],[33.5]], [[459.9],[15.5],[30.3],[49.3]], [[639.7],[20.2],[47],[66.5]]],
  [[[304.6],[7.6],[28.4],[28.7]], [[491.9],[14],[36.5],[51.2]], [[607.2],[18.6],[38.5],[66.9]]],
  [[[432.5],[18.61],[44.76],[23.44]], [[540.59],[24.56],[51.83],[30.44]], [[702.54],[31.77],[67.29],[39.51]]],
  [[[418.8],[17.56],[40.87],[23.16]], [[484.39],[21.05],[45.64],[27.45]], [[699.68],[32.66],[58.54],[41.47]]],
  [[[300.9],[10.8],[35.3],[16.3]], [[46.3],[19],[42.3],[30.2]], [[629.7],[27.8],[49.2],[44.1]]],
  [[[329.6],[7.7],[63.3],[7.25]], [[329.6],[7.7],[63.3],[7.25]], [[329.6],[7.7],[63.3],[7.25]]],
  [[[328],[8.7],[6.6],[10.1]], [[328],[8.7],[6.6],[10.1]], [[328],[8.7],[6.6],[10.1]]],
  [[[352.7],[10.1],[5.6],[14.9]], [[352.7],[10.1],[5.6],[14.9]], [[352.7],[10.1],[5.6],[14.9]]],
  [[[348.5],[13],[34],[23.6]], [[495.1],[17.3],[1.9],[31.8]], [[717.4],[25.7],[72.4],[46,8]]],
  [[[341.7],[10.1],[36.4],[27.24]], [[448.65],[13.67],[47.069],[36.25]], [[671.85],[19.73],[70.15],[54.05]]],
  [[[308.1],[14.5],[33.1],[14.9]], [[496.5],[22],[56.8],[23.2]], [[799.5],[43.6],[71.8],[42.5]]],
  [[[321.6],[11],[47],[12.6]], [[393.7],[13],[57.1],[14.3]], [[739.7],[33.1],[89.9],[30.3]]],
  [[[421.6],[15.8],[38.3],[30.9]], [[575.4],[22.7],[46.4],[45.4]], [[793.7],[29.8],[68.4],[61.3]]],
  [[[397.4],[16.8],[30.8],[30.8]], [[440],[16.8],[40.9],[31.5]], [[725.8],[33.3],[46.7],[58.7]]]
]
var carousel = document.querySelectorAll('.carousel.carousel-slider');
var modal = document.querySelectorAll(".modal");
var collap = document.querySelectorAll('.collapsible');
var par = document.getElementById("parentes").offsetHeight;
var dom = document.getElementById("navbar");
var secondarySlider;
var loss = document.querySelector("#loss h3");
var loss2 = document.querySelector("#loss2 h5");
var lossOn = document.getElementById("loss");
var lossMbl = document.getElementById("lossMbl");
var maintain = document.querySelector("#maintain h3");
var maintain2 = document.querySelector("#maintain2 h5");
var maintainOn = document.getElementById("maintain");
var maintainMbl = document.getElementById("maintainMbl")
var gain = document.querySelector("#gain h3");
var gain2 = document.querySelector("#gain2 h5");
var gainOn = document.getElementById("gain");
var gainMbl = document.getElementById("gainMbl");
var descHtml = document.getElementById("desc");
var tabs = document.querySelectorAll(".tabs");


//DOM Load
document.addEventListener('DOMContentLoaded', function() {
    //Materialize Init component
    var initCarousel = M.Carousel.init(carousel,{
        fullWidth   : true,
        indicators  : true,
    });
    autoplay(); //Carousel autoplay
    var initModal = M.Modal.init(modal, {
        dismissible :   false,
        startingTop :   "unset",
        endingTop   :   "unset",
    });
    var initCollap = M.Collapsible.init(collap, {});
    var initTabs = M.Tabs.init(tabs, {});
    //Product display Init
    if(isMobile || window.innerWidth <= 768){
      secondarySlider = new Splide( '#secondary-slider', {
        type        : "loop",
        fixedWidth  : 100,
        height      : 60 ,
        gap         : 10,
        perPage     : 4,
        isNavigation: true,
        rewind      : true,
        cover       : true,
        pagination  : false,
        focus       : 'center',
        direction   : 'ltr', 
      })
    }else{
    //Right Slider
    secondarySlider = new Splide( '#secondary-slider', {
      type        : "loop",
      height      : par ,
      gap         : 10,
      perPage     : 4,
      isNavigation: true,
      rewind      : true,
      cover       : true,
      pagination  : false,
      focus       : 'center',
      direction   : 'ttb', //top to bottom
    } )
    }
    secondarySlider.mount();
    //Left Slider response
    var primarySlider = new Splide( '#primary-slider', {
      type       : 'fade',
      heightRatio: .75,
      pagination : false,
      arrows     : false,
      cover      : true,
    } ); 
    //Sync two slider
    primarySlider.sync( secondarySlider ).mount();
    
    //Right slider eventHandler
    secondarySlider.on("move", e=>{
      let html = document.getElementById("judul")
      descHtml.innerHTML = desc[e];         //Change description
      html.innerHTML = jud[e];              //Change menu name
      loss.innerHTML = price[e][0];
      loss2.innerHTML = price[e][0];
      lossOn.onmousemove = function(){pricing(e, 0)};
      lossOn.onmouseover = function(){deskripsi(e)};         //Loss-weight price
      maintain.innerHTML = price[e][1];
      maintain2.innerHTML = price[e][1];
      maintainOn.onmousemove = function(){pricing(e, 1)};
      maintainOn.onmouseover = function(){deskripsi(e)};     //Maintain price
      gain.innerHTML = price[e][2];
      gain2.innerHTML = price[e][2];
      gainOn.onmousemove = function(){pricing(e, 2)};
      gainOn.onmouseover = function(){deskripsi(e)};         //Gain price
      //Mobile action
      lossMbl.innerHTML = getNutrition(e, 0);
      maintainMbl.innerHTML = getNutrition(e, 1);
      gainMbl.innerHTML = getNutrition(e, 2);
    })
    if(!isMobile && window.innerWidth > 768){
    var x = document.getElementById("parentes").offsetWidth.toString()
    document.querySelectorAll("button.splide__arrow").forEach(e=>{
    e.style.width = `${x}px`;}) }   
});

function autoplay(){
  M.Carousel.getInstance(document.querySelector(".carousel.carousel-slider")).next();
  setTimeout(autoplay, 5500);
}
//scroll event
window.onscroll = function(){
  if(document.documentElement.scrollTop >= document.getElementById("menu-product").offsetHeight*3/4){
    dom.style.display = "none";
  }else{
    dom.style.display = "block";
  }
}

//price event
function getNutrition(x, y){
  let calories = nutrition[x][y][0];
  let fat = nutrition[x][y][1];
  let carbohidrate = nutrition[x][y][2];
  let protein = nutrition[x][y][3];
  let jenis;
  switch(y){
    case 0:
      jenis = "Loss Weight"
      break;
    case 1:
      jenis = "Maintain"
      break;
    case 2:
      jenis = "Gain"
      break;
  }
  let plus = `
  <h5>${jenis}</h5>
  <p>Calories ${calories} kcal</p>
  <p>Total Fat  ${fat} g</p>
  <p>Carbohidrat ${carbohidrate} g</p>
  <p>Protein ${protein} g</p>
  `
  return(plus);
}
function pricing(x, y){
  let calories = nutrition[x][y][0];
  let fat = nutrition[x][y][1];
  let carbohidrate = nutrition[x][y][2];
  let protein = nutrition[x][y][3];
  let jenis;
  switch(y){
    case 0:
      jenis = "Loss Weight"
      break;
    case 1:
      jenis = "Maintain"
      break;
    case 2:
      jenis = "Gain"
      break;
  }
  let plus = `
  <h3>${jenis}</h3>
  <p>Calories ${calories} kcal</p>
  <p>Total Fat  ${fat} g</p>
  <p>Carbohidrat ${carbohidrate} g</p>
  <p>Protein ${protein} g</p>
  `
  if(descHtml.innerHTML != plus){
    descHtml.innerHTML = plus;}
}
function deskripsi(x){
  if(descHtml != desc[x]){
    descHtml.innerHTML = desc[x];}
}