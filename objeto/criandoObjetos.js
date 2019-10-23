// usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em js / formado atraves da função construtora
console.log(typeof Object)
console.log(typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco *(1 - desc)
    }
}

const p1 = new Produto('Bicicleta', 799.00, 0.15)
const p2 = new Produto('Acessorio', 500.00, 0.25)

console.log('Bicicleta com desconto:', p1.getPrecoComDesconto(), '/ Acessorios com desconto:', p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Asael', 5000.00, 1)
const f2 = criarFuncionario('Lais', 10000.00, 10)
console.log('O funcionario '+ f1.nome + ' teve ' + f1.faltas + ' Falta(s). ' + 'Com isso, seu salario vai ser R$ ' + f1.getSalario())
console.log('O funcionario '+ f2.nome + ' teve ' + f2.faltas + ' Falta(s). ' + 'Com isso, seu salario vai ser R$ ' + f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Sara'
filha.idade = 5
console.log(filha)

// Uma Função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"tec": "Sou um JSON"}')
console.log(fromJSON)

const fromJSONn = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSONn.info)
