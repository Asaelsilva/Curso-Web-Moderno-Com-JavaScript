function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId 
}

const aula1 = new Aula('Bem vindo', 1)
const aula2 = new Aula('Até breve', 2)

console.log(aula1.nome)
console.log(aula1.videoId)
console.log(aula1)

console.log()

console.log(aula2.nome)
console.log(aula2.videoId)
console.log(aula2)

console.log()

console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

console.log()
const aula3 = novo (Aula, 'Bem vindo', 1)
const aula4 = novo (Aula, 'Até breve', 2)
console.log(aula3, aula4)
console.log(aula3.nome)
console.log(aula3.videoId)
console.log(aula3.telefone)
