
list=[
    [1,'Moli',8],
    [4,'Cimi',3],
    [5,'Bambo',5]
]
// for (var i=0;i<list.length;i++){
// }
function login(){
awal = prompt('Selamat Datang di Bunbin\nMasukan Username (admin/boss)')
}
function daftar(list){
    var x=''
    
    for (var i=0;i<list.length;i++){

        x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
        
    }
    return x
}

var sesuatu =true
do{
login()
    if (awal=='admin'){
        do{
            menuAdmin=prompt(
            'Menu Admin'
            +'\n1.Show List Binatang'
            +'\n2.Input Binatang'
            +'\n3.Exit'
            )
            var admin=true
            if (menuAdmin==1){
                alert(`Daftar binatang \n${daftar(list)}`)
                // console.log(x)
                // alert (
                //     'Daftar Binatang'
                // +'\n'+x) 
                admin=true
            }       
            if (menuAdmin==2){
                var a=prompt('Masukkan nomor id binatang:')
                var b=prompt('Masukkan nama binatang:')
                var c=prompt('Masukkan umur binatang:')
                list.push([a,b,c])
                var x =''
                for (var i=0;i<list.length;i++){
                    x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
                }
                alert(
                    'Input Berhasil, data sudah diperbaharui'
                    +'\n'+ x
                    )
                    admin=true
                }
            if (menuAdmin==3){
                var confirmAdmin=confirm('Apakah anda yakin akan keluar sebagai admin?')
                if(confirmAdmin==false){admin=true}
                else{admin=false}
            }
            }while(admin==true)
    }
    if (awal=='boss'){
        do{
            menuAdmin=prompt(
            'Menu Boss'
            +'\n1.Show List Binatang'
            +'\n2.Input Binatang'
            +'\n3.Edit Binatang'
            +'\n4.Delete Binatang'
            +'\n5.Exit'
            )
            var admin=true
            if (menuAdmin==1){
                var x=''
                for (var i=0;i<list.length;i++){
                    x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
                }
                alert (
                    'Daftar Binatang'
                    +'\n'+x) 
                admin=true
            }       
            if (menuAdmin==2){
                var a=prompt('Masukkan nomor id binatang:')
                var b=prompt('Masukkan nama binatang:')
                var c=prompt('Masukkan umur binatang:')
                list.push([a,b,c])
                var x =''
                for (var i=0;i<list.length;i++){
                    x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
                }
                alert(
                    'Input Berhasil, data sudah diperbaharui'
                    +'\n'+ x
                    )
                    admin=true
                }
            if(menuAdmin==3){
                var x=''
                for (var i=0;i<list.length;i++){
                    x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
                }
                var edit=prompt(
                    'Daftar Binatang'
                    +'\n'+x
                    +'\nPilih binatang yang ingin di edit'
                )
                var confirmEdit=confirm(
                    'Apakah anda yakin ingin edit binatang ini?'
                    +'\n\n'+
                    edit+'. Id:'+list[edit][0]+', Nama: '+list[edit][1]+', Usia: '+list[edit][2]
                )
                    if (confirmEdit==true){
                    var jenisEdit=prompt(
                        'Apa yang ingin anda edit?'
                        +'\n\n1.Edit Id'
                        +'\n2.Edit Nama'
                        +'\n3.Edit Usia'
                    )
                        if(jenisEdit==1){
                            var baru1=prompt(
                                'Masukkan Id Baru Untuk'
                                +'\n\n '+list[edit][1]
                            )
                            list.splice(edit,1,[baru1,list[edit][1],list[edit][2]])
                            alert(
                                'Data Telah diperbaharui'
                                +'\n\n'+edit+'. Id:'+list[edit][0]+', Nama: '+list[edit][1]+', Usia: '+list[edit][2]
                            )
                            admin=true
                        }
                        if(jenisEdit==2){
                            var baru2=prompt(
                                'Masukkan Nama Baru Untuk'
                                +'\n\n '+list[edit][1]
                            )
                            list.splice(edit,1,[list[edit][0],baru2,list[edit][2]])
                            alert(
                                'Data Telah diperbaharui'
                                +'\n\n'+edit+'. Id:'+list[edit][0]+', Nama: '+list[edit][1]+', Usia: '+list[edit][2]
                            )
                            admin=true
                        }
                        if(jenisEdit==3){
                            var baru3=prompt(
                                'Masukkan Usia Baru Untuk'
                                +'\n\n '+list[edit][1]
                            )
                            list.splice(edit,1,[list[edit][0],list[edit][1],baru3])
                            alert(
                                'Data Telah diperbaharui'
                                +'\n\n'+edit+'. Id:'+list[edit][0]+', Nama: '+list[edit][1]+', Usia: '+list[edit][2]
                            )
                            admin=true
                        }
                    }
                    if (confirmEdit==false){
                        admin=true
                    }
            } 
            if (menuAdmin==4){
                var x=''
                for (var i=0;i<list.length;i++){
                    x += i+'. Id:'+list[i][0]+', Nama: '+list[i][1]+', Usia: '+list[i][2]+'\n'
                }
                var del=prompt(
                    'Daftar Binatang'
                    +'\n'+x
                    +'\nPilih binatang yang ingin di hapus'
                )
                var confirmdelete=confirm(
                    'Apakah anda yakin ingin menghapus binatang ini?'
                    +'\n\n'+
                    del+'. Id:'+list[del][0]+', Nama: '+list[del][1]+', Usia: '+list[del][2]
                )
                if (confirmdelete==true){
                    list.splice(del,1)
                    alert('Berhasil Terhapus')
                    admin=true
                }
                if (confirmdelete==false){
                    admin=true
                }
            }
            if (menuAdmin==5){
                var confirmAdmin=confirm('Apakah anda yakin akan keluar sebagai boss?')
                if(confirmAdmin==false){admin=true}
                else{admin=false}
            }
            }while(admin==true)
        }
    sesuatu=true
}while(sesuatu=true)   
