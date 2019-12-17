var tanya = confirm('mulai ?');

while(tanya){

var makanan = prompt('Masukkan makanan atau minuman : Nasi ,Burger, Karedok, Buah, Softdrink');

switch(makanan){
    case 'nasi':
    case 'karedok':
    case 'buah':
        alert('Makanan sehat !');
    break;
    case 'burger':
    case 'softdrink':
        alert('Makanan tidak sehat');
    break;

    default:
        alert('Anda memasukkan kata yang tidak ada di menu');
    break;
}

var tanya = confirm('lagi ?');

}

alert('terima kasih sudah bermain :)')