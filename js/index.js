// $(function () {
fetch('data/articulos.json').then((response) => {
    return response.json()
}).then((sections) => {
    var articulo = document.getElementById("articulo")

    sections.forEach((sect) => {
        var { titulo, parrafos } = sect

        var section = document.createElement("section")

        var h2 = document.createElement("h2")
        h2.innerHTML = titulo
        section.appendChild(h2)

        parrafos.forEach((parr) => {
            var p = document.createElement("p")
            p.innerHTML = parr
            section.appendChild(p)
        })

        articulo.appendChild(section)
    })
})
