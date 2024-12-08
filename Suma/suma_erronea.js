function calcularSuma() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const suma = Number(num1) + Number(num2)
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}


