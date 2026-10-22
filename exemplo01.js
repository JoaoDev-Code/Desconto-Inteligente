
let formulario = document.getElementById("formulario");
let campoValor = document.getElementById("valor");
let resposta = document.getElementById("resposta");

let clienteVip = true;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let valorCompra = Number(campoValor.value);
    let desconto = 0;

    resposta.className = "resposta";

    if (campoValor.value === "" || valorCompra <= 0) {
        resposta.classList.add("erro");
        resposta.innerHTML =
            '<span class="icone">!</span><p>Digite um valor maior que zero.</p>';
        return;
    }

    if (clienteVip) {
        desconto = 10;
    } else if (valorCompra > 200) {
        desconto = 5;
    }

    let valorDesconto = valorCompra * desconto / 100;
    let valorFinal = valorCompra - valorDesconto;

    if (desconto > 0) {
        resposta.classList.add("sucesso");
        resposta.innerHTML =
            '<span class="icone">✓</span>' +
            '<p>Desconto: ' + desconto + '%' +
            '<br>Você economiza: R$ ' + valorDesconto.toFixed(2) +
            '<br>Total a pagar: R$ ' + valorFinal.toFixed(2) + '</p>';
    } else {
        resposta.classList.add("aviso");
        resposta.innerHTML =
            '<span class="icone">✦</span>' +
            '<p>Você não tem direito ao desconto desta vez.' +
            '<br>Total a pagar: R$ ' + valorFinal.toFixed(2) + '</p>';
    }
});
