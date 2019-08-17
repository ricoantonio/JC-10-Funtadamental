//Constant 
//variabel yang nilainya tidak bisa diubah 

// const bunga = 0.3
// bunga =0.5
// console.log(bunga); // error

//variabel scope 
/*
darimana suatu variabel dapat diakses

var 
    -hanya dibatasi oleh function

let & const
    -dibatasi oleh function dan kurung kurawal 
*/

// function scope(){
//     var didalam = 14
//     let doom=666
//     const pi=3.14
// }


// if(true){
//     var diluar =3
//     let doomed=999
//     const hour =24
// }

// console.log(didalam);//error
// console.log(diluar);
// console.log(doom);//error
// console.log(doomed);//error
// console.log(pi);//error
// console.log(hour);//error

// TEMPLATE STRING====================================================================================

//tick,ada dibawah tombol esc
// let teks=`Halo

//     Dunia`

// let text='Halo\nDunia'
// console.log(teks);
// console.log(text);

// function something(name,number){
// console.log(
//     `Haiiiii ${name}`
// );
// console.log(
//     number+' dikali dua = '+(number*2)
// );
// console.log(
//     `${number} dikali dua = ${number*2}`
// );
// }

// something('fake',15)

// //Includes
// //memeriksa apakah sebuah karakter ada di dalam teks tertentu 

// let kalimat = `Loren ipsum`
// let hasil =kalimat.toLowerCase().includes(`lor`) //besar/kecil huruf berperngaruh
// console.log(hasil);

//DEFAULT PARAMETER =================================================================================
// var kuadrat =function (angka){
//     console.log(angka*angka);
// }
// kuadrat (4)
// //default parameter adalah angka yang akan digunakan bila tidak diberikan input 
// var kuadrat =function (angka=3){
//     console.log(angka*angka);
// }
// kuadrat ()

//ARROW FUNCTION ====================================================================================
// var sayHello=function(name){
//     console.log(name);
    
// }
// sayHello('Bimo')

// var hello=(name)=>{
//     console.log(name);
// }
// hello(`unta`)

// //Hapus kurung kurawal kalo function singkat
// var hai=(name)=>console.log(name);
// hai('tomo')

// //Hapus kurung kalo var yg diinput hanya 1
// var kali=(angka,number)=> angka*number
    
// var angka =angka=>angka*2

//ARRAY FILTERING ======================================================================================
/*
filter menerima 1 input berupa function (callback) juga  
callback function menerima 1 input berupa data dari array 
callback function HARUS return TRUE / FALSE  
JIka return TRUE data akan tetap ada 
JIka return FALSE data akan hilang 
filter() meghasilkan array baru
*/

// let angka=[0,1,2,3,4,5]

// let hasil= angka.filter((element)=>{
//     return element <3
// })
// let genap= angka.filter((element)=>{
//     hasilHitung=element%2
//     return hasilHitung==0
// })
// let ganjil= angka.filter((element)=>{
//     return element%2==1
// })

// console.log(angka);
// console.log(hasil);
// console.log(genap);
// console.log(ganjil);

// arrayAngka=[2,24,35,3,4,5,25,8]

// let funfilter =(angka,x)=>{
//     var y=[]
//     for (var i=0;i<angka.length;i++){
//         if (x(angka[i])==true){
//         y.push(angka[i])
//         }
//     }
//     return console.log(y);
// }

// var genap=(element)=>{
//     return element%2==0
// }

// funfilter(arrayAngka,genap)

//Map Array =====================================================================================
/*
map() Sebuah fungction yang menerima input berupa function (Callback)
callback function menerima input berupa data pada array 
map() akan meretrun array baru 
map() akan mengubah bentuk suatu data ke bentuk lainnya 
*/

let angka=[2,7,3,9,12]

let hasil= angka.map((x)=>{
return x*2
})
console.log(angka);
console.log(hasil);

let hasilBoolean= angka.map((x)=>{
return x<8
})
console.log(hasilBoolean);

let hasilObject= angka.map((x)=>{
    return {hari:'Selasa',angka:x}
})
console.log(hasilObject);

let hasilObjStr=hasilObject.map((x)=>{
    return x.hari+' '+  x.angka

})
console.log(hasilObjStr);
