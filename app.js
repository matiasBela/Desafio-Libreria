
let clickEnAlerta = document.getElementById("libreria")
clickEnAlerta.addEventListener("click", alerta)

function alerta () {

Swal.fire({
    title:"Desafio Libreria ",
    text:"Coderhouse",
    icon:"success",
    footer:"Haz click en 'OK' para salir o espera 10 seg",
    confirmButtonText:"OK",
    timer: 10000,
    timerProgressBar: true,

    
})

}


