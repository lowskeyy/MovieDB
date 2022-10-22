// Callback
// Synchronous Callback
// function kalikan(a, b) {
//     return console.log(a * b);
// }

// function jumlahkan(a, b) {
//     return console.log(a + b);
// }

// function output(angka) {
//     const nama = prompt('')
//     angka(nama);
// }

// output(nama => alert(`${nama}`));


// Asynchronous Callback
// const murid = [
//     {
//         "nama": "ILHAM",
//         "kelas": "X RPL 1",
//         "email": "ILHAM@gmail.com",
//         "jurusan": "RPL",
//         "waliKelas": "Selly"
//     },
//     {
//         "nama": "DADANG",
//         "kelas": "X RPL 1",
//         "email": "DADANG@gmail.com",
//         "jurusan": "RPL",
//         "waliKelas": "Selly"
//     },
//     {
//         "nama": "KUKUR",
//         "kelas": "X RPL 1",
//         "email": "KUKUR@gmail.com",
//         "jurusan": "RPL",
//         "waliKelas": "Selly"
//     }
//]


//  JQuery
$.ajax({
    url: `data/murid.json`,
    success: (murid) => {
        murid.forEach(e => {
            console.log(e.nama)
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
})



















