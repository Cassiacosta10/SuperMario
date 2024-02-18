let formulario = document.querySelector(".fale_conosco")
let mascaraForm = document.querySelector(".mascara_form")

function cliqueiNoBotao() {
    formulario.style.left = "700px"
    mascaraForm.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style.left = "-320px"
    mascaraForm.style.visibility = "hidden"
}

