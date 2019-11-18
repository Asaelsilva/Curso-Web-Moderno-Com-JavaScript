const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log("Array completo")
console.log(piloto)
console.log()

console.log("Metodo pop: remove o ultimo elemento do array ")
piloto.pop() // pop remove o ultimo elemento do array
console.log(piloto)
console.log()

console.log("Metodo push: coloca um elemento na ultima posição do array")
piloto.push('Verstappen') // push coloca um elemento na ultima posição do array
console.log(piloto) 
console.log()

console.log("Metodo shift: remove o primeiro elemento do array")
piloto.shift() // shift remove o primeiro elemento do array
console.log(piloto)
console.log()

console.log("Metodo unshift: coloca um elemento na primeira posição do array")
piloto.unshift('Hamilton') // unshift coloca um elemento na primeira posição do array
console.log(piloto)
console.log()

console.log("Metodo splice pode adicionar e remover elementos")
//splice pode adicionar e remover elementos

console.log("Adicionando")
//adicionar
piloto.splice(2, 0, 'Bottas', 'Massa')
console.log(piloto)
console.log()

console.log("Removendo")
//remover
piloto.splice(3, 1,)
console.log(piloto)
console.log()

console.log("Metodo slice: Retorna um novo array")
const algunsPilootos = piloto.slice(2) // novo array
console.log(algunsPilootos)

const algunsPilootos2 = piloto.slice(1 ,4)
console.log(algunsPilootos2)



