function verificarNumeroPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(verificarNumeroPrimo(0));
console.log(verificarNumeroPrimo(1));
console.log(verificarNumeroPrimo(2));
console.log(verificarNumeroPrimo(3)); 
console.log(verificarNumeroPrimo(7)); 
console.log(verificarNumeroPrimo(83)); 
console.log(verificarNumeroPrimo(100));
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907)); 
