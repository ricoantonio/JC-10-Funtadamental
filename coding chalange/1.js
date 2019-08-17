var arrAngka = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
document.getElementById('1').innerHTML=arrAngka[0][0]
document.getElementById('2').innerHTML=arrAngka[0][1]
document.getElementById('3').innerHTML=arrAngka[0][2]
document.getElementById('4').innerHTML=arrAngka[0][3]
document.getElementById('5').innerHTML=arrAngka[1][0]
document.getElementById('6').innerHTML=arrAngka[1][1]
document.getElementById('7').innerHTML=arrAngka[1][2]
document.getElementById('8').innerHTML=arrAngka[1][3]
document.getElementById('9').innerHTML=arrAngka[2][0]
document.getElementById('10').innerHTML=arrAngka[2][1]
document.getElementById('11').innerHTML=arrAngka[2][2]
document.getElementById('12').innerHTML=arrAngka[2][3]
document.getElementById('13').innerHTML=arrAngka[3][0]
document.getElementById('14').innerHTML=arrAngka[3][1]
document.getElementById('15').innerHTML=arrAngka[3][2]
document.getElementById('16').innerHTML=arrAngka[3][3]

function urut(a,b){
    return a-b
  }
function urutb(a,b){
    return b-a
  }

  

let putar=()=>{
    var arah=document.querySelector('input[name=arah]:checked').value
    var banyak=document.getElementById('kali').value
    
  //kanan
  if (arah=='kanan'){
  do {
    var a=document.getElementById('1').innerHTML
    var b=document.getElementById('2').innerHTML
    var c=document.getElementById('3').innerHTML
    var d=document.getElementById('4').innerHTML
    var e=document.getElementById('5').innerHTML
    var f=document.getElementById('6').innerHTML
    var g=document.getElementById('7').innerHTML
    var h=document.getElementById('8').innerHTML
    var i=document.getElementById('9').innerHTML
    var j=document.getElementById('10').innerHTML
    var k=document.getElementById('11').innerHTML
    var l=document.getElementById('12').innerHTML
    var m=document.getElementById('13').innerHTML
    var n=document.getElementById('14').innerHTML
    var o=document.getElementById('15').innerHTML
    var p=document.getElementById('16').innerHTML
  document.getElementById('1').innerHTML=m
  document.getElementById('2').innerHTML=i
  document.getElementById('3').innerHTML=e
  document.getElementById('4').innerHTML=a

  document.getElementById('5').innerHTML=n
  document.getElementById('6').innerHTML=j
  document.getElementById('7').innerHTML=f
  document.getElementById('8').innerHTML=b

  document.getElementById('9').innerHTML=o
  document.getElementById('10').innerHTML=k
  document.getElementById('11').innerHTML=g
  document.getElementById('12').innerHTML=c

  document.getElementById('13').innerHTML=p
  document.getElementById('14').innerHTML=l
  document.getElementById('15').innerHTML=h
  document.getElementById('16').innerHTML=d
  banyak--
  }while(banyak>0) 
}


//KIRI
  if (arah=='kiri'){
  do{
    var a=document.getElementById('1').innerHTML
    var b=document.getElementById('2').innerHTML
    var c=document.getElementById('3').innerHTML
    var d=document.getElementById('4').innerHTML
    var e=document.getElementById('5').innerHTML
    var f=document.getElementById('6').innerHTML
    var g=document.getElementById('7').innerHTML
    var h=document.getElementById('8').innerHTML
    var i=document.getElementById('9').innerHTML
    var j=document.getElementById('10').innerHTML
    var k=document.getElementById('11').innerHTML
    var l=document.getElementById('12').innerHTML
    var m=document.getElementById('13').innerHTML
    var n=document.getElementById('14').innerHTML
    var o=document.getElementById('15').innerHTML
    var p=document.getElementById('16').innerHTML
  document.getElementById('1').innerHTML=d
  document.getElementById('2').innerHTML=h
  document.getElementById('3').innerHTML=l
  document.getElementById('4').innerHTML=p

  document.getElementById('5').innerHTML=c
  document.getElementById('6').innerHTML=g
  document.getElementById('7').innerHTML=k
  document.getElementById('8').innerHTML=o

  document.getElementById('9').innerHTML=b
  document.getElementById('10').innerHTML=f
  document.getElementById('11').innerHTML=j
  document.getElementById('12').innerHTML=n

  document.getElementById('13').innerHTML=a
  document.getElementById('14').innerHTML=e
  document.getElementById('15').innerHTML=i
  document.getElementById('16').innerHTML=m
  banyak--
  }while(banyak>0) 
}
}

