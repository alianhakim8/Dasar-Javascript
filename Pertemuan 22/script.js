// tanya user
tanya = confirm('mulai ?');

// jika true masuk ke program
while(tanya){

var tebak = function(jawaban){
    switch(jawaban){
        case 'macan':
        case 'harimau':
        case 'singa':
            alert('Ya jawaban kamu benar dude !');
        break;
        case '':
            alert('Kosong ya ?');
        break;
        default :
            alert('Jawaban kamu salah dude ! baca lagi soalnya yak !');
        break;
        }
}

soal = prompt('Warna kuning , bertaring , buas apakah itu ?');

tebak(soal);

var tanya = confirm('Lagi ?'); 
}

var end = alert('Terima Kasih Sudah Bermain');
