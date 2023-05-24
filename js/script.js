// Funções de cálculo

function calcularAreaCirculo() {
    var raio = parseFloat(document.getElementById('raioInput').value);
    var area = Math.PI * raio * raio;
    var areaOutput = document.getElementById('areaCirculoOutput');
    areaOutput.innerHTML = 'Área: ' + area.toFixed(2);
    ajustarBordaExpansiva('areaCirculoOutput');
    areaOutput.style.borderColor = 'green'; // Borda verde
    areaOutput.style.color = 'green'; // Texto em verde
}

function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById('baseInput').value);
    var altura = parseFloat(document.getElementById('alturaInput').value);
    var area = base * altura;
    var areaOutput = document.getElementById('areaRetanguloOutput');
    areaOutput.innerHTML = 'Área: ' + area.toFixed(2);
    ajustarBordaExpansiva('areaRetanguloOutput');
    areaOutput.style.borderColor = 'green'; // Borda verde
    areaOutput.style.color = 'green'; // Texto em verde
}

function calcularAreaTriangulo() {
    var base = parseFloat(document.getElementById('baseTrianguloInput').value);
    var altura = parseFloat(document.getElementById('alturaTrianguloInput').value);
    var area = (base * altura) / 2;
    var areaOutput = document.getElementById('areaTrianguloOutput');
    areaOutput.innerHTML = 'Área: ' + area.toFixed(2);
    ajustarBordaExpansiva('areaTrianguloOutput');
    areaOutput.style.borderColor = 'green'; // Borda verde
    areaOutput.style.color = 'green'; // Texto em verde
}

function calcularHipotenusa() {
    var cateto1 = parseFloat(document.getElementById('cateto1Input').value);
    var cateto2 = parseFloat(document.getElementById('cateto2Input').value);
    var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
    var hipotenusaOutput = document.getElementById('hipotenusaOutput');
    hipotenusaOutput.innerHTML = 'Hipotenusa: ' + hipotenusa.toFixed(2);
    ajustarBordaExpansiva('hipotenusaOutput');
    hipotenusaOutput.style.borderColor = 'green'; // Borda verde
    hipotenusaOutput.style.color = 'green'; // Texto em verde
}


function calcularBaskhara() {
    var a = parseFloat(document.getElementById('aInput').value);
    var b = parseFloat(document.getElementById('bInput').value);
    var c = parseFloat(document.getElementById('cInput').value);
    var delta = b * b - 4 * a * c;
    var baskharaOutput = document.getElementById('baskharaOutput');

    if (delta < 0) {
        baskharaOutput.innerHTML = 'Não existem raízes reais.';
        baskharaOutput.style.color = 'red'; // Resultado em vermelho
        baskharaOutput.style.borderColor = 'red'; // Borda vermelha
    } else if (delta === 0) {
        var raiz = -b / (2 * a);
        baskharaOutput.innerHTML = 'Raiz: ' + raiz.toFixed(2);
        baskharaOutput.style.color = 'green'; // Resultado em preto
        baskharaOutput.style.borderColor = 'green'; // Borda verde
    } else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        baskharaOutput.innerHTML = 'Raiz 1: ' + raiz1.toFixed(2) + '<br>' +
            'Raiz 2: ' + raiz2.toFixed(2);
        baskharaOutput.style.color = 'green'; // Resultado em preto
        baskharaOutput.style.borderColor = 'green'; // Borda verde
    }
    ajustarBordaExpansiva('baskharaOutput');
}


function converterMoedas() {
    var valorReais = parseFloat(document.getElementById('reaisInput').value);
    var valorDolares = valorReais / 5; // Taxa de conversão fictícia de 5
    var moedasOutput = document.getElementById('moedasOutput');
    moedasOutput.innerHTML = 'Valor em dólares: $' + valorDolares.toFixed(2);
    ajustarBordaExpansiva('moedasOutput');

    if (valorDolares < 0) {
        moedasOutput.style.borderColor = 'red'; // Borda vermelha para valor em dólares menor que zero
        moedasOutput.style.color = 'red'; // Texto em vermelho para valor em dólares menor que zero
    } else {
        moedasOutput.style.borderColor = 'green'; // Borda verde para valor em dólares maior ou igual a zero
        moedasOutput.style.color = 'green'; // Texto em verde para valor em dólares maior ou igual a zero
    }
}


