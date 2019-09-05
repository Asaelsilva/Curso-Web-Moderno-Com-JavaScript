//Armazanando Uma função em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b);    
}
imprimirSoma(2, 8)


//Armazanando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(7, 13))


// Retorno implicito
const subtracao = (a , b) => a - b
console.log(subtracao(5, 2))

const imprimir = a => console.log(a)
imprimir('Legal!!!')
