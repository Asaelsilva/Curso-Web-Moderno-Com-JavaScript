function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Geladeira', 1999.99))
console.log(criarProduto('Fogão', 587.98))
