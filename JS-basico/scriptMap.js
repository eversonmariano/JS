//Map
/*
let num = [1,2,3,4,5,6,7,8,9,10];

let dobrar = function(item){
    return item * 2;
}

let numDobrados = num.map(dobrar);

console.log(numDobrados);
*/

/*

let fahrenheit = [0,32,45,46,91,97,100,110,115,121];

let celcius = fahrenheit.map(function(item){
    return Math.round((item - 32)*5/9);
});

console.log(celcius);
*/

let convidados = [
    {nome:'japa', vip: true, idade: 39},
    {nome:'vini', vip: true, idade: 23},
    {nome:'ze', vip: true, idade: 21},
    {nome:'kenim', vip: false, idade: 23},
    {nome:'galego', vip: false, idade: 14}
]

/*
let convidadosNormalizado = convidados.map(function(item){
    return Object.assign(item, {nome: item.nome.toUpperCase()});
});
console.log(convidadosNormalizado);
*/

let dobroIdade = convidados.map(function(item){
    return Object.assign(item, {idade: item.idade*2})
});


console.log(dobroIdade);