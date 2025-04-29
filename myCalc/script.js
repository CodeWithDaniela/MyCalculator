const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const bttsomar = document.getElementById("bttSomar");
const resultado = document.getElementById("resultado");

bttsomar.addEventListener('click', () => {
    let a = parseFloat(numero1.value);
    let b = parseFloat(numero2.value);
    let soma = a + b;
    resultado.textContent = `${a} + ${b} = ${soma}`;
})

// Copiar para o final do ficheiro script.js 

// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js') // Caminho para o arquivo sw.js
        .then((registration) => {
          console.log('Service Worker registado com sucesso:', registration.scope);
        })
        .catch((error) => {
          console.log('Falha ao registar o Service Worker:', error);
        });
    });
  }
  document.getElementById('bttSomar').addEventListener('click', function () {
    calcular('+');
});
document.getElementById('bttSubtrair').addEventListener('click', function () {
    calcular('-');
});
document.getElementById('bttMultiplicar').addEventListener('click', function () {
    calcular('*');
});
document.getElementById('bttDividir').addEventListener('click', function () {
    calcular('/');
});

function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = '';

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, insira dois números válidos.';
    } else {
        switch (operacao) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1 / num2 : 'Não é possível dividir por zero.';
                break;
        }
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
document.getElementById('bttLimpar').addEventListener('click', function () {
  document.getElementById('numero1').value = '';
  document.getElementById('numero2').value = '';
  document.getElementById('resultado').textContent = '';
});
