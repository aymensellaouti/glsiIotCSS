
setTimeout(function() {
    console.log('cc');
}, 3000);

console.log('bonjour');

i = 5;
ind = setInterval(
    
    function () {
        if (i == 0) {
            console.log('BOOOOM');
            clearInterval(ind);
        }
        console.log(i--);   
    },
    1000
);