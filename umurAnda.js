// Menentukan umur seseorang
var hari = new Date ()
var bulan = new Date ()
var tahun = new Date ()

var hari = hari.getDate()
var bulan = bulan.getMonth()+1
var tahun = tahun.getFullYear()

var jumlahHariSekarang=(tahun*365.25)+(bulan*29.5)+hari

var tanggalUltah = parseInt(prompt ('Tanggal lahir anda'))
var bulanUltah = parseInt(prompt ('Bulan lahir anda'))
var tahunUltah = parseInt(prompt ('Tahun lahir anda'))

// var tahunAnda=tahun-tahunUltah
// var bulanAnda=Math.abs(bulan-bulanUltah)
// var tanggalAnda=Math.abs(hari-tanggalUltah)

var tahunUltahHari= tahunUltah*365.25
var bulanUltahHari = bulanUltah*29.5
var jumlahHari=tahunUltahHari+bulanUltahHari+tanggalUltah

var totalHariAnda=Math.round(jumlahHariSekarang-jumlahHari)

var sisaTahun, tahunAnda
var tahunAnda=Math.floor(totalHariAnda/365.25)
var sisaTahun=Math.floor(totalHariAnda%365.25)


var bulanAnda=Math.floor(sisaTahun/29.5)
var tanggalAnda=Math.floor(sisaTahun%29.5)
alert (
    'Umur anda: '+tahunAnda+' Tahun '
    + bulanAnda + ' Bulan '
    + tanggalAnda+' Hari' 
    + '\nTotal Hari = '+totalHariAnda)
