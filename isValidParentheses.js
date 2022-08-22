// first solution. recursion. slow
const isValid = (s) => {
    // if s === "" this means all characters had matches and were removed
    if (s === "") {
        return true;
    }
    // false if length is less than 2 or uneven number of chars
    if (s.length < 2 || s.length % 2 !== 0) {
        return false;
    }

    // split string into array. this will be adjusted, joined back, and inserted into the recursion
    let tempArr = s.split("");
    let foundMatch = false;

    // remove all matching, connected pairs.
    for (let i = 0; i < tempArr.length - 1; i++) {
        const pair = tempArr[i] + tempArr[i + 1];
        if (pair === "[]" || pair === "()" || pair === "{}") {
            tempArr.splice(i, 1);
            tempArr.splice(i, 1);
            const newStr = tempArr.join("");
            tempS = newStr;
            foundMatch = true;
        }
    }
    if (!foundMatch) {
        return false;
    }
    return isValid(tempS);
};
