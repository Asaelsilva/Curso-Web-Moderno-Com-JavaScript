
//Função sem retorno
function imprimirSorma(a, b){
    console.log(a + b)
}

imprimirSorma(5, 10)
imprimirSorma(5)
imprimirSorma(15, 15, 1, 2, 3, 4)
imprimirSorma()


//Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(5,5))
console.log(soma(4))
console.log(soma())

