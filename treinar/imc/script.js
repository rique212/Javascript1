function calcular() {
    var nome = document.getElementsByClassName('nome')[0].value;
    var altura = parseFloat(document.getElementsByClassName('altura')[0].value);
    var peso = parseFloat(document.getElementsByClassName('peso')[0].value);
    var resultado = document.getElementsByClassName('resultado')[0];

    if (nome === '') {
        alert('Você não digitou o nome!');
        return;
    }

    if (!altura) {
        alert('Você não digitou sua altura!');
        return;
    }

    if (!peso) {
        alert('Você não digitou seu peso!');
        return;
    }

    // IMC = peso / (altura²)
    var imc = peso / (altura * altura);

    var situacao = '';

    if (imc < 18.5) {
        situacao = 'Abaixo do peso';
    } else if (imc < 25) {
        situacao = 'Peso normal';
    } else if (imc < 30) {
        situacao = 'Sobrepeso';
    } else {
        situacao = 'Obesidade';
    }
    resultado.style.color = "white";


    resultado.innerHTML = `
        <p><strong>${nome}</strong></p>
        <p>IMC: ${imc.toFixed(2)}</p>
        <p>${situacao}</p>
    `;
}