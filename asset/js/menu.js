const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}
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
var portion = [
    "Loss",
    "Maintain",
    "Gain"
  ]
var nutrition = [
    [[[344.6],[11],[27.6],[33.5]], [[459.9],[15.5],[30.3],[49.3]], [[639.7],[20.2],[47],[66.5]]],
    [[[304.6],[7.6],[28.4],[28.7]], [[491.9],[14],[36.5],[51.2]], [[607.2],[18.6],[38.5],[66.9]]],
    [[[432.5],[18.61],[44.76],[23.44]], [[540.59],[24.56],[51.83],[30.44]], [[702.54],[31.77],[67.29],[39.51]]],
    [[[418.8],[17.56],[40.87],[23.16]], [[484.39],[21.05],[45.64],[27.45]], [[699.68],[32.66],[58.54],[41.47]]],
    [[[300.9],[10.8],[35.3],[16.3]], [[465.3],[19],[42.3],[30.2]], [[629.7],[27.8],[49.2],[44.1]]],
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