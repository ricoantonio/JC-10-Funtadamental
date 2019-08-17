
var totalBelanja=[0,0,0,0,0,0,0,0,0]
var s =0 
var m =0
var l =0

do {
        var daftar = parseInt (prompt (
            'daftar menu:'
            + '\n1. ayam @Rp 25000'
            + '\n2. ikan @Rp 50000'
            + '\n3. sapi @Rp 75000'
            + '\n silahkan masukan pilihan anda: '))

        if(daftar==1){
                var s=parseInt( prompt('silahkan masukan banyak ayam anda: '))
                // if (totalBelanja[0]!=0){
                //         totalBelanja[3]= s*25000
                //         totalBelanja[]+=totalBelanja[3]
                //         totalBelanja.splice(3,1,0)
                // }else{
                totalBelanja[0]= s*25000//}
        } else if (daftar==2){
                var m=parseInt(prompt('silahkan masukan banyak ikan anda: '))
                // if (totalBelanja[0]!=0){
                //         totalBelanja[4]= m*50000
                //         totalBelanja[0]+=totalBelanja[4]
                //         totalBelanja.splice(4,1,0)
                // }else{
                totalBelanja[1]= m*50000//}
        } else if (daftar==3){
                var l=parseInt(prompt('silahkan masukan banyak sapi anda: '))
                // if (totalBelanja[0]!=0){
                //         totalBelanja[5]= l*25000
                //         totalBelanja[0]+=totalBelanja[5]
                //         totalBelanja.splice(5,1,0)
                // }else{
                totalBelanja[2]= l*75000//}
        } else{alert('Error!')}

} while (confirm('apakah anda ingin belanja lagi?'));

var total=totalBelanja[0]+totalBelanja[1]+totalBelanja[2]


do {
        var uang=prompt(
                'Total belanja'
                +'\nAyam'
                +'\n25000'+' * '+s+' = '+totalBelanja[0]
                +'\nIkan'
                +'\n50000'+' * '+m+' = '+totalBelanja[1]
                +'\nSapi'
                +'\n75000'+' * '+l+' = '+totalBelanja[2]
                +'\n'
                +'\nTotal yang harus anda bayar adalah: '+ total
                +'\n'
                +'\nMasukan Jumlah uang anda:'
                )
                
        var selisih =Math.abs(uang-total)
        var abis=true
        if(uang<total){
                alert('Jumlah uang yang anda masukan kurang: Rp' + selisih
                + '\nTotal belanja anda: Rp' +total
                + '\nUang yang anda masukkan: Rp' +uang)
                        abis=true
        }
        else if (uang>=total){
                console.log(
                        'Data Belanja'
                        +'\nAyam x '+ s +' = Rp'+totalBelanja[0]
                        +'\nIkan x '+ m +' = Rp'+totalBelanja[1]
                        +'\nAyam x '+ l +' = Rp'+totalBelanja[2]
                        +'\nTotal Belanja = Rp'+total
                        +'\nJumlah Uang = Rp'+uang
                        +'\nKembalian: Rp' + selisih
                        +'\nTERIMA KASIHH')

        var abis=false
        }


}while(abis==true)
