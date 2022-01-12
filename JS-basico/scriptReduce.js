/*Reduce*/
/*
let valores=[1.5, 2, 4, 10];

let media = valores.reduce(function(total, item, indice, array){
    total += item;

    if(indice == array.length -1){
        return total / array.length;
    }
    return total;
});
console.log(media);
*/
/*
let numeros=[1,2,3,4,5,6,7,8,9,10];

let cal = function(total, item){
    return total.concat(item * 2);
}

let dobro = numeros.reduce(cal, []);
console.log(dobro);
*/

let numeros = [10, 18, 2, 3, 15];

let seleciona = numeros.reduce(function(total, item){
    if(item > 10){
        total.push(item);
    }
    return total;
}, []);
console.log(seleciona);






















