var myDec = decipher("nuty");
    var id = new URLSearchParams(window.location.search);
    var data = myDec(id.get("id"));
    var json = JSON.parse(data);
    document.getElementById("nama").innerHTML = `Nama = ${json.nama}`;
    document.getElementById("alamat").innerHTML = `Alamat = ${json.alamat}`
    document.getElementById("tanggal").innerHTML = `Tanggal Pemesanan = ${json.tanggal}`
    var pesan = json.pesanan;
    var table = document.querySelector("#pesanan tbody");
    var counter = 0;
    var tambah = "";
    var tot = 0;
    pesan.forEach(b=>{
        counter++;
        let harga = price[b[0]][b[1]]
        if(harga == "-"){
            harga = "0K";
          }
        let pricing = parseInt(harga.slice(0,harga.length-1))*1000*parseInt(b[2]);
        tambah += `
        <tr> 
          <td>${counter}</td>
          <td>${jud[b[0]]}</td>
          <td>${portion[b[1]]}</td>
          <td>${b[2]}</td>
          <td>${pricing}</td>
          </tr>
        `;
        tot += pricing
    });
    tambah += `
    <tr> 
          <td></td>
          <td><b>Total</b></td>
          <td></td>
          <td></td>
          <td>${tot}</td>
    </tr>
    `
    table.innerHTML = tambah;