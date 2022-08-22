const romanToInt = (rNum) => {
    const romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let int = 0;
    for (let index = 0; index < rNum.length; index++) {
        if (romanObject[rNum[index]]) {
            if (rNum[index] === "I" && rNum[index + 1] === "V") {
                int += 4;
                index++;
            } else if (rNum[index] === "I" && rNum[index + 1] === "X") {
                int += 9;
                index++;
            } else if (rNum[index] === "X" && rNum[index + 1] === "L") {
                int += 40;
                index++;
            } else if (rNum[index] === "X" && rNum[index + 1] === "C") {
                int += 90;
                index++;
            } else if (rNum[index] === "C" && rNum[index + 1] === "D") {
                int += 400;
                index++;
            } else if (rNum[index] === "C" && rNum[index + 1] === "M") {
                int += 900;
                index++;
            } else {
                int += romanObject[rNum[index]];
            }
        }
    }
    return int;
};
