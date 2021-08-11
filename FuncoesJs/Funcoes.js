var menorNota = Math.min(1,4,5,6,8,11,12);
console.log(menorNota);

var maiorNota = Math.max(1,4,5,6,8,11,12);
console.log(maiorNota);

var temperatura = Math.round(27.4);
console.log(temperatura)

var valorAleatorio = Math.random() * 60;
var numero = Math.round(valorAleatorio);
console.log(numero);

//function declaretion
function somar(a,b){
    return a + b;
}

//function expression
var subtrair = function(a,b){
    return a - b;
}


var incrementar = function(){
    var valor = 0;
    return function(){
        return ++valor;
    }
}();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


