var idade=25;
typeof idade;

var preco=14.99;
typeof preco;

var y=10;

var y2 = y.toString(2);

console.log(y2, typeof y2);

var yHexa = y.toString(16);

console.log(yHexa, typeof yHexa);

var fixed = preco.toFixed();

console.log(fixed, typeof fixed);


var i = 10 / 0;

console.log(i);

var z = 10 / 'Bruno';

console.log(isNaN(z));
