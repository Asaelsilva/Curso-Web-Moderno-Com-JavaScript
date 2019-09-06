function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Erro nas informaçoes'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {nome: 'Asael'}
imprimirNomeGritado(obj)


