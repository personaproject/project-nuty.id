//check device
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
//variable

var carousel = document.querySelectorAll('.carousel.carousel-slider');
var modal = document.querySelectorAll(".modal");
var collap = document.querySelectorAll('.collapsible');
var par = document.getElementById("parentes").offsetHeight;
var dom = document.getElementById("navbar");
var secondarySlider;
var loss = document.querySelector("#loss h3");
var loss2 = document.querySelector("#loss2 h3");
var lossOn = document.getElementById("loss");
var lossMbl = document.getElementById("lossMbl");
var maintain = document.querySelector("#maintain h3");
var maintain2 = document.querySelector("#maintain2 h3");
var maintainOn = document.getElementById("maintain");
var maintainMbl = document.getElementById("maintainMbl")
var gain = document.querySelector("#gain h3");
var gain2 = document.querySelector("#gain2 h3");
var gainOn = document.getElementById("gain");
var gainMbl = document.getElementById("gainMbl");
var descHtml = document.getElementById("desc");
var tabs = document.querySelectorAll(".tabs");
let selects = document.querySelectorAll("select");
let modals = document.querySelectorAll(".modal");
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
    let initMod = M.Modal.init(modals, {});
    let initSelect = M.FormSelect.init(selects, {});
    M.updateTextFields();

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
      jenis = "Loss"
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
      jenis = "Loss"
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

//pesanan
var pesan = [];
      var menu = document.getElementById("menu");
      for(i=0;i<jud.length;i++){
        let adding = document.createElement("option");
        adding.text = jud[i];
        adding.value= i;
        menu.options.add(adding);
      }
      function go(){
        let menu = document.getElementById("menu").value;
        let qty = document.getElementById("banyak").value;
        let port = document.getElementById("jenis").value;
        let pesenan = [menu, port, qty];
        let isIn = false;
        if(pesan.length > 0){
          for(i = 0; i < pesan.length; i++){
            if(pesan[i][0] == menu && pesan[i][1] == port){
              isIn = true;
              break;
            }
          }
          if(isIn){
            pesan[i][2] = (parseInt(pesan[i][2])+parseInt(qty)).toString();
          }else{
            pesan.push(pesenan)
          }
}else{
  pesan.push(pesenan);
}   
  
tampil();  
      }
function del(x){
  if(x == "all"){
    pesan = [];
  }else{
    pesan.splice(x, 1);}
    tampil();
  } 
  
    function tampil(){
        let tambahan ="";
        var tot =0;
        pesan.forEach(e=>{
          let harga = price[e[0]][e[1]]
        if(harga == "-"){
            harga = "0K";
          }
        let pricing = parseInt(harga.slice(0,harga.length-1))*1000*parseInt(e[2]);
        tot += pricing;
        tambahan += `
          <tr> 
          <td>${jud[e[0]]}</td>
          <td>${portion[e[1]]}</td>
          <td>${e[2]}</td>
          <td>${pricing}</td>
          <td><div class="btn red" onclick="del(${pesan.indexOf(e)})"><i class="material-icons">clear</i></div></td>
          </tr>
          `;
        })
        let htm = document.querySelector("#pesanan tbody");
        htm.innerHTML = tambahan;
        
        document.getElementById("total").innerHTML = `Total  ${tot}`
      }
      function pesanGo(){
        let m = M.Modal.getInstance(document.getElementById("pesan-popup"));
        let name = document.getElementById("name").value;
        let addr = document.getElementById("addr").value;
        console.log(pesan.length, m)
        if (pesan.length == 0){
          M.toast({html: 'Anda belum memesan!', classes : "red"})
        }else if(name == "" || addr == ""){
          M.toast({html: 'Data pesanan belum lengkap!', classes : "red"})
        }
        else{
        let date = new Date();
        
        let wrote = {
          pesanan : pesan,
          nama : name,
          tanggal : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
          alamat : addr
        }
        let mySec = cipher("nuty");
        let ah = mySec(JSON.stringify(wrote))
        del("all");
        m.close();
        open(`https://api.whatsapp.com/send?phone=6289513218842&text=Hi%0AIni%20adalah%20pesanan%20saya%0Ahttps://personaproject.github.io/project-nuty.id/pesanan.html?id=${ah}&source=&data=&app_absent=`)
      }}