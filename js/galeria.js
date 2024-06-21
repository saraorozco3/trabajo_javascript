fetch('../data/images.json', {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    }
}).then((response) => {
    return response.json()
}).then((fotos) => {
    var articulo = document.getElementById("galeria")

    fotos.forEach((foto) => {
        var { nombre, url } = foto

        var imagen = document.createElement("img")
        imagen.src = url

        imagen.className = 'galeria-transition';


        articulo.appendChild(imagen)
    })
    
})