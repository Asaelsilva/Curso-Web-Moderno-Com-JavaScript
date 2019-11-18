const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(piloto)
piloto.pop() // pop remove o ultimo elemento do array
console.log(piloto)
piloto.push('Verstappen') // push coloca um elemento na ultima posição do array
console.log(piloto) 

console.log()
piloto.shift() // shift remove o primeiro elemento do array
console.log(piloto)
piloto.unshift('Hamilton') // unshift coloca um elemento na primeira posição do array
console.log(piloto)


//splice pode adicionar e remover elementos

//adicionar
piloto.splice(2, 0, 'Bottas', 'Massa')
console.log(piloto)

//remover
piloto.splice(3, 1,)
console.log(piloto)

const algunsPilootos = piloto.slice(2) // novo array
console.log(algunsPilootos)

const algunsPilootos2 = piloto.slice(1 ,4)
console.log(algunsPilootos2)



