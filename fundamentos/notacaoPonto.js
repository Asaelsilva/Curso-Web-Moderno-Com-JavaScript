console.log(Math.ceil(6,2))

const obj1 = {}
obj1.nome = 'Futebol'
//obj1['nome'] = 'Campeonato Brasileiro'
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

const obj2 = new obj('São Paulo')
const obj3 = new obj('Santos')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()



