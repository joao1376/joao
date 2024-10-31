let numeroSecreto = Math.floor(Math.random() * 100) + 1;


        function adivinhar() {
            let palpite = parseInt(document.getElementById("palpite").value);
            let resultado = document.getElementById("resultado");

            if (palpite === numeroSecreto) {
                resultado.innerText = "Parabéns! Você acertou.";
            } else if (palpite > numeroSecreto) {
                resultado.innerText = "Tente um número menor.";
            } else {
                resultado.innerText = "Tente um número maior.";
            }
        }