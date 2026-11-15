async function carregarGastos() {
    const resposta = await fetch("/gastos");
    const gastos = await resposta.json();

    const corpoTabela = document.getElementById("lista-gastos");
    corpoTabela.innerHTML = "";

    gastos.forEach(gasto => {
        const linha = document.createElement("tr");

        const campos = [
            gasto.descricao,
            Number(gasto.valor).toFixed(2),
            gasto.data,
            gasto.categoria
        ];

        campos.forEach(texto => {
            const celula = document.createElement("td");
            celula.textContent = texto;
            linha.appendChild(celula);
        });

        corpoTabela.appendChild(linha);
    });
}

carregarGastos();

document.getElementById("form-gasto").addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const gasto = {
        descricao: document.getElementById("descricao").value,
        valor: Number(document.getElementById("valor").value),
        data: document.getElementById("data").value,
        categoria: document.getElementById("categoria").value
    };

    await fetch("/gastos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gasto)
    });

    document.getElementById("form-gasto").reset();
    carregarGastos();
});