
//?Creamos una variable que haga referencia a la variable formulario del HTML 
 formulario = document.getElementById("formulario");
 inputsbutton = document.getElementById("inputsbutton");
 mensajeBtn= document.getElementById("mensajeBtn");

formulario.addEventListener("submit", actionformulario);
function actionformulario(event ){
    // Previene que el formulario se envie automaticamente al inicio
    event.preventDefault();
    alert(`Se contactara con ueste pronto`);
    console.log("Estoy en mi funcion asctionformulario");
    //Elimina los datos que hemos colcado
    formulario.reset();
}

inputsbutton.addEventListener("click", () => {
    alert("Gracias por contatarme, su mensaje sera enviado");
    mensajeBtn.textContent ="Su mensaje ha sigo enviado";
    formulario.reset();
    //TODO Formas para cambiar el color de mi mensaje
    // La primera sería desde el js
    mensajeBtn.style.color="Green";
    // La segunda sería desde el css
    // mensajeBtn.classList.add("enviado");
});
    