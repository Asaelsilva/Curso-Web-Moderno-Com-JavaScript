console.log(this === global) // False. pq this aponta pra module.exports e não para global
console.log(this === module) // False. Pq this é um objeto.

console.log(this === module.exports) // true pq this aponta para module.exports
console.log(this === exports) // true pq exports aponta pra mesma referencnia de module.exports

function logThis() {
    console.log('Dentro de uma Função...')
    console.log(this === exports)// False... Dentro de uma função o this não aponta para um exports
    console.log(this === module.exports)//False
    console.log(this === global)
}

logThis()