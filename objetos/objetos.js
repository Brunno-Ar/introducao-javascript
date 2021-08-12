var uno = { cor:'preto', modelo: 'Uno', fabricante: 'Fiat' }

//console.log('Uno', uno);

console.log(uno.cor);
uno.cor = 'branco';
console.log(uno.cor);

uno.peso = '1200Kg';

console.log(uno.peso);

uno.ligar = function(){console.log('ligando o Carro!')};

//console.log('Uno', uno);


var joao = { 
    nome: 'Joao',
    idade: 22,
    endereco: { 
       logradouro: 'Av. brasil',
        numero: 10,
        cidade: 'Rio de Janeiro',
        estado: 'Rj'},

        igualA: function(obj){
            return this.idade === obj.idade}
};

console.log(joao);

for (var prop in joao){

};

var maria = {
    nome: 'maria',
    idade: 22,
}

console.log('idade de joao é igual a da maria:', joao.igualA(maria));