let sort1=()=>{
    var a = document.getElementById('1').innerHTML
    var b = document.getElementById('2').innerHTML
    var c = document.getElementById('3').innerHTML
    var d = document.getElementById('4').innerHTML
    let hasilFilter = [a,b,c,d]
    hasilFilter.sort(urut)

  for (let i = 0; i <=3; i++) {
    document.getElementById(i + 1).innerHTML = hasilFilter[i];
  }

    // document.getElementById('1').innerHTML=hasilFilter[0]
    // document.getElementById('2').innerHTML=hasilFilter[1]
    // document.getElementById('3').innerHTML=hasilFilter[2]
    // document.getElementById('4').innerHTML=hasilFilter[3]
    var sort1b=`<td id="sort1"><input type="button" value="SORT" onclick=sort1b()></td>`
    document.getElementById('sort1').innerHTML=sort1b
   
    }
    
let sort1b=()=>{
    var a = document.getElementById('1').innerHTML
    var b = document.getElementById('2').innerHTML
    var c = document.getElementById('3').innerHTML
    var d = document.getElementById('4').innerHTML
    let hasilFilter = [a,b,c,d]
    hasilFilter.sort(urutb)

    document.getElementById('1').innerHTML=hasilFilter[0]
    document.getElementById('2').innerHTML=hasilFilter[1]
    document.getElementById('3').innerHTML=hasilFilter[2]
    document.getElementById('4').innerHTML=hasilFilter[3]
    var sort1=`<td id="sort1"><input type="button" value="SORT" onclick=sort1()></td>`
    document.getElementById('sort1').innerHTML=sort1
    }
let sort2=()=>{
    var a = document.getElementById('5').innerHTML
    var b = document.getElementById('6').innerHTML
    var c = document.getElementById('7').innerHTML
    var d = document.getElementById('8').innerHTML
    let hasilFilter = [a,b,c,d]
    hasilFilter.sort(urut)

    document.getElementById('5').innerHTML=hasilFilter[0]
    document.getElementById('6').innerHTML=hasilFilter[1]
    document.getElementById('7').innerHTML=hasilFilter[2]
    document.getElementById('8').innerHTML=hasilFilter[3]
    var sort1b=`<td id="sort2"><input type="button" value="SORT" onclick=sort2b()></td>`
    document.getElementById('sort2').innerHTML=sort1b
   
    }
    
let sort2b=()=>{
    var a = document.getElementById('5').innerHTML
    var b = document.getElementById('6').innerHTML
    var c = document.getElementById('7').innerHTML
    var d = document.getElementById('8').innerHTML
    let hasilFilter = [a,b,c,d]
    hasilFilter.sort(urutb)

    document.getElementById('5').innerHTML=hasilFilter[0]
    document.getElementById('6').innerHTML=hasilFilter[1]
    document.getElementById('7').innerHTML=hasilFilter[2]
    document.getElementById('8').innerHTML=hasilFilter[3]
    var sort1=`<td id="sort2"><input type="button" value="SORT" onclick=sort2()></td>`
    document.getElementById('sort2').innerHTML=sort1
    }

let sort3=( )=>{
  var a = document.getElementById('9').innerHTML
  var b = document.getElementById('10').innerHTML
  var c = document.getElementById('11').innerHTML
  var d = document.getElementById('12').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('9').innerHTML=hasilFilter[0]
  document.getElementById('10').innerHTML=hasilFilter[1]
  document.getElementById('11').innerHTML=hasilFilter[2]
  document.getElementById('12').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort3"><input type="button" value="SORT" onclick=sort3b()></td>`
  document.getElementById('sort3').innerHTML=sort1b
  
  }    
let sort3b=()=>{
  var a = document.getElementById('9').innerHTML
  var b = document.getElementById('10').innerHTML
  var c = document.getElementById('11').innerHTML
  var d = document.getElementById('12').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('9').innerHTML=hasilFilter[0]
  document.getElementById('10').innerHTML=hasilFilter[1]
  document.getElementById('11').innerHTML=hasilFilter[2]
  document.getElementById('12').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort3"><input type="button" value="SORT" onclick=sort3()></td>`
  document.getElementById('sort3').innerHTML=sort1b
  
  }    
let sort4=()=>{
  var a = document.getElementById('13').innerHTML
  var b = document.getElementById('14').innerHTML
  var c = document.getElementById('15').innerHTML
  var d = document.getElementById('16').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('13').innerHTML=hasilFilter[0]
  document.getElementById('14').innerHTML=hasilFilter[1]
  document.getElementById('15').innerHTML=hasilFilter[2]
  document.getElementById('16').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort4"><input type="button" value="SORT" onclick=sort4b()></td>`
  document.getElementById('sort4').innerHTML=sort1b
  
  }    
let sort4b=()=>{
  var a = document.getElementById('13').innerHTML
  var b = document.getElementById('14').innerHTML
  var c = document.getElementById('15').innerHTML
  var d = document.getElementById('16').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('13').innerHTML=hasilFilter[0]
  document.getElementById('14').innerHTML=hasilFilter[1]
  document.getElementById('15').innerHTML=hasilFilter[2]
  document.getElementById('16').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort4"><input type="button" value="SORT" onclick=sort4()></td>`
  document.getElementById('sort4').innerHTML=sort1b
  
  }    
