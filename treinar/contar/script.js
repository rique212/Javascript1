function contar() {
    let inicio = Number(document.getElementById("inicio").value);
    let fim = Number(document.getElementById("fim").value);
    let passo = Number(document.getElementById("passo").value);

    let contador = document.getElementById("contador");

    contador.innerHTML = "Contando...<br>";

    for (let i = inicio; i <= fim; i += passo) {
        contador.innerHTML += `${i} 👉 `;
    }

    contador.innerHTML += "🏁";
}