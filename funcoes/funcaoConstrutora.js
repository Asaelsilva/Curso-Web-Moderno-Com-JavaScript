function carro (velocidadeMaxima = 200, delta = 5) {
    // atribto privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
    return getVelocidadeAtual
    }

    const uno = new carro
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())

    

}