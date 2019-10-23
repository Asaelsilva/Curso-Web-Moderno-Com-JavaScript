// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['Marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    Valor: 89000,
    proprietario:{
        nome:'Asael',
        idade: 28,
        endereco:{
            logradouro: 'Rua Portugal',
            numero: 1234
        }
    },
    condutores: [{
        nome: 'Lais',
        idade: 20
    }, {
        nome: 'Jonatas',
        idade: 25
    }],
    calcularValorSeguro: function () {
        //--------------------------
    }

}


carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereço']['logradouro'] = 'Rua Martins'

//delete carro.condutores
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)