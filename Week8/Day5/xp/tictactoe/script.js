let userSymbol;
let computerSymbol;
let computerLevel = 'simple';

let board = ['', '', '', '' , '', '', '', '', ''];

let gameOver = false;

const boxes = document.querySelectorAll('.box');
const symbolXButton = document.getElementById('symbolX');
const symbolOButton = document.getElementById('symbolO');
const restartButton = document.getElementById('restartButton');
const messageElement = document.getElementById('message');

function handleUserMove(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = userSymbol;
        boxes[index].textContent = userSymbol;
    
        checkGameStatus();

        if (!gameOver) {
            setTimeout(handleComputerMove, 300);
        }
    }
}

function handleComputerMove() {
    if (!gameOver) {
        const emptyBoxes = [];
        for (let i =0; i < board.length; i++) {
            if (board[i] === '') {
                emptyBoxes.push(i);
            }
        }

        let computerMove;
        
        if (computerLevel === 'simple') {
            const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
            computerMove = emptyBoxes[randomIndex];
        } else if (computerLevel === 'hard') {
            computerMove = findBestMove();
        }
        
        

        board[computerMove] = computerSymbol;

        boxes[computerMove].textContent = computerSymbol;

        checkGameStatus();
    }
}

function findBestMove() {
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = computerSymbol;
            const score = minimax(board, 0, false);
            board[i] = '';

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}

const scores = {
    X: 1,
    O: -1,
    tie: 0
};

function minimax(board, depth, isMaximizing) {
    const result = checkGameStatus();

    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = computerSymbol;
                const score = minimax(board, depth +1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
              board[i] = userSymbol;
              const score = minimax(board, depth + 1, true);
              board[i] = '';
              bestScore = Math.min(score, bestScore);
            }
          }
      
          return bestScore;
    }
}

function checkGameStatus() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2] 
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            const winner = board[a] === userSymbol ? 'You' : 'Computer';
            messageElement.textContent = `${winner} win the game`;

            gameOver = true;

            return;
        }
    }

    if (!board.includes('')) {
        messageElement.textContent = "It's a tie";

        gameOver = true;

        return;
    }
}

function resetGame() {
    board = ['', '', '', '' , '', '', '', '', '']
    gameOver = false;

    boxes.forEach(box => box.textContent = '');

    messageElement.textContent = '';

    restartButton.classList.add('hidden');
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleUserMove(index);
    });
});

symbolXButton.addEventListener('click',() => {
    userSymbol = 'X';
    computerSymbol = 'O';

    symbolXButton.classList.add('hidden');
    symbolOButton.classList.add('hidden');

    setTimeout(handleComputerMove, 200);
});

symbolOButton.addEventListener('click',() => {
    userSymbol = 'O';
    computerSymbol = 'X';

    symbolXButton.classList.add('hidden');
    symbolOButton.classList.add('hidden');

    setTimeout(handleComputerMove, 200);
});

restartButton.addEventListener('click',() => {
    resetGame();
});

function startGame() {
    symbolOButton.classList.remove('hidden');
    symbolXButton.classList.remove('hidden');

    restartButton.classList.add('hidden');

    resetGame();
}

startGame();