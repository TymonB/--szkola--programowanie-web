/*const budujListe = (lista) => {
    console.log(`<li>model: ${lista["model"]} rok: ${lista["rok"]} przebieg: ${lista["przebieg"]}</li>`);
}
for (const element of samochody) {
    if(element["przebieg"] < 100000){
        element.
    }
}
*/
let liczbaWyswietlonychPoFiltrze = 0;
for (const element of samochody) {
    if(element["przebieg"] < 100000){
        document.write(`<li class='wyrozniony'>model: ${element["model"]} rok: ${element["rok"]} przebieg: ${element["przebieg"]}</li>`);  
    }
    else{
        document.write(`<li>model: ${element["model"]} rok: ${element["rok"]} przebieg: ${element["przebieg"]}</li>`);
    }
}
document.write("\n")
document.write("\n\po przefiltrowaniu:\n")
document.write("\n")
for (const element of samochody) {
    if(element["rok"] > 2016){
        document.write(`<li class='wyrozniony'>model: ${element["model"]} rok: ${element["rok"]} przebieg: ${element["przebieg"]}</li>`);  
        liczbaWyswietlonychPoFiltrze++;
    }
}
document.write(`liczba wyswietlonych (po filtrze) ${liczbaWyswietlonychPoFiltrze}`);
/*
const przefiltrowane = samochody.map(model => model > 2016)
*/
let podsumowanie = document.getElementById('podsumowanie');
//podsumowanie.innerHTML = "a"