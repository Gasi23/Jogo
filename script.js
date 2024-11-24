let numeroSecreto, tentativasRestantes, historicoPalpites;

function iniciarJogo() {
    let dificuldade = document.getElementById('dificuldade').value;
    historicoPalpites = [];
    document.getElementById('historico').textContent = '';
    
    if (dificuldade === 'facil') {
        numeroSecreto = Math.floor(Math.random() * 50) + 1;
        tentativasRestantes = 10;
    } else if (dificuldade === 'medio') {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativasRestantes = 7;
    } else {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativasRestantes = 5;
    }
    
    document.getElementById('mensagem').textContent = '';
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById('palpite').value = '';
}

function mudarTema() {
    let tema = document.getElementById('tema').value;
    document.body.className = tema;
    document.querySelector('.container').className = `container ${tema}`;
}

function adivinhar() {
    let palpite = parseInt(document.getElementById('palpite').value);
    historicoPalpites.push(palpite);
    document.getElementById('historico').textContent = `Palpites: ${historicoPalpites.join(', ')}`;
    
    if (tentativasRestantes > 1) {
        tentativasRestantes--;
        if (palpite < numeroSecreto) {
            document.getElementById('mensagem').textContent = 'Muito baixo! Tente novamente. Você consegue!';
        } else if (palpite > numeroSecreto) {
            document.getElementById('mensagem').textContent = 'Muito alto! Tente novamente. Você está quase lá!';
        } else {
            document.getElementById('mensagem').textContent = 'Parabéns! Você acertou o número!';
            tentativasRestantes = 0;
        }
    } else {
        document.getElementById('mensagem').textContent = `Fim de jogo! O número era ${numeroSecreto}.`;
    }

    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

iniciarJogo();
