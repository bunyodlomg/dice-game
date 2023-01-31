const score1 = document.querySelector('#score--0'),
    score2 = document.querySelector('#score--1'),
    current1 = document.querySelector('#current--0'),
    current2 = document.querySelector('#current--1'),
    btnNewGame = document.querySelector('.btn--new'),
    btnRoll = document.querySelector('.btn--roll'),
    btnHold = document.querySelector('.btn--hold'),
    dice = document.querySelector('.dice'),
    player1Bg = document.querySelector('.player--0'),
    player2Bg = document.querySelector('.player--1');

let bool1 = false,
    bool2 = false,
    current1Score = 0,
    current2Score = 0,
    player1 = 0,
    player2 = 0,
    num = 0;

btnRoll.addEventListener('click', () => {
    num = Math.floor(Math.random() * 6) + 1
    dice.classList.add('animate__rotateIn')
    dice.src = `./dice-${num}.png`;
    if (!bool1) {
        current1Score += num
        if (num == 1) {
            current1Score = 0
            bool1 = true;
            player2Bg.classList.toggle('player--active')
            player1Bg.classList.toggle('player--active')
        }
        current1.textContent = current1Score
    } else {
        current1Score = 0
        current1.textContent = current1Score
        current2Score += num
        if (num == 1) {
            current2Score = 0
            bool1 = false;
            player2Bg.classList.toggle('player--active')
            player1Bg.classList.toggle('player--active')
        }

        current2.textContent = current2Score
    }
    setTimeout(() => {
        dice.classList.remove('animate__rotateIn')

    }, 500)
})

btnHold.addEventListener('click', () => {
    bool1 = !bool1;
    player2Bg.classList.toggle('player--active')
    player1Bg.classList.toggle('player--active')
    player1 += Number(current1.textContent)
    player2 += Number(current2.textContent)
    num = 0
    current1Score = 0
    current2Score = 0
    current1.textContent = 0
    current2.textContent = 0
    score1.textContent = player1
    score2.textContent = player2
    if (player1 > 99 || player2 > 99) {
        btnRoll.disabled = true
        btnHold.disabled = true
    }
    if (player1 > 99) {
        player1Bg.classList.toggle('player--winner')
        current1.textContent = 0
        current2.textContent = 0
    } else if (player2 > 99) {
        player2Bg.classList.toggle('player--winner')
        current1.textContent = 0
        current2.textContent = 0
    }
})

btnNewGame.addEventListener('click', () => {
    btnRoll.disabled = false
    btnHold.disabled = false
    dice.src = ``;
    player1 = 0
    player2 = 0
    current1Score = 0
    current2Score = 0
    current1.textContent = 0;
    current2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    player1Bg.classList.add('player--active')
    player2Bg.classList.remove('player--active')
    player1Bg.classList.remove('player--winner')
    player2Bg.classList.remove('player--winner')

});