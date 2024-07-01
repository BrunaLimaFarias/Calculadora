let display = document.getElementById("display");
let operacaoAtual = null;
let operador1 = '';
let operador2 = '';
let operador2ativo = false;

function adicionaNumero(numb) {
    if (operador2ativo) {
        operador2 += numb;
        display.innerText = operador2;
    } else {
        operador1 += numb;
        display.innerText = operador1;
    }
}

function escolheOperacao(operacao) {
    if (operador1 === '') return;
    operacaoAtual = operacao;
    operador2ativo = true;
    display.innerText = operacao;
}

function limpaDisplay() {
    display.innerText = '0';
    operacaoAtual = null;
    operador1 = '';
    operador2 = '';
    operador2ativo = false;
}

function calcula() {
    let result;
    const a = parseFloat(operador1);
    const b = parseFloat(operador2);

    if (isNaN(a) || isNaN(b)) return;

    switch (operacaoAtual) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = "Erro";
            } else {
                result = a / b;
            }
            break;
        default:
            return;
    }

    display.innerText = result;
    operador1 = result.toString();
    operador2 = '';
    operador2ativo = false;
    operacaoAtual = null;
}
