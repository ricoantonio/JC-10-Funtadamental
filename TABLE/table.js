//array of object,(name,age,sex,job)

let arrHuman=[]

var del=(index)=>{
        arrHuman.splice(index,1)
        for (var i=index;i<arrHuman.length;i++)
            arrHuman[i].index=i
        show1()
}

let arrHewan=[]

var delHewan=(index)=>{
        arrHewan.splice(index,1)
        for (var j=index;j<arrHewan.length;j++)
            arrHewan[j].index==j
        show2()
}

//get data manusia
var fun1=()=>{
    let data_name=document.getElementById('name').value
    let data_age=document.getElementById('age').value
    let data_gender=document.querySelector('input[name=sex]:checked').value
    let data_pekerjaan=document.getElementById('job').value
    let data_index=arrHuman.length

    arrHuman.push(
        {
            nama:data_name,
            umur:data_age,
            gender:data_gender,
            pekerjaan:data_pekerjaan,
            index:data_index,
        }
    )
    show1()
}


var fun2=()=>{
    let dataNamaHewan=document.getElementById('nameH').value
    let dataUmurHewan=document.getElementById('ageH').value
    let dataGenderHewan=document.querySelector('input[name=sex]:checked').value
    let dataStatusHewan=document.querySelector('input[name=stat]:checked').value
    let dataIndexHewan=arrHewan.length


    arrHewan.push(
        {
        namaHewan:dataNamaHewan,
        umurHewan:dataUmurHewan,
        genderHewan:dataGenderHewan,
        statusHewan:dataStatusHewan,
        indexHewan:dataIndexHewan,
        }
    )   
    show2()
}


var show1=()=>{
    //human={nama,umur,gender,pekerjaan}
    let list = arrHuman.map((human)=>{
                return `<tr>
                    <td>${human.nama}</td>
                    <td>${human.umur}</td>
                    <td>${human.gender}</td>
                    <td>${human.pekerjaan}</td>
                    <td><button onclick="del(${human.index})">Delete</button></td>
                </tr>`
                })
    document.getElementById('mans').innerHTML=list.join('')

}


var show2=()=>{
    let listHewan=arrHewan.map((hewan)=>{
            return `<tr>
                <td>${hewan.namaHewan}</td>
                <td>${hewan.umurHewan}</td>
                <td>${hewan.genderHewan}</td>
                <td>${hewan.statusHewan}</td>
                <td><button onclick="delHewan(${hewan.indexHewan})">Delete</button></td>
            </tr>`
             })
    document.getElementById('hews').innerHTML=listHewan.join('')
}