let valores = [8, 1, 7, 4, 2, 9]
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`Á posição ${pos} tem o valor ${valores[pos]}`)
}
    */


for(let pos in valores){
    console.log(`Á posição ${pos} tem o valor ${valores[pos]}`)
}
//Ele vai preucurar esse valor e vai retornar a posição dele
console.log(`O valor 8 está na posição ${valores.indexOf(7)}`)