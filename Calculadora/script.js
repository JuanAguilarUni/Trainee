function obtenerValores() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa valores numéricos en ambos campos.");
        return null;
    }

    return { num1, num2 };
}

function mostrarResultado(valor) {
    document.getElementById('resultado').innerText = valor;
}

function sumar() {
    const valores = obtenerValores();
    if (valores) {
        const resultado = valores.num1 + valores.num2;
        mostrarResultado(resultado);
    }
}

function restar() {
    const valores = obtenerValores();
    if (valores) {
        const resultado = valores.num1 - valores.num2;
        mostrarResultado(resultado);
    }
}

function multiplicar() {
    const valores = obtenerValores();
    if (valores) {
        const resultado = valores.num1 * valores.num2;
        mostrarResultado(resultado);
    }
}

function dividir() {
    const valores = obtenerValores();
    if (valores) {
        if (valores.num2 === 0) {
            alert("No se puede dividir por cero.");
            mostrarResultado("Error");
            return;
        }
        const resultado = valores.num1 / valores.num2;
        mostrarResultado(resultado.toFixed(2)); // Redondea a 2 decimales
    }
}