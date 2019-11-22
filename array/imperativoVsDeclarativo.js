const alunos = [
    {nome: 'Asael', nota: 7.9},
    {nome: 'Jonatas', nota: 9.2}
]

//Imperativo
console.log("Imperativo")
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1+= alunos[i].nota
}
console.log(total1 / alunos.length)

console.log()
//Declarativo
console.log("Declarativo")
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)







