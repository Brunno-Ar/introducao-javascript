for (var i = 0; i < 5 ; i++) {
    console.log('i', i);
}

var x = 'Bruno';

for (var y = 0, tamanho =x.length; y <= tamanho; y++) {
    console.log('y', y);

}

var z = 5
for (; z < 9; z++) {
    console.log('z', z);
}

var xy = 0;
for (;xy < 4;){
    console.log('xy', xy);
    xy++
}

var l = 0
for(;;){
    console.log('->', l++);

    if (l == 1000){
        break;
    }
}