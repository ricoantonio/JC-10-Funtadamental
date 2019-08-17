
// // SORTING ==================================================================
// var buah=['belimbing','semangka','aple','salak']
// buah.sort()
// console.log(buah);

// function urut (a,b){
//     return a-b
// }

// // kalo b-a jadi besar ke kecil

// var angka =[12,2,4,15,25,45]
// angka.sort() //mengubah nilai menjadi string ['12','2','4',dst]
// console.log(angka);

// angka.sort(urut)
// console.log(angka);

function urut(a,b){
    return a.umur-b.umur
}


var list=[
    {nama:'Elisa',umur:32},
    {nama:'Sunhe',umur:27},
    {nama:'Hansen',umur:24},
    {nama:'Rudi',umur:19},
    {nama:'Alex',umur:45}
]

// console.log(list.sort(urut));
var sortedList = list.sort((a, b) => {
    if(a.nama > b.nama) {
        return 1;
    }
    if(a.nama < b.nama) {
        return -1;
    }
    return 0;
})
console.log(sortedList);


function urutHuruf(a,b) {
    
    var nameA = a.nama.toUpperCase(); // ignore upper and lowercase
    var nameB = b.nama.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  }
console.log(list.sort(urutHuruf));


var a=['adam', 'sanasn', 'eric', 'victor']
console.log(a.sort());


// //OBJECT =============================================================================
// //mamupu menyimpan data seperti array 
// //jika pada array pake index, object pake 'KEY'
// //mampu menyimpan banyak data (string,number,boolean,undefind)
// var orang=['Angga','Candra']
// //variabel dalam object dinamakan property
// //function yang ada di dalam object disebut method
// //THIS akan menunjuk objek dimana 'this' itu dipanggil 
// var manusia = {
//     //key=value
//     firstName : 'Angga',
//     lastName : 'Candra',
//     age: '32',
//     job: 'Actor',
//     sayHello: function(nama){
//         console.log('Hello '+ nama);
//     },
//     fullName:function(){
//         return this.firstName+' '+this.lastName
//     }
// }
// // console.log(manusia);
// // manusia.sayHello('Andi')
// // console.log(manusia.firstName);
// // console.log(manusia.lastName);
// var namaLengkap = manusia.fullName()
// console.log(namaLengkap);
// // OBJECT LITERAL =============================================================
// var orang = {firstName:'Budi',lastName:'Gunawan'}
// console.log(orang);
// //menambah property
// orang.job = 'Pengacara'
// console.log(orang);
// orang.makan=function(){
//     console.log('Sedang Makan');
// }
// orang.makan()
// //menghapus property
// delete orang.firstName
// console.log(orang);
// // NEW OBJECT =========================================================================
// var person =new Object()
// console.log(person);
// person.name='Siera'
// person.age=28
// console.log(person);
// OBJECT CONSTRUCToR ==========================================================
// class manusia {
//     constructor(nama, umur, job) {
//         this.firstName = nama;
//         this.age = umur;
//         this.job = job;
//     }
// }

// var baron= new manusia ('Baron', 20, 'petani')
// var brandon= new manusia ('Brandon', 25, 'kuli')

// console.log(baron);
// console.log(brandon);
// console.log(brandon.age);

// var manusia = function (nama, umur, job){
//     this.firstName =nama
//     this.age=umur
//     this.job=job
// }

// var baron= new manusia ('Baron', 20, 'petani')
// var brandon= new manusia ('Brandon', 25, 'kuli')

// console.log(baron);
// console.log(brandon);
// console.log(brandon.age);

// var object ={
//     propOne:'String Biasa',
//     propTwo:{
//         subPropOne:23,
//         subPropTwo:function(x){
//             console.log('Sub Propery '+x);
            
//         }
//     },
//     propThree:['Red','Green','Blue'],
//     propFour:[
//         12,
//         {insideOne:44,insideTwo:45}
//     ]
// }

// object.propFour[0]//12
// object.propTwo.subPropTwo(45)//Sub Property 45

// //Looping for in =====================================================================
// //looping sebnayak property dalam object
// // 'namaProp akan berisi property yang ada di dalam object hari 
// var hari={
//     pertama:'Senin',
//     kedua:'Selasa',
//     ketiga:'Rabu',
//     keempat:'Kamis',
//     kelima:'Jumat',
//     keenam:'Sabtu',
// }

// //manggil propert ada 2 cara
// console.log(hari.pertama);
// console.log(hari['pertama']);


// for (namaProp in hari){
//     console.log(namaProp+' : '+ hari[namaProp]);
    
// }

// CLASS (Template terbaru)=============================================================================

// class Binatang {
//     constructor(place,hidup){
//         //properties
//         this.tempatTinggal=place,
//         this.benyawa=hidup
//     }
//     //method
//     makan(x){
//         console.log('Sedang Makan '+x);
        
//     }
//     nafas(){
//         console.log('Sedang Bernafas');
        
//     }
// }

// var kambing = new Binatang('jawa',true)
// console.log(kambing);
// kambing.makan('Cereal')

//=======================================================================

// class MakhlukHIdup {
//     constructor(nama,place,hidup){
//         //properties
//         this.name=nama,
//         this.tempatTinggal=place,
//         this.benyawa=hidup
//     }
//     //method
//     bernafas(){
//         console.log('Sedang Bernafas');
        
//     }
// }


// //apa yang ada di dalam kelas makhlukhidum masuk ke manusia
// class Manusia extends MakhlukHIdup{
//     constructor(nama,place,hidup,akal,karya,){
//         super(nama,place,hidup)
//         this.berakal=akal,
//         this.berkarya=karya

//     }
//     bergerak(arah){
//         console.log('sedang bergerak ke' +arah);
//     }
//     cariUang(){
//         console.log(this.name+' sedang cari uang');
        
//     }
// }

// var brew = new Manusia('Brew Master', 'Bumi', true, true,'Lukisan')

// console.log(brew);

// brew.bernafas()
// brew.bergerak('kanan')
// brew.cariUang()

// class Hewan extends MakhlukHIdup{
//     constructor(nama,place,hidup,sayap){
//         super(nama,place,hidup)
//         this.bersayap=sayap

//     }
//     bergerak(arah){
//         console.log(this.name+' sedang bergerak ke'+ arah);
        
//     }
//     berburu(sesuatu){
//         console.log(this.name+' sedang berburu '+ sesuatu)
        

//     }
  
// }

// var sapi=new Hewan('gorgie','sawah',true,false)
// console.log(sapi);
// sapi.berburu('kudanil')


// class Tumbuhan extends MakhlukHIdup{
//     constructor(nama,place,hidup){
//         super(nama,place,hidup)
        
//     }
//     fotosintesis(){
//         console.log('sedang fotosintesis');
        
//     }


// }

// var kaktus=new Tumbuhan('mat','kontrakan',true)
// console.log(kaktus);

/*
manusia
    -nama
    -tempat tinggal
    -bernyawa
    - akal
    - berkarya

    -Bernafas 
    -bergerak 
    -cari uang 
    -


*/

/*
hewan 
    -nama
    -tempat tinggal
    -bernyawa
    -bersayap

    -bergerak
    -berburu
    -bernafas
    -

*/

/*
tumbuhan 
    -nama
    -temoat tinggal 
    -benyawa

    -fotosintesis
    -bernafas
*/


