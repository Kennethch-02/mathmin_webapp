document.addEventListener('DOMContentLoaded', function() {
    var calculator = document.getElementById('calculator');
    var header = document.getElementById('calculator-header');
    var offsetX = 0, offsetY = 0;
    var isDragging = false;

    header.onmousedown = function(e) {
        e.preventDefault();
        offsetX = e.clientX - calculator.offsetLeft;
        offsetY = e.clientY - calculator.offsetTop;
        isDragging = true;

        document.onmousemove = function(e) {
            if (isDragging) {
                calculator.style.left = e.clientX - offsetX + 'px';
                calculator.style.top = e.clientY - offsetY + 'px';
            }
        };

        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
});

function sumar() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var resultado = num1 + num2;
    mostrarResultado('Resultado: ' + resultado);
}

function restar() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var resultado = num1 - num2;
    mostrarResultado('Resultado: ' + resultado);
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var resultado = num1 * num2;
    mostrarResultado('Resultado: ' + resultado);
}

function dividir() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        mostrarResultado('Resultado: ' + resultado);
    } else {
        mostrarResultado('Error: División por 0');
    }
}

function esPrimo() {
    var num1 = parseInt(document.getElementById('number1').value);
    if (esNumeroPrimo(num1)) {
        mostrarResultado(num1 + ' es un número primo');
    } else {
        mostrarResultado(num1 + ' no es un número primo');
    }
}

function esNumeroPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerText = mensaje;
}
