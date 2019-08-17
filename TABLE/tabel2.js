// Array untuk render list manusia
let arrManusia = [
  { nama: "Alex", umur: 22, gender:'Wanita' , job: "Dev" ,index:0},
  { nama: "Alicia", umur: 32, gender:'Pria' , job: "Dev" ,index:1},
  { nama: "Alona", umur: 26, gender:'Wanita' , job: "Dev" ,index:2},
  { nama: "Batios", umur: 33, gender:'Pria' , job: "CEO" ,index:3},
  { nama: "Bakhti", umur: 38, gender:'Wanita' , job: "PM" ,index:4},
  { nama: "Charlee", umur: 27, gender:'Pria' , job: "CTO" ,index:5}
];

//Array unruk render list job
let arrJob = ["All", "Dev", "CEO", "PM", "CTO"];

// INPUT DATA
let funInputData = () => {
  //get data
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let job = document.getElementById("jobInput").value;
  let gender=document.querySelector('input[name=sex1]:checked').value
  let index=arrManusia.length

  //push data
  arrManusia.push({
    nama,
    umur,
    job,
    gender,
    index

  });
  // chcek job/menambahakan kedalam arrJob bila tidak ada
  let ada = arrJob.includes(job)
    if(!ada){
        arrJob.push(job)
    }
    
  funShow();
  document.getElementById("nama").value=''
  document.getElementById("umur").value=''
  document.getElementById("jobInput").value=''
};


//render list
let funShow = () => {
  let listManusia = arrManusia.map(val => {
    //val={nama,umur,job}
    return `<tr id='${val.index}'>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.gender}</td>
            <td><input type="button" class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
            <td><input type="button"  class="btn btn-primary" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
            </tr>`;
  });
  thead= `<th>Nama</th>
  <th>Umur</th>
  <th>Pekerjaan</th>
  <th>Kelamin</th>
  <th colspan="2">Action</th>`
  let listJob = arrJob.map((val) => {
    return `<option value='${val}'>${val} </option>`;
  });
  document.getElementById('sort').innerHTML=thead
  document.getElementById("here").innerHTML = listManusia.join("");
  document.getElementById("job").innerHTML = listJob.join("");
  

};


//FILTER 
let funFilterName=()=>{
    //get data from user
    let filter=document.getElementById('search').value

    //filtering 
    let hasilFilter=arrManusia.filter((val)=>{  // val={nama,umur,job}
        //besar kecil tidak berpengaruh / kecilkan data array dan input 
        return val.nama.toLowerCase().includes(filter.toLowerCase())
    })
    
    //render list 
    
    let list=hasilFilter.map((val)=>{
        return `<tr id='${val.index}'>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.gender}</td>
            <td><input type="button"  class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
            <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
        </tr>`
    })
    document.getElementById('here').innerHTML=list.join('')
}

//Filter Usia 
let funFilterUmur=()=>{
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value

    let list
    if(!(num1==''||num2=='')){
       list=arrManusia.filter((val)=>{
        return (val.umur>=num1&&val.umur<=num2)
       })
    }
    list=list.map((val)=>{
        return `<tr id='${val.index}'>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.gender}</td>
            <td><input type="button"  class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
            <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
        </tr>`
    })
    document.getElementById('here').innerHTML=list.join('')
}
 

//Filter Pekerjaan
let funFilterJob=()=>{
    let job=document.getElementById('job').value
    if (job==arrJob[0]){
      return funShow()
    }
    let hasilFilter=arrManusia.filter((val)=>{
        return job==val.job;
    })
    
    let list=hasilFilter.map((val)=>{
        return `<tr id='${val.index}'>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.gender}</td>
            <td><input type="button" class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
            <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
        </tr>`
    })
    document.getElementById('here').innerHTML=list.join('')
}

//Filter gender
let funFilterGender=()=>{
let gender=document.querySelector('input[name=sex]:checked').value
    
    let hasilFilter=arrManusia.filter((val)=>{
        return gender==val.gender;
    })
    
    let list=hasilFilter.map((val)=>{
        return `<tr id='${val.index}'>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.gender}</td>
            <td><input type="button" class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
            <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
        </tr>`
    })
    document.getElementById('here').innerHTML=list.join('')
  }
// Delete 
let del=(index)=>{
  arrManusia.splice(index,1)
  for (var i=index;i<arrManusia.length;i++)
    arrManusia[i].index=i
  // console.log(arrManusia);
  
  // let list=arrManusia.map((val)=>{
  //     return `<tr id='${val.index}'>
  //     <td>${val.nama}</td>
  //     <td>${val.umur}</td>
  //     <td>${val.job}</td>
  //     <td><input type="button" value="Delete" onclick="del(${val.index})"></td>
  //     <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
  // </tr>`
  // })
  // document.getElementById('here').innerHTML=list.join('')
  
  funShow()
}


