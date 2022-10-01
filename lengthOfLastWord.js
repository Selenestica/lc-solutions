const lengthOfLastWord = (s) => {
    let counter = 0;
    let foundWord = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (foundWord && s[i] === " ") {
            return counter;
        }
        if (s[i] === " ") {
            continue;
        }
        if (s[i] !== " ") {
            foundWord = true;
            ++counter;
        }
    }
    return counter;
};
