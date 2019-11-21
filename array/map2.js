const carrinho = [
    '{"Nome": "Borracha", "preco": "3.45"}',
    '{"Nome": "Caderno", "preco": "13,90"}',
    '{"Nome": "Kit de lapis", "preco": "41,22"}',
    '{"Nome": "Caneta", "preco": "7.50"}'
]

//Retornar um array somente com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)



