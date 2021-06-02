//configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjuQKP7MZxAiRxa2Eqp2mOBAYAs3eFuk4",
    authDomain: "nuty-id.firebaseapp.com",
    databaseURL: "https://nuty-id.firebaseio.com",
    projectId: "nuty-id",
    storageBucket: "nuty-id.appspot.com",
    messagingSenderId: "421952314507",
    appId: "1:421952314507:web:966c5df469c604be8ac88e",
    measurementId: "G-QX41MYYKN9"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  var database = firebase.database();
  var storage = firebase.storage();
  var mainCanvas = document.getElementById("main");
  var retrievedCanvas = document.querySelector("#retrieved .row")
  //login
  function login(email, password){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(success){
      M.toast({html: 'Login Success', classes:'green'})
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        M.toast({html: 'Wrong Password or email', classes:'red'})
        // ...
      });
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    
  }

//logout
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Logout");
        M.toast({html: 'Logout Success', classes:'orange'})
      }).catch(function(error) {
        // An error happened.
      });
  }

//loading admin dashboard
function loadAdmin(){
    mainCanvas.innerHTML = "";
    retrievedCanvas.innerHTML = "";
    loadPage("dashboard", mainCanvas);

}

//login for admin
function loadLogin(){
    mainCanvas.innerHTML = "";
    retrievedCanvas.innerHTML = "";
    loadPage("login", mainCanvas)
}

//loading admin -> slider control page
function loadSlider(){
    mainCanvas.innerHTML = "";
    retrievedCanvas.innerHTML = "";
    loadPage("slider", mainCanvas);
    retrieved('slider');
}

//loading admin -> product control page
function loadProduct(){
  mainCanvas.innerHTML = "";
  retrievedCanvas.innerHTML = "";
  loadPage("product", mainCanvas);
  retrieved('product');
}

//loading admin -> pesanan control page
function loadPesanan(){
  mainCanvas.innerHTML = "";
  retrievedCanvas.innerHTML = "";
  loadPage("pesanan", mainCanvas);
  console.log("Masuk pesanan")
  retrieved('pesanan');
}

//Adding slider item to database
function addSlider(){
  let file = document.getElementById("file");
  let desc = document.getElementById("description").value;
  let name = document.getElementById("nama").value;
  let nameFile = "";
  let waktu = new Date();
  if(file.files.length == 0){
    M.toast({html: 'Gambar Tidak boleh kosong', classes:'red'})
    return;
  }
  file = file.files[0];
  nameFile = `${waktu.getTime()}-${file.name}`;
 var up = storage.ref("slider").child(nameFile).put(file);
  up.on('state_changed', snapshot => {
}, error => { console.log(error) }, () => {
    up.snapshot.ref.getDownloadURL().then(downloadURL => {
        let upl = {
          urlImg : downloadURL,
          nama   : name,
          docName: nameFile,
          description: desc
        }
        console.log(upl);
        let date = new Date();
        database.ref("slider/"+ date.getTime()).set(upl)
    });
    M.toast({html: 'Upload Berhasil', classes:'bg-contain1'})
    document.getElementById("file").value = "";
    document.getElementById("description").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("ket").value = "";
    
});
}

//Adding Product item to Database
function addProduct(){
  let file = document.getElementById("file");
  let desc = document.getElementById("description").value;
  let name = document.getElementById("nama").value;
  let data = document.querySelectorAll("input");
  let kode = document.getElementById("id").value;
  let waktu = new Date();
  if(file.files.length == 0){
    M.toast({html: 'Gambar Tidak boleh kosong', classes:'red'})
    return;
  }
  file = file.files[0];
  nameFile = `${waktu.getTime()}-${file.name}`;
 var up = storage.ref("product").child(nameFile).put(file);
  up.on('state_changed', snapshot => {
}, error => { console.log(error) }, () => {
    up.snapshot.ref.getDownloadURL().then(downloadURL => {
        let upl = {
          urlImg : downloadURL,
          id     : kode,
          nama   : name,
          docName: nameFile,
          description: desc,
          data   : {
              loss    : {
                price : data[4].value,
                cal   : data[5].value,
                fat   : data[6].value,
                carbo : data[7].value,
                pro   : data[8].value
              },
              maintain: {
                price : data[9].value,
                cal   : data[10].value,
                fat   : data[11].value,
                carbo : data[12].value,
                pro   : data[13].value
              },
              gain    : {
                price : data[14].value,
                cal   : data[15].value,
                fat   : data[16].value,
                carbo : data[17].value,
                pro   : data[18].value
              }
          }
        }
        console.log(upl);
        let date = new Date();
        database.ref("product/"+ date.getTime()).set(upl)
    });
    M.toast({html: 'Upload Berhasil', classes:'bg-contain1'})
    document.getElementById("file").value = "";
    document.getElementById("description").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("ket").value = "";
    
});
}

