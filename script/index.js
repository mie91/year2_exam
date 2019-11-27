 /*jshint esversion: 8 */

async function fetchCharacters(id) {
    const url = 'https://anapioficeandfire.com/api/characters/' + id;
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
    console.log(charJon);
});

fetchCharacters(148).then(function(data) {
    characterArya = data;
    console.log(characterArya);
});

fetchCharacters(957).then(function(data) {
    charSansa = data;
    console.log(charSansa);
});


fetchCharacters(238).then(function(data) {
    charCersei = data;
    console.log(charCersei);
});

fetchCharacters(529).then(function(data) {
    charJaime = data;
    console.log(charJaime);
});

fetchCharacters(1052).then(function(data) {
    charTyrion = data;
    console.log(charTyrion);
});

fetchCharacters(271).then(function(data) {
    charDany = data;
    console.log(charDany);
});

fetchCharacters(1079).then(function(data) {
    charViserys = data;
    console.log(charViserys);
});

fetchCharacters(1770).then(function(data) {
    charOberyn = data;
    console.log(charOberyn);
});

fetchCharacters(364).then(function(data) {
    charEllaria = data;
    console.log(charEllaria);
});
