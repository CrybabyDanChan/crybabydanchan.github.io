const getNaturalNumbers = function(diapason) {
    const numbers = [];
    const naturalNumbers = [];

    for (let i = 0; i < diapason; i++) {
        numbers[i] = i + 1;
    }

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        naturalNumbers.push(currentNumber);

        for(let index = 1; index < i; index++) {
            if (!(currentNumber % numbers[index])) {
                naturalNumbers.pop();
                break;
            }
        }
    }

    return naturalNumbers;
}

const result = getNaturalNumbers(10);