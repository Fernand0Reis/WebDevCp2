
function primo(){
    event.preventDefault();
    let numero = parseInt(document.getElementById('num').value);
    let resposta = document.getElementById('resposta');
    let divisores=0;
  
    for(let count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        resposta.innerHTML='É um número primo.';
    else
        resposta.innerHTML='Não é um número primo.';
  }

  function isPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function contarPrimos() {
    const X = parseInt(document.getElementById('inputX').value);
    const Y = parseInt(document.getElementById('inputY').value);
    const resp = document.getElementById('resp');

    if (isNaN(X) || isNaN(Y) || X <= 0 || Y <= 0) {
        resp.textContent = "Por favor, insira números inteiros positivos.";
        return;
    }

    if (X > Y) {
        resp.textContent = "O valor de X deve ser menor ou igual a Y.";
        return;
    }

    let contagem = 0;
    for (let num = X; num <= Y; num++) {
        if (isPrimo(num)) {
            contagem++;
        }
    }

    resp.textContent = `Existem ${contagem} números primos entre ${X} e ${Y}.`;
}

        function quantidadeMoedas(valor) {
            let moedas = 0;
            let respos = document.getElementById("respos");
            const valoresMoedas = [100, 50, 10, 5, 1];

            for (let i = 0; i < valoresMoedas.length; i++) {
                const moeda = valoresMoedas[i];
                while (valor >= moeda) {
                    respos.innerHTML = `Mais uma moeda de ${moeda}`;
                    moedas++;
                    valor -= moeda;
                }
            }

            return moedas;
        }

        function calculando() {
            let valor = parseInt(document.getElementById('valor').value);
            let respost = document.getElementById('respost');

            if (isNaN(valor) || valor < 0) {
                respost.innerHTML = "Por favor, insira um valor inteiro positivo.";
                return;
            }

            const totalMoedas = quantidadeMoedas(valor);
            respost.innerHTML = `Quantidade mínima de moedas para M$${valor}: ${totalMoedas}`;
        }
        function fibonacci(qnt) {
            let seq = 0;
            let fibunac = 1;
            let fibunacPassado = 0;
            let resultado = [];

            while (seq < qnt) {
                const result = fibunac + fibunacPassado;
                fibunacPassado = fibunac;
                fibunac = result;
                resultado.push(result);
                seq++;
            }

            return resultado;
        }

        function calcular() {
            let quantidade = parseInt(document.getElementById('quantidade').value);
            let re = document.getElementById('re');

            if (isNaN(quantidade) || quantidade <= 0) {
                re.innerHTML = "Por favor, insira um número inteiro positivo.";
                return;
            }

            const fiboSeq = fibonacci(quantidade);
            re.innerHTML = `Sequência de Fibonacci (${quantidade} termos): ${fiboSeq.join(', ')}`;
        }