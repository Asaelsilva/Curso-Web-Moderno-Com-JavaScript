let isAtivo = false
console.log(isAtivo)

console.log()

isAtivo = true
console.log(isAtivo)

console.log()

isAtivo = 1
console.log(!!isAtivo)// !! quer dizer verdadeiro 
console.log(!isAtivo)// ! quer dizer falso

console.log()

console.log(!true)//  quer dizer falso
console.log(!false)// quer dizer verdadeiro

console.log()

console.log(!!true)// !! quer dizer verdadeiro 
console.log(!!false)// ! quer dizer falso

console.log()

console.log('Tipos verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log()

console.log('Tipos Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log()

console.log('Pra Finalizar')
console.log(!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'Texte'))
console.log(('' || null || 0 || 123))

console.log()

let nome = ''
console.log(nome || 'Desconhecido')

console.log()

let Nome = 'Asael'
console.log(Nome || 'Desconhecido')





