/*Filer + Map + Reduce */
/*
let numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

let pares = function(item){
    return !(item % 2);
}
let dobrados = function(item){
    return item * 2;
}
let numDobrados = numeros.filter(pares).map(dobrados);
console.log(numDobrados);
*/
/*
let carros = 
[
    {marca: 'Audi', cor: 'preto'},
    {marca: 'Audi', cor: 'branco'},
    {marca: 'Ferrari', cor: 'vermelho'},
    {marca: 'Ford', cor: 'branco'},
    {marca: 'Fiat', cor: 'preto'}
];

function groupBy(array, propriedade){
    let value = array.reduce(function(total, item){
        let key = item[propriedade];//item.marca (Audi)

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {});
    return value;
}

let agrupados = groupBy(carros, 'marca');
console.log(agrupados);
*/
/*
var produtos =
    [
        {
            id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria:
                'Vestuário'
        },
        {
            id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria:
                'Vestuário'
        },
        {
            id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria:
                'Esporte'
        },
        {
            id: 789, nome: 'Suplemento', cor: 'Vermelho', tamanho: '--', categoria:
                'Saúde'
        }
    ]

function groupBy(array, propriedade) {
    var value = array.reduce(function (total, item) {
        var key = item[propriedade];

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {});
    return value;
}

var novosProdutos = produtos.filter(function(item){
    return item.categoria == "Vestuário";
})

var agrupados = groupBy(novosProdutos, 'categoria');
console.log(agrupados);

*/

var produtos = [
    {
        id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria:
            'Vestuário'
    },
    {
        id: 125, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria:
            'Vestuário'
    },
    {
        id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria:
            'Vestuário'
    },
    {
        id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria:
            'Esporte'
    }
]
Array.prototype.groupBy = function(propriedade) 
{
    var value = this.reduce(function (total, item) {
    var key = item[propriedade];

        total[key] = (total[key] || []).concat(item);

        return total;
    },{});
    return value;
}
var produtosFiltrados = produtos.filter(function(item) {
    return item.cor == 'preto';
}).filter(function (item) {
    return item.tamanho == 'G';
}).groupBy('categoria');

console.log(produtosFiltrados);