var angka=[]
var loop=true
do {
    var input=prompt('Masukkan Angka')
    if (input<=0||input>=0 ){
        angka.push(input)
        loop=true
    } else{loop=false}
} while (loop==true);

function urut(a,b){
    return a-b
}
var kecil = angka[0];
var besar = angka[0];
		
for(var i=1; i< angka.length; i++){
	if(angka[i] > besar)
		besar = angka[i];
	else if (angka[i] < kecil)
        kecil = angka[i];
    }
console.log(angka.sort(urut));
console.log(`Nilai Tertinggi:${besar} `);
console.log(`Nilai Terendah:${kecil}`);


