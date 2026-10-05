
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

export default generateNumbers;