let sort5=()=>{
  var a = document.getElementById('1').innerHTML
  var b = document.getElementById('5').innerHTML
  var c = document.getElementById('9').innerHTML
  var d = document.getElementById('13').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('1').innerHTML=hasilFilter[0]
  document.getElementById('5').innerHTML=hasilFilter[1]
  document.getElementById('9').innerHTML=hasilFilter[2]
  document.getElementById('13').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort5"><input type="button" value="SORT" onclick=sort5b()></td>`
  document.getElementById('sort5').innerHTML=sort1b
  
  }    
let sort5b=()=>{
  var a = document.getElementById('1').innerHTML
  var b = document.getElementById('5').innerHTML
  var c = document.getElementById('9').innerHTML
  var d = document.getElementById('13').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('1').innerHTML=hasilFilter[0]
  document.getElementById('5').innerHTML=hasilFilter[1]
  document.getElementById('9').innerHTML=hasilFilter[2]
  document.getElementById('13').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort5"><input type="button" value="SORT" onclick=sort5()></td>`
  document.getElementById('sort5').innerHTML=sort1b
  
  }    
let sort6=()=>{
  var a = document.getElementById('2').innerHTML
  var b = document.getElementById('6').innerHTML
  var c = document.getElementById('10').innerHTML
  var d = document.getElementById('14').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('2').innerHTML=hasilFilter[0]
  document.getElementById('6').innerHTML=hasilFilter[1]
  document.getElementById('10').innerHTML=hasilFilter[2]
  document.getElementById('14').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort6"><input type="button" value="SORT" onclick=sort6b()></td>`
  document.getElementById('sort6').innerHTML=sort1b
  
  }    
let sort6b=()=>{
  var a = document.getElementById('2').innerHTML
  var b = document.getElementById('6').innerHTML
  var c = document.getElementById('10').innerHTML
  var d = document.getElementById('14').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('2').innerHTML=hasilFilter[0]
  document.getElementById('6').innerHTML=hasilFilter[1]
  document.getElementById('10').innerHTML=hasilFilter[2]
  document.getElementById('14').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort6"><input type="button" value="SORT" onclick=sort6()></td>`
  document.getElementById('sort6').innerHTML=sort1b
  
  }    
let sort7=()=>{
  var a = document.getElementById('3').innerHTML
  var b = document.getElementById('7').innerHTML
  var c = document.getElementById('11').innerHTML
  var d = document.getElementById('15').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('3').innerHTML=hasilFilter[0]
  document.getElementById('7').innerHTML=hasilFilter[1]
  document.getElementById('11').innerHTML=hasilFilter[2]
  document.getElementById('15').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort7"><input type="button" value="SORT" onclick=sort7b()></td>`
  document.getElementById('sort7').innerHTML=sort1b
  
  }    
let sort7b=()=>{
  var a = document.getElementById('3').innerHTML
  var b = document.getElementById('7').innerHTML
  var c = document.getElementById('11').innerHTML
  var d = document.getElementById('15').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('3').innerHTML=hasilFilter[0]
  document.getElementById('7').innerHTML=hasilFilter[1]
  document.getElementById('11').innerHTML=hasilFilter[2]
  document.getElementById('15').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort7"><input type="button" value="SORT" onclick=sort7()></td>`
  document.getElementById('sort7').innerHTML=sort1b
  
  }    
let sort8=()=>{
  var a = document.getElementById('4').innerHTML
  var b = document.getElementById('8').innerHTML
  var c = document.getElementById('12').innerHTML
  var d = document.getElementById('16').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urut)

  document.getElementById('4').innerHTML=hasilFilter[0]
  document.getElementById('8').innerHTML=hasilFilter[1]
  document.getElementById('12').innerHTML=hasilFilter[2]
  document.getElementById('16').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort8"><input type="button" value="SORT" onclick=sort8b()></td>`
  document.getElementById('sort8').innerHTML=sort1b
  
  }    
let sort8b=()=>{
  var a = document.getElementById('4').innerHTML
  var b = document.getElementById('8').innerHTML
  var c = document.getElementById('12').innerHTML
  var d = document.getElementById('16').innerHTML
  let hasilFilter = [a,b,c,d]
  hasilFilter.sort(urutb)

  document.getElementById('4').innerHTML=hasilFilter[0]
  document.getElementById('8').innerHTML=hasilFilter[1]
  document.getElementById('12').innerHTML=hasilFilter[2]
  document.getElementById('16').innerHTML=hasilFilter[3]
  var sort1b=`<td id="sort8"><input type="button" value="SORT" onclick=sort8()></td>`
  document.getElementById('sort8').innerHTML=sort1b
  
  }    