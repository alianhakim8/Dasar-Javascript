// menangkap pilihan player

var player = prompt('Pilih : gajah, semut ,orang !');

// menangkap pilihan komputer

var komp = Math.random();

    if (komp < 0.34){
    komp = 'gajah';
    }else if (komp >= 0.34 && komp < 0.66){
    komp = 'orang';
    }else{
    komp = 'semut';
    }
console.log(komp)

// rules
// tampilkan hasil
var hasil ='';
if (player == komp){
    hasil = 'SERI';    
}else if (player == 'gajah'){
    hasil (komp == 'orang') ? 'MENANG' : 'KALAH';
}else if (player == 'orang'){
    hasil (komp == 'gajah') ? 'KALAH' : 'MENANG';
}
