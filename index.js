//SESI I ---------------------------------------------------

// perintah untuk print sesuatu di terminal 

/* 
ini komentar baris 1 
baris 2 
baris 3 
*/

// perintah untuk print sesuatu di terminal 
// console.log('Hello world !')

//print lokasi folder kita saat ini
// console.log(__dirname)

//print lokasi file kita saat ini
// console.log(__filename);

// ctrl + J (untuk menunjukan terminal)
// ctrl + L (untuk menghapus terminal)
// ctrl + / (untuk membuat atau menghilangkan komentar)

//variable
//tempat menyimpan 1 data 

//membuat variable, di isi data 'Andy"
// var nama ='Andy'
// ubah nilai pada variable 'nama' menjadi 'Puck'
// nama = 'Puck'
// console.log(nama);

// var usia 
// usia = 22
// usia = 45
// console.log(usia);

// let tidur = true //boolean : true or false 
// console.log(tidur);

//var vs let 

// tidak masalah 
// var hari = 'senin'
// var hari = 'selasa'
// console.log(hari);

// Eror
// let buah = 'apel'
// let buah = 'semangka'
// console.log(buah); 
// file eror karna mendeklarasikan var yang sama 

// let buah = 'apel'
// buah = 'semangka'
// console.log(buah); 

// var myName = 'Daniel '
// myName += 'Ricardo'
// console.log(myName);

// console.log('puck');
// var a = 6
// a = a + 5

// var b = 4

// var c = a + b
// console.log(c);


// SESI II --------------------------------------------------

// srings dan numbers
// strings --> Text/ kumpulan karakter di apit tanda kutip
// numbers --> 1. integer (bilangan bulat)
//             2. float (bilangan desimal)


// var tempat
// var _underscore
// var $dollarsign

// var nama = 'Zondo'
// var tanggal = '22'
// var single = true
// var profesi 

// typeof untuk indentifikasi jenis data
// var hasilnama = typeof (nama)
// var hasiltanggal = typeof (tanggal)
// var hasilsingle = typeof (single)
// var hasilprofesi = typeof (profesi)
// console.log(hasilnama);
// console.log(hasiltanggal);
// console.log(hasilsingle);
// console.log(hasilprofesi);

// console.log(typeof(nama));


// index javascript dimulai dri 0
// var teks = 'Halo Dunia Selamat Sore'
// console.log(teks.length); //jumlah karakter dlm string
// console.log(teks.indexOf('Dunia')); // menemukan index
// console.log(teks.substr(5,4));// mengambil index 5 sebanyak 4 karakter
// console.log(teks.slice(5,9)); //mengambil dr index 5 smpai 8
// console.log(teks.split(' ')); //split berdasarkan karakter tertentu tidak harus "spasi"

// var x = 'halo'
// var y = 'DUNIA'
// var z = 'Hai, sudah sampai pantai nih'

// // huruf besar semua
// console.log(x.toUpperCase());
// //huruf kecil semua
// console.log(y.toLowerCase());
// console.log( z.replace('ai','wz')); //hanya mengganti "ai" yg pertama ditemukan
// console.log( z.replace(/ai/g,'wz')); //menganti "ai" secara global

// var angka = 1234
// console.log(angka);
// console.log(angka.toString()); //mengubah tipe data menjadi string

// var angka = '2019'
// var teks = 'Halo Dunia'

// console.log(angka);
// var hasil = parseInt(angka) // mengubah tipe data menjadi number
// console.log(hasil); 
// console.log(angka);

// var hasilangka = parseInt(angka) // number
// var hasilteks = parseInt(teks) // NaN (not a number )

// console.log(hasilangka);
// console.log(hasilteks);

// var usia = 20
// var usiaString = '30'
// var usiaString2 = '40'
// var namaDepan = 'Brew'
// var namaBelakang = 'Master'

// console.log(namaDepan + namaBelakang);
// console.log(namaDepan + ' ' +namaBelakang);
// console.log(namaDepan + usia); // angka dengan string dipaksa jadi string 
// console.log(namaDepan + ' ' +usia);

