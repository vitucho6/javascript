function fatorial(n){
    let fav = 1
    for(let c = n; c > 1; c--){
        fav *= c
    }
    return fav
}

console.log(fatorial(2))
