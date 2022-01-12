//Filter
/*
let numeros = [3, 2, 8, 10, 15, 19, 25,50];


let novoArray = numeros.filter(function(item){
    return item > 10;
    
});

console.log(novoArray);
*/
/*
let nomes = ["galego", "japa", "ze", "kenim","vini", "penetra"];



let convidados = nomes.filter((item) => item != "penetra");


console.log(convidados);
*/

/*

let num = [1,2,3,4,5,6,7,8,9,10];

let par = function(item){
    return !(item % 2);
}
let impar = function(item){
    return (item % 2);
}

let numPares = num.filter(par);
let numImpares = num.filter(impar);

console.log(numPares);
console.log(numImpares);
*/
/*
let filmes = [
    {titulo:'homem aranha', duraçao: 120, nota: 6.5},
    {titulo:'vingadores', duraçao: 220, nota: 9.7},
    {titulo:'et', duraçao: 90, nota: 5.0},
    {titulo:'pantera negra', duraçao: 110, nota: 10.0}
]

let bons = function(item){
    return item.nota >= 7.0;
} 
let ruins = function(item){
    return item.nota < 7.0;
}

let filmesBons = filmes.filter(bons);

let filmesRuins = filmes.filter(ruins);

console.log(filmesBons);
console.log(filmesRuins);
*/

let convidados = [
    {nome:'japa', vip: true, idade: 39},
    {nome:'vini', vip: true, idade: 23},
    {nome:'ze', vip: true, idade: 21},
    {nome:'fulera', vip: false, idade: 25},
    {nome:'galego', vip: false, idade: 14}
]

let listaVip = function(item){
    return item.vip == true;
}

let convidadosVips = convidados.filter(listaVip);

console.log(convidadosVips);