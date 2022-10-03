let contenedor = document.getElementById("lista")
let html = ''
let search = ''

function busqueda(){
console.log("busqueda()")
search = document.getElementById("inputBuscar").value;
if(search.length==0){
    alert("No puede estar vacío tu campo")
} else{
    fetch(`https://japceibal.github.io/japflix_api/movies-data.json`).then((Response) => {
    return Response.json()
