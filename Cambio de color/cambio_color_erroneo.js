function cambiarColor() {
    const colores = ["red", "blue", "green", "yellow", "purple"];
    const indice = Math.floor(Math.random() * (colores.length - 1)); 
    document.body.style.backgroundColor = colores[indice];
}
