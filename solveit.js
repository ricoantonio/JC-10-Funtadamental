// //solveit 1
// var x=4,y=3,z=2
// // console.log('x = ' +x);
// // console.log('y = ' +y);
// // console.log('z = ' +z);

// var w=(x+y*z)/(x*y)
// hasil= Math.pow(w,z)
// hasilBulatan=Math.round(hasil)
// console.log('w = '+hasilBulatan);

// //soal 2

// var a = prompt('Silahkan masukan angka berapapun:')
    
// hasil = Math.pow(a,2)
// alert ('Kuadrat dari ' + a + ' = ' + hasil)

// var a = prompt('Silahkan masukan angka berapapun:')
    
// hasil = Math.pow(a,2)

// alert ('Kuadrat dari ' + a + ' = ' + hasil)

// //solveit 3
// console.log(Math.cbrt(8))

// //solveit 4

// var jumlahHari = 485

// var tahun=jumlahHari/360
// // console.log(Math.floor(tahun));
// var sisaTahun=jumlahHari%360

// var bulan=sisaTahun/30
// // console.log(Math.floor(bulan));
// var sisaBulan=sisaTahun%30

// var minggu = sisaBulan/7
// var sisaMinggu=sisaBulan%7 

// //ctrl+D untuk mengubah data banyak
// console.log(Math.floor(tahun)+' tahun '+
//     Math.floor(bulan)+' bulan '+ Math.floor(minggu)+' minggu '+sisaMinggu+' hari');

// console.log(" ");

// //\n untuk next line 
// console.log(Math.floor(tahun)+' tahun\n'+
//     Math.floor(bulan)+' bulan\n'+ Math.floor(minggu)+' minggu\n'+sisaMinggu+' hari\n');

// //Solveit 5
// var umur=49/7
// var andi=2*umur
// var budi=5*umur
// var jumlah=49

// var umurAndi2=andi+2
// var umurBudi2=budi+2
// // console.log(andi);
// // console.log(budi);

// console.log('Umur andi dan budi setelah 2 tahun adalah '+ umurAndi2 +' dan '+ umurBudi2);

// //solveit6

// var a=new Date()
// var b=new Date()
// var c=new Date()
// a1=a.getDate()+1
// b1=b.getMonth()+1
// // console.log(a1);
// a2=a.getDate()-1
// // console.log(a2);


// console.log('Hari ini tanggal '+a.getDate()+' - '+b1+' - '+(c.getFullYear()));
// console.log('Besok tanggal '+a1+' - '+b1+' - '+(c.getFullYear()));
// console.log('Kemarin tanggal '+a2+' - '+b1+' - '+(c.getFullYear()));

// b.setDate(a.getDate()+1)
// c.setDate(a.getDate()-1)
// console.log(
//     'Hari ini: ' +a.getDate()+'-'+(a.getMonth()+1)+'-'+a.getFullYear()+'\n'
//     +'Besok : ' +b.getDate()+'-'+(b.getMonth()+1)+'-'+b.getFullYear()+'\n' 
//     +'Kemarin : ' +c.getDate()+'-'+(c.getMonth()+1)+'-'+c.getFullYear()
// );

// //solveit 7
// var kalimat = 'good morning'
// jumlahKata = kalimat.split('o').length
// console.log(jumlahKata-1);

// //solveit 8
// var a=60
// var b=40
// var jarak=120
// //60x+40x=120
// //x=120/100
// var x=jarak/100
// // console.log(x);
// var jam = 9.
// var waktuTabrakan= jam +x

// var waktu = jarak / (a+b)
// var jam = Math.floor(waktu)
// var menit = (waktu*60)%60
// var tabrakan = 9+jam+':'+menit 

// console.log('A dan B akan betabrakan pada jam ' + tabrakan+' WIB');

// //solveit 9
// var x = Math.random()*100 
//     document.write(Math.ceil(x)) 

// ----------------------------------------------------------------------------------------------------------------

// // solveit 17

// var angka=5
// var bintang=''
// var y
// var x

// for ( y = angka; y >=0; y--) {
//     for (x=1 ; x<=y ; x++) {
//         bintang +=' * '
    
// } bintang +='\n'
// }
// console.log(bintang);

// // solveit 18

// var x
// var y 
// var angka=5
// var bintang=''

// for (y=angka ; y>=2; y--){
//     for (x=1 ; x<=y; x++){
//     bintang +=' * '
//     } bintang+='\n'
   
// } bintang+=' *\n'
// for (var u=2;u<=angka;u++){
// for (var k=1 ; k<=u ; k++){
//     bintang +=' * '
// } bintang+='\n'
// }
// console.log(bintang);

// // solveit 19  blm selesai

var angka=10
var k
var i
var j
var m
var z
var bintang=''

// for (var i=0;i<angka;i++){
//     for (var j =0; j<(angka-i-1);j++){
//     bintang +='. '
//     }

//     for (var k=1;k<=2*i+1;k++){
//     bintang +='* '
//     }

//     bintang+='\n'
// }
// console.log(bintang);

// for (i=0;i<angka;i++){
//     for (var j =0; j<(angka-i-1);j++){
//             bintang +='  '
//     }
        
//     for (var k=1;k<=2*i+1;k++){
//             bintang +='* '
//     }bintang +='\n'
// }
// for (z=1;z<=angka;z++){
//     for (var l=2;l<=z;l++){
//         bintang +='  '
//     }
    
//     for (var m=angka*2-1;m>=2*z-1;m--){
//         bintang +='* '
//     } 
    
    
    
//     bintang +='\n'
//     // for (var )
// }
// console.log(bintang);





// for (i=0;i<angka;i++){
//     for (var j =0; j<(angka-i);j++){
//             bintang +='  '
//     }
        
//     for (var k=1;k<=angka;k++){
//             bintang +='* '
//     }bintang +='\n'
// }
// for (z=1;z<=angka;z++){
//     for (var l=1;l<=z;l++){
//         bintang +='  '
//     }
    
//     for (var m=angka*2-3;m>=2*z-1;m--){
//         bintang +='* '
//     } 
    
    
    
//     bintang +='\n'
//     // for (var )
// }
// console.log(bintang);







// for (var i=1 ; i<=angka ; i++){
//     for(var j=1 ; j<=i ; j++){
//         bintang += ' * '
//     }
//     bintang += '\n'
// }


for (var i=1;i<=angka;i++){
    for (var j=i;j<=angka;j++){
        bintang +='  '
    }
    for (var k=1;k<=i;k++){
        bintang +=' *'
    }
    bintang +='\n'
}
console.log(bintang);
