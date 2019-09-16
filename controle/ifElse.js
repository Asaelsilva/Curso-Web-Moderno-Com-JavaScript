const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('aprovado!')
    } else ; { // Cuidado!!! Por causa do ; depois do else, o bloco else sempre sera executado, independente don valor.
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!! erro, js Deixou passar