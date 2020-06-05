console.log(document.getElementById("header"))

let questionText = document.getElementById("question")

let groupQuestion = ['Apakah kamu mengalami demam di atas 38 derajat?', 'Oke, apakah ada gejala batuk, pilek atau nyeri tenggorokan?', 'Apakah napas kamu sesak atau dada terasa berat, sampai merasa kesulitan untuk berbicara?', 'Apakah kamu memiliki riwayat bepergian ke negara dengan wabah virus Corona di luar Indonesia dalam jangka waktu 14 hari terakhir?', 'Apakah kamu bekerja di / pernah mengunjungi fasilitas publik/kesehatan yang berhubungan dengan pasien positif COVID-19?', 'Adakah hubungan / kontak langsung dengan orang yang baru bepergian ke negara / kota terjangkit dalam 14 hari terakhir?', 'Baik, apa terdapat riwayat kontak (misalnya: berjabat tangan, mengobrol lama, berada dalam satu ruangan) dengan orang yang sudah dinyatakan positif terinfeksi virus Corona?']
let valueQuestion = [10, 10, 20, 30, 30, 30, 70]
let indexQuestion = 0
let num = 0;

function ya(){
    indexQuestion++
    num += valueQuestion[indexQuestion]
    questionText.innerText = groupQuestion[indexQuestion]
    if(indexQuestion == groupQuestion.length-1){
        res()
        document.querySelector('#question-list').style.display = 'none'
        document.querySelector('#hasil').style.display = 'block'
    }
   
}

function tidak(){
    indexQuestion++
    num += 0
    questionText.innerText = groupQuestion[indexQuestion]
    if(indexQuestion == groupQuestion.length-1){
        res()
        document.querySelector('#question-list').style.display = 'none'
        document.querySelector('#hasil').style.display = 'block'
    }
  
}

function res(){
    let kesimpulanAkhir = document.getElementById("kesimpulan")

    if (num >= 70 ){
        kesimpulanAkhir.innerText = "Kamu termasuk dalam Kategori Risiko Tinggi"
    }else{
        kesimpulanAkhir.innerText = "Kamu termasuk dalam Kategori Risiko Rendah"
    }
}


