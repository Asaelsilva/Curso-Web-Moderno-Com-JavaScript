// Object.preventExtensions

const produto = Object.preventExtensions ({
    nome: 'Fone', preco: 49.99, tag: 'Promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))
console.log(produto)

console.log()

produto.nome = 'Caderno'
produto.descricao = 'Caderno de 200 folhas'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = { nome: 'Asael', idade: 23}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)


// Object.freeze =  selado + valores constantes