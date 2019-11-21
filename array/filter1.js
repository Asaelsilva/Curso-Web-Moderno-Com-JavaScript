const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

//console.log(produtos)
console.log()
// console.log(produtos.filter(function(p){
    
//     return false
//     //return p.preco > 2500
// }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log("Produtoas caros")
console.log(produtos.filter(caro).filter(fragil))

console.log()
const barato = produtob => produtob.preco < 500
console.log("Produtos varatos")
console.log(produtos.filter(barato))