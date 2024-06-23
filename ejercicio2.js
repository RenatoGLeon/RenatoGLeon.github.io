setTimeout(mostrarDatos, 5000);
function mostrarDatos(){
    let date = new Date();
    console.log("Hora Actual: " + date.toLocaleTimeString());

}

setInterval(mostrarImg, 1000);

function mostrarImg(){
    let date = new Date();
    console.log("Hora Actual:" + date.toLocaleDateString());
}