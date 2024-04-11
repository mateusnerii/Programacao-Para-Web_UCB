function Transpor(array) {
    var QtLinhas = array.length;
    var QtColunas = array[0].length;
    var MatrizTransposta = [];
    
    for (var i = 0; i < QtColunas; i++) {
        MatrizTransposta[i] = [];
    }
    
    for (var i = 0; i < QtLinhas; i++) {
        for (var j = 0; j < QtColunas; j++) {
            MatrizTransposta[j][i] = array[i][j];
        }
    }
    return MatrizTransposta;
}

var array1 = [
    [1,3,5],
    [2,4,6] 
];

var array2 = [
    [1,2],
    [3,4],
    [5,6]    
];

var MatrizTransposta1 = Transpor(array1);
var MatrizTransposta2 = Transpor(array2);


console.log("Matriz Tranposta");
console.log("Array1");
console.log(MatrizTransposta1);
console.log(" ");
console.log("Array2");
console.log(MatrizTransposta2);
