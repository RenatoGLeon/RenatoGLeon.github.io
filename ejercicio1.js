
let btnMin = document.getElementById("btnMin");
let btnMax = document.getElementById("btnMax");
let btnOtro = document.getElementById("btnOtro");
let imgPrueba = document.getElementById("imgPrueba");

let alturaInicial = 100;
let anchoInicial = 100;
let AumentoReduccion = 30;

btnMin.addEventListener("click", function(){
    let ancho = imgPrueba.getAttribute("width");
    let altura = imgPrueba.getAttribute("height");
    let anchoSinPX = ancho.replace("px", "");
    let alturaSinPX = altura.replace("px","");
    imgPrueba.setAttribute("width", fn_formatMedidaPx(anchoSinPX - AumentoReduccion));
    imgPrueba.setAttribute("height", fn_formatMedidaPx(alturaSinPX - AumentoReduccion));
});

btnMax.addEventListener("click", ()=>{
    let ancho = imgPrueba.getAttribute("width");
    let altura = imgPrueba.getAttribute("height");
    let anchoSinPX = ancho.replace("px", "");
    let alturaSinPX = altura.replace("px","");
    imgPrueba.setAttribute("width", fn_formatMedidaPx(parseInt(anchoSinPX) + AumentoReduccion));
    imgPrueba.setAttribute("height", fn_formatMedidaPx(parseInt(alturaSinPX) + AumentoReduccion));
});

btnOtro.addEventListener("click", fn_dimension_inicial);
function fn_dimension_inicial(){
    imgPrueba.setAttribute("width", fn_formatMedidaPx(anchoInicial));
    imgPrueba.setAttribute("height", fn_formatMedidaPx(alturaInicial));
}
function fn_formatMedidaPx(dimension){
    return dimension + "px";
};
