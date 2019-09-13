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

dna=(x)=>{
    baru=""
    x=x.toUpperCase()
    for (let i = 0; i < x.length; i++) {
        if (x[i]=="A"){
            baru+="T"
        }
        if (x[i]=="T"){
            baru+="A"
        }
        if (x[i]=="G"){
            baru+="C"
        }
        if (x[i]=="C"){
            baru+="G"
        }
    }
    return baru
}

console.log(dna("ATGCATGC"));

babyShark=()=>{
    baru=""
    kata=["Baby shark","Mommy shark","Daddy shark","Grandma shark","Grandpa shark"]
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < 3; j++) {
            baru+=`${kata[i]} doo doo doo doo doo doo\n`
        }
        baru+=`${kata[i]}\n`
    }
    return baru
}

console.log(babyShark());
