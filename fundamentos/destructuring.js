// Tira elementos de uma estrutura

const pessoa = {
    nome: ' Asael',
    idade: 30,
    endereco: {
        logradouro: 'Rua frança',
        numero: 115
    }
}
console.log(pessoa)

const {nome, idade} = pessoa

console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobreNome, bemHumorado = true} = pessoa
console.log(sobreNome, bemHumorado)

const {endereco:{logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)