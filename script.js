// Função para alterar o tamanho da fonte da página em tempo real
function changeFontSize(size) {
    const body = document.getElementById('body-root');
    
    // Remove todas as classes de tamanho prévias
    body.classList.remove('font-normal-size', 'font-large-size', 'font-xlarge-size');
    
    // Adiciona a classe selecionada pelo usuário
    if (size === 'normal') {
        body.classList.add('font-normal-size');
    } else if (size === 'large') {
        body.classList.add('font-large-size');
    } else if (size === 'xlarge') {
        body.classList.add('font-xlarge-size');
    }
}

// Função de validação das opções do Quiz
function checkAnswer(isCorrect) {
    const resultDiv = document.getElementById('quiz-result');
    
    // Reseta o estado visual do alerta
    resultDiv.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-900', 'bg-rose-100', 'text-rose-900');
    
    if (isCorrect) {
        resultDiv.classList.add('bg-emerald-100', 'text-emerald-900');
        resultDiv.innerHTML = '<i class="fa-solid fa-circle-check text-2xl mr-2"></i> Parabéns! Essa é a resposta certa. Nunca forneça sua senha por telefone!';
    } else {
        resultDiv.classList.add('bg-rose-100', 'text-rose-900');
        resultDiv.innerHTML = '<i class="fa-solid fa-circle-xmark text-2xl mr-2"></i> Atenção! Essa opção é perigosa. O correto é sempre desligar e nunca passar senhas.';
    }
}
