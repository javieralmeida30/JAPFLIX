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
}).then((data) => {   
    html=''
    if(data.length==0){
        html="No hay resultado"
    }else{
        console.log(data)
        for(let i=0; i<data.length; i++){
           // console.log(data[i].title)
            if(data[i].title==search){
                console.log("Si lo encontre")
                html+= `           
                <div class ="col-2 itemGaleria">
                <h6>${data[i].title}</h6>
                <p>"${data[i].tagline}"</p>
              </div>
               `
            }
        }
    }
contenedor.innerHTML=html
})
}

}