// console.log(usia + usia);
// console.log(usia + usiaString);
// console.log(usiaString2 + usiaString);


//SESI III -------------------------------------------------

//operator (+*) dan operand (angka yang dihitung )

// var usiaAndi = 40
// var usiaBudi = 20

// // SHIFT + alt + arrow untuk copy
// console.log(usiaAndi*usiaBudi);
// console.log(usiaAndi/usiaBudi);
// console.log(usiaAndi+usiaBudi);
// console.log(usiaAndi-usiaBudi);
// console.log(usiaAndi%usiaBudi);
// console.log(usiaAndi**usiaBudi); // ** untuk pangakat

/* 
% atau Modulus
20 % 5 =20 sibagi 5, dapat 4, sisa 0
23 % 5 = 20 dibagi 5, dapat 4 sisa 3
sisa ini yang diperlihatkan oleh modulus 
biasanya diggunakan untuk menentukna suatu bilangan ganjil atau genap (dimodulus 2)
*/

//  console.log(1%2);
//  console.log(2%2);
//  console.log(3%2);
//  console.log(4%2);
//  console.log(5%2);

// var angkaPertama = 35
// var angkaKedua = 27

// // ++ menambah angkaPertama dengan 1
// angkaPertama++ // increment itu menimpa variabel
// angkaPertama++ 
// console.log(angkaPertama+1); //sedangkan ini hanya menampilkan, tidak menyimpan 

// // -- mengurangi angkaKedua dengan 1
// angkaKedua--

// console.log(angkaPertama);
// console.log(angkaKedua);

// var numbOne=9
// numbOne+1
// console.log(numbOne);

// numbOne+=5 //ini menyimpan ke var (+=, -=, *=, dll)

// console.log(numbOne);

//  console.log(Math.PI);          // 3.14 atau 22/7
//  console.log(Math.abs(-4.7));   //abs = angka absolut
//  console.log(Math.pow(8,2));    //pow = (bilangan,pangkat)
//  console.log(Math.sqrt(64));    //sqrt = (akar 2)
//  console.log(Math.cbrt(8));     //cbrt = (akar 3)
 
//Round, Ceil dan Floor
//Round = pembulatan umum matematika
//Ceil = Pembulatan ke atas
//Floor = Pembulatan ke bawah 

// console.log(Math.round(4.7));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));

//tekan alt untuk lagsung ketik semua line

//Random max dan min 

//random 0-0.9
// var hasil = Math.random()
// console.log(hasil);

// //random dari 0-9
// var random10=Math.random()*10
// console.log(random10);

// //random dari 0-11
// var random11=Math.random()*11
// console.log(random11);

//Random dadu (1-6)

//pembulatan kebawah
// var randomDadu =Math.random ()*6
//console.log(randomDadu);
// var hasilDadu= Math.floor(randomDadu)
// console.log(hasilDadu+1);

//pembulatan keatas
// var randomDadu =Math.random ()*6
//console.log(randomDadu);
// var hasilDadu= Math.ceil(randomDadu)
// console.log(hasilDadu);

//Basic date object

// var waktu= new Date()

// console.log(waktu.getFullYear());
// console.log(waktu.getMonth());      //DIMBUILAI DARI 0 (JANUARI ITU 0)
// console.log(waktu.getDate());
// console.log(waktu.getDay());        //MINGGU 0
// console.log(waktu.getHours());
// console.log(waktu.getMinutes());
// console.log(waktu.getSeconds());
// console.log(waktu.getMilliseconds());

//SESI IV--------------------------------------------------------------------------------

//Logic if dan switch 

//Comparison Operators 

//Boolean : true or false 

// console.log(4>5);

// var x = 5
// var y = '5'
// var z = 6

// x^=y
// console.log(x);


// console.log(x==y);
// console.log(x===y); //value data type harus sama, tipe data diperhitungkan 
// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);


