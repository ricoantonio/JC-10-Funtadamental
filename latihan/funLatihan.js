let balik =(x)=>{
    x=x.toLowerCase()
    if (x=="sup"){
        return "tumpah dong"
    }else{
        
        let jumlah = x.length
        var katabaru=""
        for (let i = jumlah; i >= 0; i--) {
            var huruf=x.charAt(i)
            katabaru += huruf
        }
        return katabaru
    }      
}

plusminus=(x)=>{
    var hasil=x[0]
    for (let i = 1; i < x.length; i++) {
        if (i%2==0){
            hasil += x[i]
        } 
        if (i%2==1){
            hasil -= x[i]
        }
    }
    return hasil
}



console.log(balik("SUP"));
console.log(plusminus([2,3,5]));


