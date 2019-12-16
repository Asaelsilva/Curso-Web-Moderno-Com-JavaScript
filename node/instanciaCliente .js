const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

console.log("Contador A: ", contadorA)
console.log("Contador B: ", contadorB)
console.log("Contador C: ", contadorC)
console.log("Contador D: ", contadorD)

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