// console.log(x===y && y<z);
// console.log(x===y || y<z);
// console.log(!(x===y && y<z));

// var benar = 4<5//true
// var salah = 4>5//false 

// //And || &&
// //keduanya true maka hasilnya true
// console.log(benar&&benar);
// console.log(benar&&salah);
// console.log(salah&&salah);

// //OR, ||
// //Salah satunya true,maka hasilnya true 
// console.log(benar||benar);
// console.log(benar||salah);
// console.log(salah||salah);

// //! negasi kebalikan hasil
// console.log(!(benar)); //salah
// console.log(!(salah)); //benar

// console.log(benar&&benar&&salah&&benar);
// console.log(benar&&benar||salah&&benar);
// console.log(benar&&salah||salah&&benar);

//jika yang ada di dalam kurung true maka yang didalam kurung kurawal akan dijalankan
// if (hujan){
//     pakai hujan
// }

// var umur=21
// var umur2=15
// var ktp=true
// var sim=true

// if(umur>18){
//     console.log('Sudah memiliki KTP');
    
// }

// if(umur2>18){
//     console.log('Sudah memiliki KTP');
    
// } // tidak dijalankan

// if(umur>18&&ktp&&sim){
//     console.log('Boleh berkendara');
    
// }
// if(umur2>18&&ktp&&sim){ //tidak dijalankan
//     console.log('Boleh berkendara'); 
    
// } else {
//     console.log('Belum Boleh Berkendara');
    
// }

// if (umur>18||ktp||sim){
//     console.log('Boleh berkendara');
    
// }

// var umur = 15
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else {
//     console.log('Lebih dar 24');
// }
// var umur = 18
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else {
//     console.log('Lebih dar 24');
// }
// var umur = 23
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else {
//     console.log('Lebih dar 24');
// }
// var umur = 27
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else {
//     console.log('Lebih dar 24');
// }
// var umur = 'hai'
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else if(isNaN(umur))
//     console.log('Bukan angka');
// else {
//     console.log('Lebih dar 24');
// }

// var single=true

// if (single){
//     console.log('Masih sendiri');
   
// } else{console.log('Tidak lagi sendiri');
// }

//SESI V--------------------------------------------------------------------------------


// console.log('Don\'t give up'); // \ mengangaap karater petik setelahnya tetap termasuk string



// var umur = 23

// //true atau false suatu kondisi (yang dalam kurung)
// if(umur<18){
//     console.log('kurang dr 18');
// } else if (umur==18){
//     console.log('pas 18');
// } else if (umur>18&&umur<25){
//     console.log('diantara 18-24');
// } else {
//     console.log('Lebih dar 24');
// }


// var hujan=true

// if (hujan){
//     console.log('Pakai Payung');
    
// } else { // run kalo opsi diatas salah semua
//     console.log('Tidak Pakai Payung');
    
// }


// var umur=17
// switch (true){
//     case umur<18:
//         console.log('Kurang dari 18')
//         break;
//     case umur==18:
//         console.log('Pas 18 tahun')
//         break;
//     case umur>18&&umur<25:
//         console.log('Diantara 18-24')
//         break;
//     default :
//     console.log('Lebih dari 25');
    
// }

//kalo switch case mengecek suatu nilai dengan casenya

// var job=prompt('Apakah pekerjaan anda?')

// switch(job.toLowerCase()){
//     case 'guru':
//         alert('Kerjaannya ngajar.');
//         break; //break, agar casenya stop!
//     case 'supir':
//         alert('Kerjaannya nyetir.');
//         break;
//     case 'polisi':
//         alert('Kerjaannya nilang.');
//         break;
//     default:
//         alert('Ada aja kerjaannya.');
    
// }
// document.write()

// var job='dosen'
// switch (true){
//     case job =='guru'|| job =='dosen':
//         console.log('mengajar')
//         break;
//     case job =='driver'|| job =='racer':
//         console.log('menyetir')
//         break;
//     default :
//     console.log('Tidak Diketahui');
    
// }


