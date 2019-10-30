// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)


String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Asael João da silva')
console.log('Asael João da Silva'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6]. first())
console.log(['a', 'b', 'c', 'd']. first())


//Nunca substituir comportamentos que já existe 
String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Asael João da Silva'.reverse())
