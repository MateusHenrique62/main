alert('Seja bem vindo ao nosso jogo');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

if (numeroSecreto == chute) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}
    `);
} else {
    alert('Você errou :(')
}