const quaseArray = { 0:'Rafael', 1: 'Ana', 2:'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) }, 
    enumerable: false
})

console.log(quaseArray[1])

const meuArray = ['Jonatas', 'Asael', 'Adna', 'Acsa', 'Natanael', 'Sara']
console.log( quaseArray.toString(), meuArray)















