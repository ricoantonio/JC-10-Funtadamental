
let lihat=()=>{
var pilihan=document.getElementById('jenis').value 
var ukuran=document.getElementById('ukuran').value
document.getElementById('here').innerHTML=''
var bintang=''
if (pilihan==1){
    for (var i=1;i<=ukuran;i++){
    for (var j=1;j<=ukuran;j++){
        bintang+=' * '
    }
    bintang +='<br>'
    }

    document.getElementById('here').innerHTML=bintang
    }
if (pilihan==2){
    for (var i=1 ; i<=ukuran ; i++){
        for(var j=1 ; j<=i ; j++){
            bintang += ' * '
        }
        bintang += '<br>'
    }
    document.getElementById('here').innerHTML=bintang
    }
if (pilihan==3){
    for (var i=1;i<=ukuran;i++){
        for (var j=i;j<ukuran;j++){
            bintang +='&nbsp'+'&nbsp'+'&nbsp'
        }
        for (var k=1;k<=i;k++){
            bintang +='* '
        }
        bintang +='<br>'
    }
    console.log(bintang);
    
    document.getElementById('here').innerHTML=bintang
    }
}

