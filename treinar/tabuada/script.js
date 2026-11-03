function tabuada() {
    let numero = Number(document.getElementById('numero').value);
    let resultado = document.getElementById('conta_da_tabuada');

    resultado.innerHTML = '';

    if (numero == 0 && document.getElementById('numero').value == '') {
        alert('Por favor, digite um número!');
        return;
    }

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
    }
}