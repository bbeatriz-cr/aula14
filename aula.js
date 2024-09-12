function habilitado() {
    let elemento = document.querySelector('select').value

    if (elemento == "Desabilitado") {
        document.querySelector('input').disabled = true
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = "DESABILITADO"
        elemento.style.color = "white"
        elemento.style.backgroundColor = "red"

    } else {
        document.querySelector('input').disabled = false
        let elemento = document.querySelector('.texto')
        elemento.innerHTML = ""

    }
}