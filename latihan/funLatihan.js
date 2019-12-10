// email theo 
// tmangowal@gmail.com
// Subject: Progress 1 FP JC10 JKT

// let balik =(x)=>{
//     x=x.toLowerCase()
//     if (x=="sup"){
//         return "tumpah dong"
//     }else{
        // return x.split('').reverse().join('')

//         let jumlah = x.length
//         var katabaru=""
//         for (let i = jumlah; i >= 0; i--) {
//             var huruf=x.charAt(i)
//             katabaru += huruf
//         }
//         return katabaru
//     }      
// }

// plusminus=(x)=>{
//     var hasil=x[0]
//     for (let i = 1; i < x.length; i++) {
//         if (i%2==0){
//             hasil += x[i]
//         } 
//         if (i%2==1){
//             hasil -= x[i]
//         }
//     }
//     return hasil
// }


// console.log(balik("tolong"));
// console.log(plusminus([1,2,3,4,5]));


// tambahin=(x)=>{
//     var hasilAngkaPlus=0
//     var hasilAngkaMinus=0
//     for (let i = 0; i < x.length; i++) {
//         if (x[i]<0){
//             hasilAngkaMinus += x[i]
            
//         }
//         if (x[i]>0){
//             hasilAngkaPlus += x[i]
//         }
//     }
//     return ([hasilAngkaPlus,hasilAngkaMinus])
// }

// console.log(tambahin([1,1,1,-1,-1]));


// fibo=(x)=>{
//     var angka1= 0
//     var angka2= 1
//     var array=[angka1,angka2]
//     for (let i = 2; i <=x; i++) {
//         array[i]=angka1+angka2
//         angka1=angka2
//         angka2=array[i]
//     }
//     return array
// }

// console.log(fibo(9));

// sorting=(x)=>{
//     baru=[]
//     for (var i = 0; i< x.length; i++) {
//         if (!baru.includes(x[i])){
//             baru.push(x[i])
//         }
//     }
//     return baru
// }

// console.log(sorting([1,3,3,3,4,4,3,5,5,9]));


// sort=(x)=>{
//     let baru=[x[0]]
//     for (let i = 0; i < x.length; i++) {
//         for (let j = 0; j < baru.length; j++) {
//             if(x[i]==baru[j]){
//                 break;
//             }
//             if (j==baru.length-1){
//                 baru.push(x[i])
//             }
//         }
        
//     }
//     return baru
// }
 
// console.log(sort([10,20,10,10,30,20]));


// mumble=(x)=>{
//     baru=''
//     for (let i = 0; i < x.length; i++) {
//         baru+=x[i].toUpperCase()
//         for (let j = 1; j <= i; j++) {
//             baru+=x[i].toLowerCase()
//         }
//         baru+="-"
//     }
//     string=baru.slice(0,-1)
//     return string
// }

// console.log(mumble("Hello"));

// dna=(x)=>{
//     baru=""
//     x=x.toUpperCase()
//     for (let i = 0; i < x.length; i++) {
//         if (x[i]=="A"){
//             baru+="T"
//         }
//         if (x[i]=="T"){
//             baru+="A"
//         }
//         if (x[i]=="G"){
//             baru+="C"
//         }
//         if (x[i]=="C"){
//             baru+="G"
//         }
//     }
//     return baru
// }

// console.log(dna("ATGCATGC"));

// babyShark=()=>{
//     baru=""
//     kata=["Baby shark","Mommy shark","Daddy shark","Grandma shark","Grandpa shark"]
//     for (let i = 0; i < kata.length; i++) {
//         for (let j = 0; j < 3; j++) {
//             baru+=`${kata[i]} doo doo doo doo doo doo\n`
//         }
//         baru+=`${kata[i]}\n`
//     }
//     return baru
// }

// console.log(babyShark());

// dupMap=(x,y)=>{
//     hasil=[]
//     for (let i = 0; i < x.length; i++) {
//         each=y(x[i])
//         hasil.push(each)
//     }
//     return hasil
// }

// kali=(x)=>{
//     return x*2
// }

// console.log(dupMap([1,2,3,4,5],kali))

