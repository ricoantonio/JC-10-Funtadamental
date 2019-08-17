// //function declaration ===========================================================

// function sayHello() {
//     console.log('Hello');
    
// }
// //calling function
// sayHello()

// function sayHai(name) {
//     console.log('Hai '+ name);
    
// }

// sayHai('Andi')
// var a=sayHai('Andi')

// console.log(a);

// function jumlah (x,y){

//     var hasil =x+y
//     console.log('Hasilnya= '+hasil);
    
// }

// jumlah (5,7)

// function jumlah (x,y){

//     var hasil = x+y
    
//     return hasil 
    
// }

// var output=jumlah (5,7)
// console.log(output);

// function anyType(str,num,boolean) {
    
//     console.log(str);
//     console.log(num);
//     console.log(boolean);
    
// }

// anyType('string',26,true)

// // function selalu return 'sesuatu'
// // ketika tidak menentukan apa yang harus direturn maka yang direturn adalah undefined

// //call back function
// // function yang di ruuning oleh function lainnya 

// function satu(x,fn) {
//     console.log('Nilai x= ' +x);
//    //calling function
//    fn()
// }

// function dua (){
//     console.log('Nilai dari function dua');
    
// }
// satu(43,dua)

// function tiga(q,fn) {
//     console.log('Nilai q = '+q);
    
//     fn(q)
// }

// function empat (x){
//     console.log(x+' di kali 2 = ' + (x*2));
    
// }

// tiga(5,empat)

// function lima (number,fn){
//     console.log('X kuadrat : '+(number*number));
//     fn()    
// }
// lima (5,function () {console.log('Fn tanpa declaration')})

// function enam (x,fn){
//     var num1=25
//     var num2=35

//     console.log('Nilai X adalah '+x);
//     fn(num1,num2)
    
// }
// function tujuh(y,z){
//     console.log('Y + Z = ' + (y+z));
    
// }

// enam(9,tujuh)

// // function return function 
// function delapan (){

//     console.log('Pusing yah?');
    

//     return function (){
//         console.log('Function hasil return dari function delapan ');
        
//     }
// }

// var ini =delapan 
// var itu =delapan()

// ini()
// itu()
// itu()

// function kurang (x,y){
//     var hasil = x-y
//     return hasil 

// }

// var result = kurang (3,4)
// console.log(result);

// function pangkat (x,y){
//     if (y==1){
//         return x
//     } else {
//         return x=x*pangkat (x,y-1)
//     }
// }
// var hasil = pangkat (7,1)
// var hasil = pangkat (7,2)
// var hasil = pangkat (7,3)

// console.log(hasil);

// function waktu(){
//     console.log('Haloo');
    
// }
// setTimeout(waktu,3000)
// console.log('yuk');

// function waktu(){
//     console.log('Haloo');
    
// }
// var x=setTimeout(waktu,3000)
// console.log(x);
// clearTimeout(x)

// console.log('Yuk');

// function waktu(){
//     console.log('Haloo');
// }

// setInterval(waktu,1500)

//ARRAY==================================================================================

// var buah1 = 'apel'
// var buah2 = 'belimbing'
// var buah2 = 'rambutan'

// //index dimulai deari 0 
// var buah = ['apel', 'belimbing', 'rambutan']
// console.log(buah);
// console.log(buah.toString());
// console.log(buah.join(' - ')); // muncul di ujian 

// console.log(buah[0]);

// //untuk mengetahui bnayak data pada array
// console.log('Banyak data: '+buah.length);

// var buah = ['apel', 'belimbing', 'rambutan']

// //looping sebnayak data yang ada didalam array
// for (var i=0;i<buah.length;i++ ){
//     console.log('Buah '+buah[i]);
    
// }


//Propeties dan Methods=============================================================================

// var hari =['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']

// var idx=hari.indexOf('Rabu')
// console.log(idx);

// var idx2=hari.indexOf('Sunday')
// console.log(idx2);

// var len=hari.length
// console.log(len);

// var sort=hari.sort()
// console.log(sort);

// var rev=hari.reverse()
// console.log(rev);

//POP & PUSH ============================================================================

// let buah=['Jeruk', 'Nanas', 'Banana']
// console.log(buah);

// //pop diggunakan untuk MENGHAPUS data TERAKHIR dari suatu array
// buah.pop()
// console.log(buah);

// //push diggunakan untuk MENAMBAHKAN data di posisi TERAKHIR
// buah.push('Kiwi')
// console.log(buah);
// buah.push('Durian','Manggis')
// console.log(buah);

//SHIFT & UNSHIFT =========================================================================

// let buah=['Jeruk', 'Nanas', 'Banana']
// console.log(buah);

// //SHIFT diggunakan untuk MENGHAPUS data TERDEPAN dari suatu array
// buah.shift()
// console.log(buah);

// //UNSHIFT diggunakan untuk MENAMBAHKAN data di posisi TERDEPAN
// buah.unshift('Kiwi')
// console.log(buah);
// buah.unshift('Durian','Manggis')
// console.log(buah);


// ========================================================================================
// let buah=['Jeruk', 'Nanas', 'Banana']

// buah.splice(2,1,'Lemon','Kiwi')
// console.log(buah);
//2 itu mulai dr index ke 2
//i itu banyak data yang ingin dihilangkan 

//Merging ========================================================================================

// let nama=['Reyhan', 'Haniful','Donny']
// let nama2=['Ifan', 'Lukito','Syaiful']
// let nama5=['Budi','Ricky','David']

// let nama3=nama.concat(nama2)
// let nama6=nama.concat(nama2,nama5)
// console.log(nama3);
// console.log(nama6);


