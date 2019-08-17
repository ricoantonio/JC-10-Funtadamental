var nama,usia,level,status
nama=prompt('Silahkan Masukan Nama Anda:')
usia=parseInt(prompt('Silahkan Masukan Usia Anda:'))
level=parseInt(prompt('Berapa Level Cinta Anda Ke JKT48 (1-7):'))

while(level<1||level>7||isNaN(level)){
    level=parseInt(prompt('Maaf Level Cinta Hanya 1-7\nSilahkan Masukan Level Cinta Anda Kembali'))

}

status=prompt('Silahkan Masukan Status Anda Sekarang \n(single, taken, atau complicated):').toLowerCase()

var x
if (usia<=18||usia>=26&&usia<=40){
    x='GRATIS'
}else if (usia>=19&&usia<=25){
    x='Rp.50.000,-'
}else {x='SELAMAT ANDA MENDAPATKAN UANG SEBESAR Rp.100.000,-'}
 
var ulang=true
status=prompt('Maaf, Silahkan Masukan Status Anda\n(single, taken, atau complicated):').toLowerCase()
while(ulang){
    if (status=='single'){
    alert('You Are Very Welcome\nBiaya yang harus Anda bayar: \n'+x)
    ulang=false
    } else if (status=='taken'){    
    alert('Kami Tidak Menanggung Resikonya\nBiaya yang harus Anda bayar: \n'+x)
    ulang=false
    } else if (status!='single'&&status!='taken'){
    status=prompt('Maaf, Silahkan Ubah Status Anda\n(single atau taken, atau complicated):').toLowerCase()
    } else if (status=='complicated'){
    status=prompt('Maaf, Silahkan Ubah Status Anda\n(single atau taken, atau complicated):').toLowerCase()
}}


// while(status!='single'&&status!='taken'){
//     status=prompt('Maaf, Silahkan Masukan Status Anda\n(single, taken, atau complicated):').toLowerCase()
    

//     if (status=='single'){
//     alert('You Are Very Welcome\nBiaya yang harus Anda bayar: \n'+x)

//     } else if (status=='taken'){    
//     alert('Kami Tidak Menanggung Resikonya\nBiaya yang harus Anda bayar: \n'+x)
     
//     } else if (status=='complicated'){
//     alert('Maap masukan status anda kembali:')
      
// } coba dalam while atau do while

// while(status=='complicated'){
// (status=prompt('Maaf, Silahkan Masukan Status Anda\n(single, taken, atau complicated):'.toLowerCase()))
// }
// switch (true){
//     case status=='single':
//         alert('You Are Very Welcome\nBiaya yang harus Anda bayar: \n'+x)
//         break;
//     case  status=='taken':
//         alert('Kami Tidak Menanggung Resikonya\nBiaya yang harus Anda bayar: \n'+x)
//         break;