const startButton = document.getElementById('start-game');
const gameArea = document.getElementById('game-area');
const timerElement = document.getElementById('time');
let timeLeft = 30;
let gameInterval;
let heartInterval;
let score = 0;

function startGame() {
    score = 0;
    timeLeft = 30;
    timerElement.textContent = timeLeft;

    // Limpar o jogo anterior
    gameArea.innerHTML = '';

    // Iniciar o contador de tempo
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(heartInterval);
            alert(`Fim do jogo! Você encontrou ${score} corações. Parabéns, meu amor!`);
        }
    }, 1000);

    // Iniciar a criação dos corações
    heartInterval = setInterval(createHeart, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const randomX = Math.random() * 80 + '%';
    const randomY = Math.random() * 80 + '%';
    heart.style.top = randomY;
    heart.style.left = randomX;

    heart.addEventListener('click', () => {
        score++;
        alert(`Você encontrou um coração!💖`);
        heart.remove();
    });

    gameArea.appendChild(heart);
}

// Adicionar evento para o botão iniciar
startButton.addEventListener('click', startGame);