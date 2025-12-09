var inicio = document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.getElementById('ipasso')
var res = document.querySelector('div#res')

function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if( i < f){
            // Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            // Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    }
            







    /*
    if(i < f){
        // Contagem crescente
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        // Contagem regressiva
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } 
    res.innerHTML += `\u{1F3C1}`
    

}
    */