function converterTemperatura() {
    var temperaturaCelsius = parseFloat(document.getElementById('celsiusInput').value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    document.getElementById('temperaturaOutput').innerHTML = 'Temperatura em Fahrenheit: ' + temperaturaFahrenheit.toFixed(2) + ' °F';
    ajustarBordaExpansiva('temperaturaOutput');

    if (temperaturaCelsius < 0) {
        ajustarBorda('temperaturaOutput', 'blue');
        ajustarTexto('temperaturaOutput', 'blue');
    } else if (temperaturaCelsius > 30) {
        ajustarBorda('temperaturaOutput', 'red');
        ajustarTexto('temperaturaOutput', 'red');
    } else {
        ajustarBorda('temperaturaOutput', 'green');
        ajustarTexto('temperaturaOutput', 'green');
    }

    if (temperaturaCelsius === 0) {
        document.getElementById('celsiusInput').value = "";
    } else if (temperaturaCelsius > 0) {
        temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        document.getElementById('celsiusInput').value = "";
    } else {
        alert("Temperatura inválida, a temperatura deve ser maior ou igual a zero.");
    }
}

function converterVelocidade() {
    var velocidadeKMH = parseFloat(document.getElementById('kmhInput').value);
    var velocidadeMS = velocidadeKMH / 3.6;
    var velocidadeOutput = document.getElementById('velocidadeOutput');
    velocidadeOutput.innerHTML = 'Velocidade em m/s: ' + velocidadeMS.toFixed(2) + ' m/s';
    ajustarBordaExpansiva('velocidadeOutput');

    if (velocidadeKMH > 80) {
        velocidadeOutput.style.borderColor = 'red'; // Borda vermelha para velocidade acima de 80 km/h
        velocidadeOutput.style.color = 'red'; // Texto em vermelho para velocidade acima de 80 km/h
    } else {
        velocidadeOutput.style.borderColor = 'green'; // Borda verde para velocidade abaixo ou igual a 80 km/h
        velocidadeOutput.style.color = 'green'; // Texto em verde para velocidade abaixo ou igual a 80 km/h
    }

    if (velocidadeKMH === 0) {
        document.getElementById('kmhInput').value = "";
    } else if (velocidadeKMH > 0) {
        velocidadeMS = velocidadeKMH / 3.6;
        document.getElementById('kmhInput').value = "";
    } else {
        alert("Velocidade inválida, a velocidade deve ser maior que zero.");
    }
}


function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1Input').value);
    var nota2 = parseFloat(document.getElementById('nota2Input').value);
    var nota3 = parseFloat(document.getElementById('nota3Input').value);
    var media = (nota1 + nota2 + nota3) / 3;
    var mediaOutput = document.getElementById('mediaOutput');
    mediaOutput.innerHTML = 'Média: ' + media.toFixed(2);
    ajustarBordaExpansiva('mediaOutput');

    if (media < 6) {
        mediaOutput.style.borderColor = 'red'; // Borda vermelha para média menor que 6
        mediaOutput.style.color = 'red'; // Texto em vermelho para média menor que 6
        mediaOutput.innerHTML += ' - Reprovado'; // Mensagem de "Reprovado"
    } else {
        mediaOutput.style.borderColor = 'green'; // Borda verde para média maior ou igual a 6
        mediaOutput.style.color = 'green'; // Texto em verde para média maior ou igual a 6
        mediaOutput.innerHTML += ' - Aprovado'; // Mensagem de "Aprovado"
    }
}

function ajustarBordaExpansiva(elementId) {
    var elemento = document.getElementById(elementId);
    elemento.style.borderStyle = 'solid';
    elemento.style.borderWidth = '1px';
    elemento.style.padding = '10px';
    elemento.style.borderRadius = '5px';
    elemento.style.display = 'inline-block';
    elemento.style.width = 'fit-content';
}


// Funções de ajuste de estilo

function ajustarBorda(elementId, cor) {
    var elemento = document.getElementById(elementId);
    elemento.style.borderColor = cor;
    elemento.style.backgroundColor = 'white';
}

function ajustarTexto(elementId, cor) {
    var elemento = document.getElementById(elementId);
    elemento.style.color = cor;
}

function ajustarBordaExpansiva(elementId) {
    var elemento = document.getElementById(elementId);
    elemento.style.borderStyle = 'solid';
    elemento.style.borderWidth = '1px';
    elemento.style.padding = '10px';
    elemento.style.borderRadius = '5px';
    elemento.style.display = 'inline-block';
    elemento.style.width = 'fit-content';
}

