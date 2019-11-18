
console.log(typeof Array, typeof  new Array, typeof [])

let aprovado = new Array('Asael', 'Jonatas', 'Acsa')
console.log(aprovado)

aprovado = ['lais', 'Adna', 'Biel']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])
console.log(aprovado)

aprovado [3] = 'Luana'
aprovado.push('Lucas')
console.log(aprovado.length)

aprovado [10] = 'Rafael'
console.log(aprovado.length)
console.log(aprovado[9] === undefined)
console.log(aprovado[9] === null)

console.log(aprovado)
aprovado.sort()
console.log(aprovado)

console.log()
console.log()

delete aprovado[0]
console.log(aprovado[0])
console.log(aprovado[1])

aprovado = ['Asael', 'Jonatas', 'Acsa']
aprovado.splice(1, 1, 'Jorge', 'Mateus')
console.log(aprovado)