// jumlahHuruf=(x)=>{
//     x=x.split('')
//     var huruf=[...'abcdefghijklmnopqrstuvwxyz']
//     hasil=0
//     x.forEach(val => {
//         index=huruf.indexOf(val)+1
//         hasil+=index
//     });
//     return hasil
// }

// console.log(jumlahHuruf("abcde"));

// jumlahGenap=(x)=>{
//     x=x.split('')
//     var huruf=[...'abcdefghijklmnopqrstuvwxyz']
//     hasil=0
//     x.forEach(val => {
//         index=huruf.indexOf(val)+1
//         if(index%2==0){
//             hasil+=index
//         }
        
//     });
//     return hasil
// }

// console.log(jumlahGenap("abcde"));

// jumlahIndexGanjil=(x)=>{
//     x=x.split('')
//     var huruf=[...'abcdefghijklmnopqrstuvwxyz']
//     hasil=0
//     for (let i = 0; i < x.length; i+=2) {
//         index=huruf.indexOf(x[i])+1
//         hasil+=index
//     }
        
//     return hasil
// }

// console.log(jumlahIndexGanjil("abcde"));

// kaper=(x)=>{
//         total=0
//         do {
//                 sort=parseInt(x.toString().split('').sort((a,b)=>{a-b}).join(''))
//                 sortbesar=parseInt(x.toString().split('').sort((a,b)=>{b-a}).join(''))

//                 x=sortbesar-sort
//                 while(x.length<4){
//                         x=parseInt(x.toString()+'0')
//                 }
//                 total++
              
//         } while (x!=6174);
//         return total
        
// }

// console.log(kaper("7615"));

// gaAdaVocal=(x='')=>{
//         return x.replace(/[aiueo]/gi,'')
// }
// //Regexp

// console.log(gaAdaVocal('testing'));

// target=(x)=>{
//         jumlah=0
//         p=1000
//         do {
//                 d=0.02
//                 v=50
//                 jumlahTambah=p*d+v
//                 p+=jumlahTambah
//                 jumlah++
//         } while (p<=x);
//         return jumlah
// }

// console.log(target(3500));

// angkaToHuruf=(x)=>{
//         huruf='abcdefghijklmnopqrstuvwxyz'
//         hasil=''
//         for (let i = 0; i < x.length; i++) {
//                 if (x[i]>0) {
//                         hasil+= huruf.charAt(x[i]-1)
//                 }else{
//                         hasil+=' '
//                 }
//         }
//         return hasil
// }

// console.log(angkaToHuruf([1,2,0,3]));

// hurufTambahAngka=(x,y)=>{
//         huruf='abcdefghijklmnopqrstuvwxyz'
//         hasil=''
//         index=''
//         for (let i = 0; i < x.length; i++) {
                
//                 if (y>26){
//                         index+=huruf.indexOf(x[i])
//                         hasil+=huruf.charAt(index[i]-26+y)
//                 }else{
//                         index+=huruf.indexOf(x[i])
//                         hasil+=huruf.charAt(index[i]+y)
//                 }
//         }
//         return hasil
// }


// console.log(hurufTambahAngka('abc',27));



// segitiga=(x)=>{
//         for (let i = 1; i <= x; i++) {
//                 var hasil=''
//                 for (let k = 1; k <= x-i; k++) {
//                         hasil+=' '
//                 }
//                 for (let j = 1; j <= i; j++) {
//                         hasil+='* '
                        
//                 }
//                 console.log(hasil);
//         }
        
// }

// console.log(segitiga(5));

// var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// console.log(utc);

// var arr = [{id:5, data:1},{id:5, data:1},{id:5, data:1},{id:5, data:1}]
// var data=''

// for (let i = 0; i < arr.length; i++) {
//         data+=`${arr[i].data } ,`
// }
// var hasil = data.slice(0,-1)
// console.log(hasil);

fnCoba = (x) =>{
        var arr = [x]
        console.log(arr);
        for (let i = 0; i < x.length; i++) {
                if(x[i] < 0 ){
                        x.splice(x[i], 1)
                        // }else{
                        //         if (x[i] == )
                        // }
                        i++
                }else{
                        
                }
                
        }
        return console.log(arr);
        
}

fnCoba(-2,-1,2)

// var arr = [-1,2]
// console.log(arr.splice(0,1));

// console.log(arr);