//Back to Dashboard
function back(){
  loadAdmin();
}

//Switch the Processing Function
function retrieved(parents){
  database.ref(parents).on("value", data => {
    let dataRetrieved = data.val();
    if(dataRetrieved.length == 1){
      retrievedCanvas.innerHTML = `
      <h5 class="center grey-text lihten-1">Tidak Ada Data</h5>
      `;
      return;
    }
    console.log(parents);
    switch (parents) {
      case "slider":
        retrievedSlider(dataRetrieved, retrievedCanvas, parents);
        break;
      case "product":
        retrievedProduct(dataRetrieved, retrievedCanvas, parents);
        break;
      case "pesanan":
        retrievedPesanan(dataRetrieved, retrievedCanvas, parents);
        break;
    }
  })
}

//Processing Slider List
function retrievedSlider(data, canvas, parents){
  let html ="";
  for(key in data){
    if (key == 0){
      continue;
    }
    html += `
    <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image">
        <img src="${data[key].urlImg}">
        <span class="card-title">${data[key].nama}</span>
        <div onclick="delDB('${parents}', '${key}', '${data[key].docName}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">clear</i></div>
      </div>
      <div class="card-content">
        <p>${data[key].description}</p>
      </div>
    </div>
  </div>
    `;
  };
  canvas.innerHTML = html;
}

//Status function
function statusFun(x){
  switch (x) {
    case 0:
      return '<div class="btn red">Baru</div>';
  }
}

//Processing the Product List
function retrievedProduct(data, canvas, parents){
  let html= "";
  for(key in data){
    if (key == 0){
      continue;
    }
    html += `
    <div class="col s12 m6 l4">
    <div class="card">
      <div class="card-image">
        <img src="${data[key].urlImg}">
        <span class="card-title">${data[key].id}</span>
        <div onclick="delDB('${parents}', '${key}', '${data[key].docName}')" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">clear</i></div>
      </div>
      <div class="card-content">
        <h5>${data[key].nama}</h5>
        <p>${data[key].description}</p>
        <p>Harga</p>
        <p>${data[key].data.loss.price} | ${data[key].data.maintain.price} | ${data[key].data.gain.price}</p>
        <p>Kalori</p>
        <p>${data[key].data.loss.cal} | ${data[key].data.maintain.cal} | ${data[key].data.gain.cal}</p>
        <p>Total Fat</p>
        <p>${data[key].data.loss.fat} | ${data[key].data.maintain.fat} | ${data[key].data.gain.fat}</p>
        <p>Karbohidrat</p>
        <p>${data[key].data.loss.carbo} | ${data[key].data.maintain.carbo} | ${data[key].data.gain.carbo}</p>
        <p>Protein</p>
        <p>${data[key].data.loss.pro} | ${data[key].data.maintain.pro} | ${data[key].data.gain.pro}</p>
      </div>
    </div>
  </div>
    `;
  };
  canvas.innerHTML = html;
}

//Processing the List of Pesanan
function retrievedPesanan(data, canvas, parents){
  let html = "<ul class='collapsible'>";
  
  for(key in data){
    if(key == 0){
      continue;
    }
    let timeOrder = new Date(data[key].timeOrder);
    console.log(timeOrder);
  html += `
  <li>
  <div class="collapsible-header">
  <div class="container w90">
  <div class="row">
    <div class="col s10">
    <div class="row">
  <div class="col s12">
    <p class="idPesan">${data[key].id}</p>
  </div>
  <div class="col s6">${timeOrder.getDate()}-${timeOrder.getMonth()+1}-${timeOrder.getFullYear()}</div>
  <div class="col s6">status: ${statusFun(data[key].status)}</div>
  </div>
    </div>
    <div class="col s2">
    <div class="btn red right"></div>
    </div>
  </div>
  </div>
  </div>
      <div class="collapsible-body">
        <p>Status</p>
      </div>
  </li>
  `;
  }
  html +="</ul>";
  canvas.innerHTML = html;
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
  
}

//Delete Database value
function delDB(parents, id, name){
  database.ref(parents + "/" + id).remove();
  storage.ref(parents).child(name).delete();
}

//Page Load XHHTP Response
function loadPage(page, location) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      var content = location;
      if (this.status == 200) {
          content.innerHTML += xhttp.responseText
      } else if (this.status == 404) {
        xhttp.open("GET", "404.html", true)
      } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
      }
    }
  };
  xhttp.open("GET", "asset/html/" + page + ".html", true);
  xhttp.send();
}

//Materialize Init
  