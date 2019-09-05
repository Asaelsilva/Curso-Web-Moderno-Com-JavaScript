const produto1 = {}

produto1.nome = 'Celular A5'
produto1.preco = 1700.00
produto1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(produto1)

const produto2 = {
    nome: 'Sapato',
    preco: 150.99,
    obj:{
         blabla: 1,
         obj: {
            blabla: 2
        }
    }
}

console.log(produto2)