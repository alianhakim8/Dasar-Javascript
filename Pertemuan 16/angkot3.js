// var noAngkot = 1;
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;

// for ( noAngkot ;noAngkot <= jmlAngkot ; noAngkot++ ){
// 	if ( noAngkot <= angkotBeroperasi ){
// 	console.log('Angkot No ' + noAngkot + ' beroperasi dengan baik.')	
// 	}else{
// 	console.log('Angkot No ' + noAngkot + ' sedang tidak beroperasi.')
// 	}
	
// }


var angka = prompt('Masukkan Angka');

if ( angka % 2 === 0){
	alert(angka + ' Adalah bilangan genap')
}else if ( angka %2 === 1){
	alert(angka + ' Adalah bilangan ganjil');
}else{
	alert('Yang anda masukkan bukan angka')
}