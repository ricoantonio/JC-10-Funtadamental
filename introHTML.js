
let myFunction=()=>{
    //mengambil element html yang memiliki id='nama'
    //'name akan berupa objek yang memiliki banauyak property
    // property 'value' menyimpan data yang kita ketik 
    let name=document.getElementById('nama')
    let usia=document.getElementById('usia')
    //Gender adalah sebuah array dimana slah satunya akan bernilai true,untuk property checked 
    //get document dengan aturan CSS
    //getelement yang memiliki atribut name=gender 
    //dan property checkednya bernilai true 
    let genderArray=document.querySelector('input[name=gender]:checked')
    // let gender
    // let genderArray=document.getElementsByName('gender')
    // for (var i=0;i<genderArray.length;i++){
    //     if(genderArray[i].checked){
    //         gender=genderArray[i].value
    //     }
    // }
    let pekerjaan=document.getElementById('pekerjaan')
    //skill berisi array, akan di loop untuk diambil valuenya 
    let skillArray=document.querySelectorAll('input[name=skill]:checked')
    let skill=''
    for (var j=0;j<skillArray.length;j++){
        if(skillArray[j].checked){
            skill+=` ${skillArray[j].value},`
        }
    }
    //menghilangkan koma diakhir 
    skill=skill.slice(0,-1)

    let p=document.getElementById('disini')
    
    // bisa baca coommand html
    p.innerHTML = 
    `Nama: ${name.value} <br>
    Usia: ${usia.value} <br>
    Gender: ${genderArray.value} <br>
    Pekerjaan: ${pekerjaan.value} <br>
    Skill= ${skill}`
    // tidak bisa baca bomand html
    // p.innerText = 'Berubah'
}


