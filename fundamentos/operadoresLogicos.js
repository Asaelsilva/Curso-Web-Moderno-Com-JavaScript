function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    compraTV = trabalho1 && trabalho2
    //const compraGame = !!(trabalho1 ^ trabalho2) // bitwise xor
    const compraGame = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete //Operador Unário

    return{compraSorvete, compraTV, compraGame, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))