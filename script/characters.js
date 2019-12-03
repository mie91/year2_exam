 /*jshint esversion: 8 */

async function fetchCharacters(id) {
    const url = "https://anapioficeandfire.com/api/characters/" + id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
let charJon;
let charArya;
let charSansa;
let charCersei;
let charJaime;
let charTyrion;
let charDany;
let charViserys;
let charOberyn;
let charEllaria;

fetchCharacters(583).then(function(data) {
    charJon = data;
    document.getElementById("jonSnow").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charJon.name + "</p>" + "</div>";
    console.log(charJon);
});

fetchCharacters(148).then(function(data) {
    charArya = data;
    document.getElementById("arya").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charArya.name + "</p>" + "</div>";
    console.log(charArya);
});

fetchCharacters(957).then(function(data) {
    charSansa = data;
    document.getElementById("sansa").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charSansa.name + "</p>" + "</div>";
    console.log(charSansa);
});


fetchCharacters(238).then(function(data) {
    charCersei = data;
    document.getElementById("cersei").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charCersei.name + "</p>" + "</div>";
    console.log(charCersei);
});

fetchCharacters(529).then(function(data) {
    charJaime = data;
    document.getElementById("jaime").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charJaime.name + "</p>" + "</div>";
    console.log(charJaime);
});

fetchCharacters(1052).then(function(data) {
    charTyrion = data;
    document.getElementById("tyrion").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charTyrion.name + "</p>" + "</div>";
    console.log(charTyrion);
});

fetchCharacters(271).then(function(data) {
    charDany = data;
    document.getElementById("dany").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charDany.name + "</p>" + "</div>";
    console.log(charDany);
});

fetchCharacters(1079).then(function(data) {
    charViserys = data;
    document.getElementById("viserys").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charViserys.name + "</p>" + "</div>";
    console.log(charViserys);
});

fetchCharacters(1770).then(function(data) {
    charOberyn = data;
    document.getElementById("oberyn").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charOberyn.name + "</p>" + "</div>";
    document.body.innerHTML = document.body.innerHTML.replace(/Nymeros/g, ' ');
    console.log(charOberyn);
});

fetchCharacters(364).then(function(data) {
    charEllaria = data;
    document.getElementById("ellaria").innerHTML +=
    "<div class= 'charinfo'>" +
    "<p>" + charEllaria.name + "</p>" + "</div>";
    console.log(charEllaria);
});