//edit
let edit=(index)=>{
let hasilFilter=arrManusia.filter((val)=>{
  return val.index==index
})
let list=hasilFilter.map((val)=>{
  return `<tr>
        <td><input type="text" name="nama" id="namaBaru" value=${val.nama}></td>
        <td><input type="number" name="nama" id="umurBaru" value=${val.umur}></td>
        <td><input type="text" name="nama" id="jobInputBaru" value=${val.job}></td>
        <td>${val.gender}</td>
        <td><input type="button" class="btn btn-success" value="Save" onclick="save(${val.index})"></td>
        <td><input type="button" class="btn btn-secondary" value="Cancel" onclick="cancel(${val.index})"></td>
        </tr>`
})
document.getElementById(index).innerHTML=list.join('')
}

//save
let save=(index)=>{
  let namaBaru=document.getElementById('namaBaru').value
  let umurBaru=document.getElementById('umurBaru').value
  let jobBaru=document.getElementById('jobInputBaru').value
  let genderBaru=document.querySelector('input[name=sex]:checked').value
  let indexBaru=index
  
  
  let ada = arrJob.includes(jobBaru)
  if(!ada){
      arrJob.push(jobBaru)  
  }
  let listJob = arrJob.map((val) => {
    return `<option value='${val}'>${val} </option>`;
  });

  arrManusia.splice(index,1,{nama:namaBaru, umur:umurBaru, gender:genderBaru, job:jobBaru, index:indexBaru})
  document.getElementById("job").innerHTML = listJob.join("");
 
  cancel(index)
}

//cencel
let cancel=(index)=>{
let hasilFilter=arrManusia.filter((val)=>{
  return val.index==index
})
let list=hasilFilter.map((val)=>{
    return `<tr id='${val.index}'>
    <td>${val.nama}</td>
    <td>${val.umur}</td>
    <td>${val.job}</td>
    <td>${val.gender}</td>
    <td><input type="button" class="btn btn-danger" value="Delete" onclick="del(${val.index})"></td>
    <td><input type="button" value="Edit" class="btn btn-primary" onclick="edit(${val.index})"></td>
  </tr>`
})
document.getElementById(index).innerHTML=list.join('')
}



function urut(a,b){
  return a.umur-b.umur
}

function urutHuruf(a,b) {
    
  var nameA = a.nama.toUpperCase(); // ignore upper and lowercase
  var nameB = b.nama.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
function urutGender(a,b) {
    
  var nameA = a.gender.toUpperCase(); // ignore upper and lowercase
  var nameB = b.gender.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
function urutJob(a,b) {
    
  var nameA = a.job.toUpperCase(); // ignore upper and lowercase
  var nameB = b.job.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
let sortNama=()=>{
var  arrManusia1=[...arrManusia]
let hasilFilter=arrManusia1.sort(urutHuruf)

thead= `<th>Nama</th>
<th>Umur</th>
<th>Pekerjaan</th>
<th>Kelamin</th>`

let list=hasilFilter.map((val)=>{
    return `<tr id='${val.index}'>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
    </tr>`
})
document.getElementById('sort').innerHTML=thead
document.getElementById('here').innerHTML=list.join('')
}
let sortJob=()=>{
  var  arrManusia1=[...arrManusia]
let hasilFilter=arrManusia1.sort(urutJob)

thead= `<th>Nama</th>
<th>Umur</th>
<th>Pekerjaan</th>
<th>Kelamin</th>`

let list=hasilFilter.map((val)=>{
    return `<tr id='${val.index}'>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
    </tr>`
})
document.getElementById('sort').innerHTML=thead
document.getElementById('here').innerHTML=list.join('')
}
let sortGender=()=>{
  var  arrManusia1=[...arrManusia]
let hasilFilter=arrManusia1.sort(urutGender)

let list=hasilFilter.map((val)=>{
    return `<tr id='${val.index}'>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
    </tr>`
})
document.getElementById('sort').innerHTML=thead
document.getElementById('here').innerHTML=list.join('')
}

let sortUmur=()=>{
  var  arrManusia1=[...arrManusia]
let hasilFilter=arrManusia1.sort(urut)

thead= `<th>Nama</th>
<th>Umur</th>
<th>Pekerjaan</th>
<th>Kelamin</th>`

let list=hasilFilter.map((val)=>{
    return `<tr id='${val.index}'>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
    </tr>`
})
document.getElementById('sort').innerHTML=thead
document.getElementById('here').innerHTML=list.join('')
}
/*
let remove = (removeIndex)=>{
  let hasilRemove=arrManusia.filter ((val,index)=>{
    return index!=removeIndex
  })

  arrManusa=hasilRemove 
  funShow(arrManusia)
}

*/
funShow();

/*
onClick = event Hendeler

onKeyup = 

onInput 
*/