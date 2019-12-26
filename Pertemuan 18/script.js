var s ='';

for (var i = 0 ; i < 10 ; i++){
    for(var j = 0 ; j <= i ; j++){
        s += '*';
    }
    s += '\n';
}

// console.log(s);

for ( var k = 10 ; k >= 0 ; k--){
    // setelah cetak bintang 
    for(var l = 0 ; l <= k ; l++){
        s += '*'
    }
    // cetak \n
    s += '\n';
}

console.log(s);