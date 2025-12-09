let num = [2, 5, 8, 3, 5]
num.push(1)
num.sort()
console.log(num)
console.log(`O vector tem ${num.length} elementos.`)
console.log(`O primeiro valor do vector é ${num[0]}.`)

let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor 3 não foi encontrado!`)
}else{
    console.log(`O valor 3 está na posição ${pos}`)
}
