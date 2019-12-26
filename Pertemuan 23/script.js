// key and value pair - membuat array

var binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];
// atau 

var binatang = [];
binatang = ['kucing','kelinci','monyet','panda','koala','sapi'];

// key and value pair - mengakses elemen pada array
console.log(binatang[2]);

// method = fungsi di dalam object



var myFunc = function(){
    alert('Hello World');
}
var myArr3 = ['teks',2,false,myFunc,[4,5,6]];

console.log(myArr3[4][1]);