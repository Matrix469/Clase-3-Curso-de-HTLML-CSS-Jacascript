let formulario1 = document.getElementById("formulario1");
let buttonC = document.getElementById("buttonC");
let MenBtn = document.getElementById("MenBtn");
let dialog = document.getElementById("dialog");
let hide = document.getElementById("hide");     

buttonC.addEventListener("click", () => {
    MenBtn.textContent = "Su información ha sido enviada con éxito";
    MenBtn.classList.add("enviado");
    alert("Su información ha sido enviada con éxito");
    formulario1.reset();
});

window.buttonC.addEventListener("click",()=>{
    window.dialog.shoswModal();
});

window.hide.addEventListener("click",()=>{
    window.dialog.close();
});