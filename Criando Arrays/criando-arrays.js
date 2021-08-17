var emails = [];
emails[0] = ('brunnoaraujoc@gmail.com');
emails[1] = ('lubrusse9@gmail.com');
emails[2] = ('araujoluciana362@gmail.com');

emails.pop();
console.log(emails);

var nomes = ['bruno', 'luciana','sergio','mariana'];

    for (var i = 0; i < nomes.length; i++){
        console.log('nomes[', i, ']= ' ,nomes[i]);
    }

    console.log(nomes.join(' - '))