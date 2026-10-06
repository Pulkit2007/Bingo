
export function countBingoLines(board) {
    const lines = [
        ...Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 5 }, (_, column) => row * 5 + column)
        ),
        ...Array.from({ length: 5 }, (_, column) =>
            Array.from({ length: 5 }, (_, row) => row * 5 + column)
        ),
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20],
    ];

    const lineCount = lines.filter(line =>
        line.every(index => board[index]?.marked)
    ).length;

    return {
        lineCount,
        won: lineCount >= 5,
    };
}

function generateNumbers() {
    const array = Array.from({ length: 25 }, (_, index) => ({
        id: index + 1,
        value: index + 1,
    }));

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const generatedNumbers = new Set();

export function generateRandomNumber() {
    if (generatedNumbers.size === 25) {
        throw new Error("All numbers from 1 to 25 have already been generated.");
    }

    let number;
    do {
        number = Math.floor(Math.random() * 25) + 1;
    } while (generatedNumbers.has(number));

    generatedNumbers.add(number);
    return number;
}

export function resetRandomNumbers() {
    generatedNumbers.clear();
}

export default generateNumbers;
