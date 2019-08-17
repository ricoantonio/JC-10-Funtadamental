
var jumlah=1
var data
var data1
var dadu1
var dadu2
var array
data=[]

while (jumlah!==10000){
    dadu1=Math.ceil(Math.random()*6)
    // console.log(dadu1);
    dadu2=Math.ceil(Math.random()*6)
    // console.log(dadu2);
    
    data.push(dadu1 + ',' + dadu2)
    jumlah++
    // console.log(jumlah);
    
}

var hasil,result
hasil=data.indexOf('5,5')
console.log(hasil);

console.log(hasil/10000);


