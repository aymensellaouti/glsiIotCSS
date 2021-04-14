chaine = 'hello GLSI2 et IOT2';
pos = 0;
do {
    pos = chaine.indexOf('I', pos) + 1;
    if(pos != 0) {
        console.log(pos);
    }
} while(pos != 0);