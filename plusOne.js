const digiArr = [9, 9, 9, 9]; // 1, 2, 4, 0, 0, 0

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        // if the item is a 9, make it a 0
        if (digits[i] === 9) {
            digits[i] = 0;
            // basically, if a 9 was the first item in the array then add 1 to the beginning
            if (!digits[i - 1]) {
                digits.unshift(1);
            }
            continue;
        }
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
    }
    return digits;
};

console.log(plusOne(digiArr));
