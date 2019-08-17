let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev'},
    {nama: 'Alicia', umur: 32, job: 'Dev'},
    {nama: 'Alona', umur: 26, job: 'Dev'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

// RENDER LIST
var funShow = () => {
    var listManusia = arrManusia.map((val) => { // val = {name, age,  job}
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    var listJob = arrJob.map(val => { // val = string seperti 'All', 'Dev', 'CEO'
        return `<option value='${val}'>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')

}

// INPUT DATA
var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var JOB = document.getElementById('jobInput').value

    arrManusia.push({
        nama: NAMA,
        umur: UMUR,
        job: JOB
    })

    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }

    funShow()

}


// FILTER NAME
var funFilterName = () => {
    var filter = document.getElementById('search').value
    var test = []
    var list = []

    for (var i = 0; i < arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()
        
        if(name.includes(input)){ // true of false
            test.push(arrManusia[i])
        }

    }

    list = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
    
}


// FILTER UMUR
var funFilterUmur = () => {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value


    if (!(num1 == '' || num2 == '')){

        var list = arrManusia.filter(val => {
            return ( val.umur >= num1 && val.umur <= num2)
        })

        list = list.map(val => {
            return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            </tr>`
        })
    
        document.getElementById('here').innerHTML = list.join('')
    }

}


// FILTER JOB
var funFilterJob = () => {
    var selectedJob = document.getElementById('job').value

    if(selectedJob == 'All'){
        list = arrManusia
    } else {
        var list = arrManusia.filter(val => {
            return (val.job.includes(selectedJob))
        })
    }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

funShow()