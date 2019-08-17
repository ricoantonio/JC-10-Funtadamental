/*
Kisi-kisi
1. segitga, persegi 
2. nembak kearray 
3. array :sorting
4. looping 
5. if else atau switch case / pecabangan
6. object 
7. map, filter 
8. console.log() 
*/



// falsy value 
/*
-false
-''dan "" (empty string)
-0
-null
-undefined 
-NaN
*/

// var teks=''
// if (teks){
//     console.log('teks true');
    
// }else {console.log('teks benilai false')};

// Loop ==================================================================
// suatu mekanisme pada javascript yang memungkinkan kita
// untuk melakukan suatu operasi secara berulang 
// ketika suatu keadaan tertentu bernilai true  

// var x= document.getElementById('disini')
// console.log(x);



// //a=element
// //b=index
// //c=array users
// users.map((a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// })

// SORT 
// Ascending / ASC / rendah - besar (A-Z) (1-9)
// Descending / DSC /  besar - rendah (Z-A) (9-1)

//callback function pada sort akan menerima 2 input
// callback fucntion harus return nilai<0 atau nilai >0 atau nilai=0

// return < 0, 'a', memiliki index yang lebih kecil dari 'b' 
// return 0, tidak ada perubahan posisi 
// return > 0, 'b' memiliki index yang lebih kecil dari 'a' 

// if (a-b<0){
// return a<b
// }
// if (a-b>0){
// return a>b
// }
// if (a-b==0){
// return     
// }

// var nama=['Tony','Peter','Bruce','Thor','Loki']
// console.log(nama.sort());

// var angka=[3,17,9,12,10]

// // ASC
// angka.sort((a,b)=>{
//     return a-b
   
// })

// console.log(angka);

// //DSC
// angka.sort((a,b)=>{
//     return b-a
  
// })

// console.log(angka);

// FUNCTION
/*
block kode yang dapat diberikan nama 
-dsapat digunakan secara berulang
-dapat menerima input (tidak harus)
-input dapat berupa integer, string, object, array, boolean, bahakan function laiinya 
-inputan berupa function, maka function tersebut disebut sebagai callback function
-jika tidak ditentukan apa yamg di reterun . function akan return undefind 



// -parameter =x,y
// -argumen =4,5
// let jumlah =(x,y)=>{
//     return x+y
// }

// jumlah (4,5)
*/

// ()=>{} 
// function x (){
// }

// let pangkat=(angka, pangkat)=>{
//     let x= Math.pow(angka, pangkat)
//     console.log(x);
    
// }

pangkat(4,3)

let angka =[13,56,9,7,21]
let kurangdari = (number ,array)=>{
    let hasilFilter= array.filter((val)=>{
        return val<=number 
    })
    return hasilFilter 

}

let hasil=kurangdari(15,angka)
console.log(hasil);
